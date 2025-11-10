import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "us-bangla-airlines",
    companyName: "US-Bangla Airlines",
    type: "Professional",
    category: ["Web Development", "Frontend", "UI/UX"],
    shortDescription:
      "Developed the official US-Bangla Airlines website using Next.js, focusing on performance, scalability, and seamless user experience for thousands of daily visitors.",
    websiteLink: "https://usbair.com/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Redux",
    ],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-02-15"),
    companyLogoImg: "/projects/us-bangla-airlines/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A visually appealing and responsive homepage highlighting key airline services, destinations, and promotions. Built with performance-first principles and optimized image loading.",
        imgArr: [
          "/projects/us-bangla-airlines/landing_1.png",
          "/projects/us-bangla-airlines/landing_2.png",
          "/projects/us-bangla-airlines/landing_3.png",
          "/projects/us-bangla-airlines/landing_4.png",
          "/projects/us-bangla-airlines/landing_5.png",
          "/projects/us-bangla-airlines/landing_6.png",
        ],
      },
      {
        title: "Flight Search & Booking",
        description:
          "An interactive and dynamic flight search experience with real-time availability, price filters, and mobile-optimized booking flow.",
        imgArr: [
          "/projects/us-bangla-airlines/booking_1.png",
          "/projects/us-bangla-airlines/booking_2.png",
        ],
      },
      {
        title: "Corporate & Information Pages",
        description:
          "Informational pages including About, Fleet, and Services — designed with accessibility and consistency in mind using a modular component system.",
        imgArr: [
          "/projects/us-bangla-airlines/info_1.png",
          "/projects/us-bangla-airlines/info_2.png",
        ],
      },
      {
        title: "Offers & Promotions Section",
        description:
          "Dynamic offer system powered by CMS data, showcasing latest discounts and packages with engaging UI and smooth transitions.",
        imgArr: ["/projects/us-bangla-airlines/offers.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Frontend Developer at TechnoNext Software Ltd., I contributed to the official website of US-Bangla Airlines — one of Bangladesh’s largest private airlines. The project aimed to modernize the airline’s online presence and provide travelers with a fast, responsive, and accessible experience.",
        "My primary focus was on crafting a modular frontend architecture using Next.js, TypeScript, and Tailwind CSS. I implemented key UI components such as dynamic flight listings, promotions, and booking flows, ensuring optimal performance and consistency across devices.",
        "Working closely with backend engineers and designers, I integrated REST APIs for live flight data and content updates. I also ensured SEO optimization, accessibility, and efficient image handling using Next.js' server-side rendering capabilities.",
        "The result was a high-performing, scalable, and visually engaging airline website that improved user engagement and reduced loading times significantly.",
      ],
      bullets: [
        "Developed and deployed the official website of US-Bangla Airlines using Next.js and TypeScript.",
        "Implemented modular and reusable UI components with Tailwind CSS for design consistency.",
        "Integrated REST APIs for dynamic flight data, promotions, and corporate content.",
        "Collaborated with backend and design teams to ensure seamless cross-functional delivery.",
        "Optimized performance, SEO, and accessibility using Next.js server-side rendering.",
      ],
    },
  },
  {
    id: "foodi",
    companyName: "Foodi",
    type: "Professional",
    category: ["Web Development", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a fast, user-friendly food ordering platform and integrated a CMS-driven content management system to support dynamic restaurant listings and campaigns.",
    websiteLink: "https://foodibd.com/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "NextAuth.js",
      "REST API",
    ],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-08-30"),
    companyLogoImg: "/projects/foodi/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A clean and responsive homepage introducing the platform, showcasing featured restaurants, and promoting ongoing offers.",
        imgArr: [
          "/projects/foodi/landing_1.png",
          "/projects/foodi/landing_2.png",
          "/projects/foodi/landing_3.png",
        ],
      },
      {
        title: "Restaurant Listings & Filters",
        description:
          "Dynamic restaurant listing page with advanced filtering, sorting, and category-based browsing to enhance discovery and user engagement.",
        imgArr: [
          "/projects/foodi/restaurants_1.png",
          "/projects/foodi/restaurants_2.png",
          "/projects/foodi/restaurants_3.png",
        ],
      },
      {
        title: "Food Item Details & Checkout",
        description:
          "Smooth product detail and checkout flow with cart management, authentication, and payment integration designed for speed and usability.",
        imgArr: [
          "/projects/foodi/checkout_1.png",
          "/projects/foodi/checkout_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At TechnoNext Software Ltd., I worked as a Frontend Developer on Foodi — a next-generation online food ordering platform connecting restaurants with customers across Bangladesh.",
        "My primary responsibility was building and optimizing the platform’s frontend using Next.js and TypeScript. I implemented key modules including restaurant listings, food item details, user authentication, and the checkout process. Each module was designed with responsiveness, scalability, and accessibility in mind.",
        "I also collaborated with backend developers to integrate REST APIs and built an admin-friendly CMS interface that enabled the Foodi team to manage restaurant data, menu updates, and promotional content dynamically through https://cms-stage.foodibd.com/.",
        "This project strengthened my experience in building real-world, data-driven web applications with a focus on smooth UX and maintainable architecture.",
      ],
      bullets: [
        "Developed and maintained the frontend for the Foodi web platform using Next.js and TypeScript.",
        "Integrated CMS for managing dynamic restaurant data, banners, and campaigns.",
        "Built modular UI components using Tailwind CSS and optimized them for reusability.",
        "Implemented secure user authentication with NextAuth.js and session-based cart management.",
        "Collaborated with backend and QA teams to ensure smooth API integration and data consistency.",
        "Improved page load performance and mobile responsiveness across all major screens.",
      ],
    },
  },
  {
    id: "cartup",
    companyName: "Cartup",
    type: "Professional",
    category: ["Web Development", "Frontend", "UI/UX"],
    shortDescription:
      "Built and optimized the frontend of Cartup’s e-commerce platform with a focus on performance, scalability and user experience across Bangladesh.",
    websiteLink: "https://cartup.com/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "REST API",
    ],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-06-15"),
    companyLogoImg: "/projects/cartup/logo.png",
    pagesInfoArr: [
      {
        title: "Homepage & Featured Collections",
        description:
          "Responsive landing page highlighting top deals, product categories and fast-delivery promise across Bangladesh.",
        imgArr: [
          "/projects/cartup/home_1.png",
          "/projects/cartup/home_2.png",
          "/projects/cartup/home_3.png",
        ],
      },
      {
        title: "Product Listing & Filters",
        description:
          "Dynamic product category pages with real-time filtering, sorting and optimized grid layouts for both mobile and desktop.",
        imgArr: [
          "/projects/cartup/listing_1.png",
          "/projects/cartup/listing_2.png",
        ],
      },
      {
        title: "Product Detail & Checkout Flow",
        description:
          "Detailed product pages with high-resolution imagery, specifications, customer reviews and a streamlined checkout workflow including mobile-friendly steps.",
        imgArr: [
          "/projects/cartup/detail_1.png",
          "/projects/cartup/checkout_1.png",
        ],
      },
      {
        title: "User Account & Order Tracking",
        description:
          "Authenticated user dashboard for order history, tracking, returns and profile management — built for usability and performance.",
        imgArr: [
          "/projects/cartup/dashboard_1.png",
          "/projects/cartup/dashboard_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I contributed as a Frontend Developer for Cartup — a rapidly growing homegrown e-commerce brand in Bangladesh, backed by the U.S.-Bangla group. :contentReference[oaicite:1]{index=1} The platform’s objective was to deliver a modern, high-performance online shopping experience to Bangladeshi consumers, combining curated product selection with fast delivery and reliable logistics.",
        "My role focused on building the frontend using Next.js and React with TypeScript, designing modular components, optimizing load times, and ensuring responsive layouts across devices. I worked closely with product, UX and backend teams to integrate REST APIs, manage state with Redux, and deploy performance optimizations.",
        "Key parts of the project included the featured deals homepage, advanced filtering and listing pages, a seamless checkout experience, and the user account/dashboard sections. Each module was tuned for usability, accessibility and mobile-first behaviour. The stack was designed to scale with high traffic and support a wide range of product categories — electronics, fashion, home & living, groceries and more. :contentReference[oaicite:2]{index=2}",
      ],
      bullets: [
        "Built and launched Cartup’s frontend platform built on Next.js, React and TypeScript.",
        "Implemented modular UI components with Tailwind CSS for consistency and reuse.",
        "Integrated product APIs and listing/filtering logic for dynamic category pages.",
        "Optimized checkout flow and product detail pages for mobile and desktop.",
        "Collaborated with UX/design teams to ensure a polished experience across devices.",
        "Improved load times, accessibility and front-end performance across the platform.",
      ],
    },
  },
  {
    id: "firsttrip",
    companyName: "FirstTrip",
    type: "Professional",
    category: ["Web Development", "Frontend", "UI/UX"],
    shortDescription:
      "Built and launched a modern travel-tech platform for flights, hotels, visa services and holiday packages, focusing on performance, usability, and scalability.",
    websiteLink: "https://firsttrip.com/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "REST API",
    ],
    startDate: new Date("2023-07-01"),
    endDate: new Date("2024-02-28"),
    companyLogoImg: "/projects/firsttrip/logo.png",
    pagesInfoArr: [
      {
        title: "Homepage & Search Experience",
        description:
          "Landing page with clean search for flights, hotels and holiday packages, emphasising speed and clarity for first-time mobile and desktop users.",
        imgArr: [
          "/projects/firsttrip/home_1.png",
          "/projects/firsttrip/home_2.png",
          "/projects/firsttrip/home_3.png",
          "/projects/firsttrip/home_4.png",
        ],
      },
      {
        title: "Flight Listing & Booking Flow",
        description:
          "Interactive flight search results with real-time availability, filtering, and mobile-friendly booking path including authentication and payment steps.",
        imgArr: [
          "/projects/firsttrip/flight_list_1.png",
          "/projects/firsttrip/booking_flow_1.png",
          "/projects/firsttrip/booking_flow_2.png",
        ],
      },
      {
        title: "Hotel & Holiday Package Pages",
        description:
          "Optimised detail pages for hotels and holiday packages, with rich content and fast load times, turned mobile-first for Bangladeshi travellers.",
        imgArr: [
          "/projects/firsttrip/hotel_1.png",
          "/projects/firsttrip/package_1.png",
          "/projects/firsttrip/package_2.png",
        ],
      },
      {
        title: "Business Flight Booking",
        description:
          "Business Flight Booking module with tailored UI for corporate clients, enabling multi-passenger bookings and invoicing features.",
        imgArr: [
          "/projects/firsttrip/business_1.png",
          "/projects/firsttrip/business_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Frontend Developer for FirstTrip, I was responsible for crafting the user-facing web platform of a new travel-tech offering in Bangladesh that handles flights, hotels, visa services and holiday packages. FirstTrip is positioned as a next-generation OTA backed by the US-Bangla group. :contentReference[oaicite:1]{index=1}",
        "My core focus was on building a scalable and high-performance frontend using Next.js, TypeScript and Tailwind CSS, while working closely with design and backend teams. I developed reusable UI components, responsive layouts, search and filter functionalities for travel products, and integrated payment flows and authentication.",
        "I collaborated with backend engineers to consume REST APIs for booking modules, flight/hotel search and inventory management, ensuring clean data handling and smooth user experience across device types. The platform also launched new features like ‘Combo Flight’ to mix airlines for better bookings. :contentReference[oaicite:2]{index=2}",
        "This project sharpened my skills in performance optimisation, accessibility, frontend architecture and user-centric design. It resulted in a polished MVP launch that supports the company’s vision to expand rapidly in the Bangladeshi travel-tech space. :contentReference[oaicite:3]{index=3}",
      ],
      bullets: [
        "Built front-end of FirstTrip’s web platform using Next.js, React and TypeScript.",
        "Created modular UI components with Tailwind CSS for consistent design system.",
        "Implemented dynamic search and booking flows for flights and holiday packages.",
        "Integrated REST APIs for data-driven travel product listings and booking transactions.",
        "Optimised for performance, mobile responsiveness and accessibility across devices.",
        "Collaborated in rollout of ‘Combo Flight’ feature to enable mixed-airline bookings. :contentReference[oaicite:4]{index=4}",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
