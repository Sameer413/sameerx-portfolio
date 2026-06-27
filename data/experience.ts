import { Experience } from "@/types/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: "ibm-india-pvt-ltd",
    companyName: "IBM India Pvt. Ltd.",
    companyLogo: "/images/ibm-logo.svg",
    positions: [
      {
        id: "ibm-india-pvt-ltd-associate-systems-engineer",
        title: "Associate Systems Engineer",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: [
          {
            label: "Java",
            image_src: "/images/java.svg",
          },
          {
            label: "JavaScript",
            image_src: "/images/js.svg",
          },
          {
            label: "Selenium",
            image_src: "/images/selenium.svg",
          },
          {
            label: "Playwright",
            image_src: "/images/playwright.svg",
          },
        ],
        description: [
          "Designed and maintained automated test suites using Selenium and Playwright for functional, regression, and end-to-end validation of web applications",
          "Built reusable test automation frameworks in Java and JavaScript with modular page objects, utilities, and data-driven execution",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
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
          end: "03.2026",
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
    isCurrentEmployer: false,
  },
];
