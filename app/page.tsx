import About from "@/components/home/about";
import Experience from "@/components/home/experience";
// import GithubContribution from "@/components/home/github-contribution";
import Greeting from "@/components/home/greeting";
import TechStack from "@/components/home/tech-stack";
import Pattern from "@/components/layout/pattern";
import Overview from "@/components/overview";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="w-full">
      {/* <div className="text-xl font-bold">SameerX</div> */}
      <Greeting />
      <Pattern className="h-10" />

      <About />
      <Pattern className="h-10" />

      <Overview />
      <Pattern className="h-10" />

      {/* <GithubContribution />
      <Pattern className="h-10" /> */}

      <TechStack />
      <Pattern className="h-10" />

      <Experience />
      <Pattern className="h-10" />

      <Projects />
      {/* <Pattern className="h-10" /> */}
    </div>
  );
}
