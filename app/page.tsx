import Greeting from "@/components/home/greeting";
import Pattern from "@/components/layout/pattern";
import Overview from "@/components/overview";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* <div className="text-xl font-bold">SameerX</div> */}
      <Greeting />
      <Pattern className="h-10" />
      <Overview />

      <Pattern className="h-10" />
      <Socials />
      <Pattern className="h-10" />
    </div>
  );
}
