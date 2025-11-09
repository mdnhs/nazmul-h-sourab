import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import EducationsCard from "@/components/educations/educations-card";
import { EducationsUnsorted } from "@/config/educations";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.Educations.metadata.title,
  description: pagesConfig.Educations.metadata.description,
};

export default function EducationsPage() {
  return (
    <PageContainer
      title={pagesConfig.Educations.title}
      description={pagesConfig.Educations.description}
    >
      <EducationsCard Educations={EducationsUnsorted} />
    </PageContainer>
  );
}
