import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formBaseLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (!formBaseLink) {
    return new NextResponse("Missing Google Form configuration", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    const formData = new URLSearchParams();
    formData.append(`entry.${fieldIdName}`, name);
    formData.append(`entry.${fieldIdEmail}`, email);
    formData.append(`entry.${fieldIdMessage}`, message);
    formData.append(`entry.${fieldIdSocial}`, social || "");

    const res = await fetch(`${formBaseLink}/formResponse`, {
      method: "POST",
      body: formData,
    });

    if (res.ok || res.status === 200) {
      return NextResponse.json("Success! Form submitted.", { status: 200 });
    } else {
      return new NextResponse("Failed to submit form.", { status: 400 });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
