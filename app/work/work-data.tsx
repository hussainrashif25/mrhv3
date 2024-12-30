export interface Work {
  title: string;
  year: string;
  description: string;
  url: string;
  role: string;
}

export const projects: Work[] = [
  {
    title: "Rogers Communications",
    year: "2022 - Present",
    description:
      "Technology Stack: Java 8, Java 17, Spring Boot, Spring Cloud, Play/Akka, Cassandra, Redis, REST, SOAP, XML, Mockito, Azure, Gradle, Maven, SonarQube, TypeScript, Angular, NgRx, Dynatrace",
    url: "https://www.rogers.com/",
    role: "Software Engineer",
  },
  {
    title: "CaseIQ",
    year: "2021 - 2022",
    description:
      "Technology Stack: Backbone.js, HTML/CSS, JavaScript, jQuery, Express.js, Node.js, PostgreSQL, Jenkins, Docker, YellowFin, SSO (WS-FED, SAML, OAuth), Seneca.js",
    url: "https://www.caseiq.com/",
    role: "Software Developer",
  },
  {
    title: "Cabana Health",
    year: "2020 - 2021",
    role: "Software Engineer",
    description:
      "Technology Stack: SwiftUI, Swift, XCode, Google Firebase, Google Cloud, Express.js, Node.js",
    url: "https://www.crunchbase.com/organization/cabanahealth",
  },
];
