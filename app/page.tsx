import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full  block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Nice to meet you! 👋
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm Mohammad Hussain, a Computer Engineer with a deep passion for Software Development. Currently, I work as a Software Engineer at{" "}
        <a
          href="https://www.rogers.com/"
        >
        Rogers Communications, 
        </a>{" "}
        where I lead efforts to modernize the backend architecture of the CRM software, making it more scalable and robust. Additionally, I enhance internal tools to streamline workflows and boost development team productivity.
        </p>
        <p>
        Previously, I served as a Software Developer at{" "}
          <a
            href="https://www.caseiq.com/">
            CaseIQ,
          </a>{" "}
          designing and developing innovative solutions tailored to a diverse client base. Before that, I contributed as a Software Engineer at{" "}
          <a
          href="https://www.crunchbase.com/organization/cabanahealth">
            Cabana Health,
          </a>{" "}
          where I played a key role in supporting a platform with over 10,000 users. My contributions there culminated in the company’s successful acquisition by a larger organization.
        </p>
        <p>
          Aside from work, I have a Computer Engineering Degree and love to tinker and dabble with hardware and software. I'm big into Brazilizan Jiu Jitsu, Muay Thai,
          hiking, reading and coffee ☕!
        </p>
        {/* <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS for optimal performance.
        </p>
        <p>
          Nextfolio includes all the essentials for a stunning portfolio: SEO,
          MDX support, RSS, Atom, & JSON feeds, analytics, tweet & YouTube
          embeds, KaTeX integration, and{" "}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p> */}
      </div>
    </section>
  );
}
