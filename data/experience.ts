import { Experience } from "@/types/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: "alterSquare",
    companyName: "AlterSquare",
    companyLogo: "/images/alter_square_logo.png",
    positions: [
      {
        id: "alter-square-full-stack-developer",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "11.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: [
          {
            label: "TypeScript",
            image_src: "/images/typescript.svg",
          },
          {
            label: "JavaScript",
            image_src: "/images/js.svg",
          },
          {
            label: "React",
            image_src: "/images/react.svg",
          },
          {
            label: "Next.Js",
            image_src: "/images/nextjs2-light.svg",
          },
          {
            label: "MongoDB",
            image_src: "/images/mongodb.svg",
          },
          // "Next.js",
          // "React Native",
          // "MobX",
          // "MobX-State-Tree",
          // "Tailwind CSS",
          // "Dify",
          // "Zalo Mini App",
          // "Agile",
          // "Teamwork",
          // "Research",
          // "Problem-solving",
        ],
        description: [
          "Architected and developed scalable RESTful APIs with Node.js and Express, implementing secure authentication, authorization, validation, and business logic.",
          "Built a high-performance frontend using React.js (TypeScript), with a strong focus on reusable components, responsive design, and maintainable UI architecture.",
          // "Dockerized frontend and backend services to ensure consistent, reproducible environments across development, staging, and production.",
          "Designed and implemented CI/CD pipelines to automate builds, testing, and deployments, improving delivery speed and system reliability.",
          // "Managed MongoDB in a production environment, including schema design, indexing strategies, backups, security hardening, and performance optimization.",
          "Owned the end-to-end product lifecycle, covering system architecture, deployments, monitoring, bug fixes, and continuous feature enhancements.",
          "Full-stack development using React (TypeScript), Node.js, Express, MongoDB, with Dockerized services and automated CI/CD pipelines, owning the product end-to-end from architecture to production.",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
