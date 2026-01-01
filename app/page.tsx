import Greeting from "@/components/home/greeting";
import Pattern from "@/components/layout/pattern";

export default function Home() {
  return (
    <div className="h-[200vh] w-full overflow-hidden">
      {/* <div className="text-xl font-bold">SameerX</div> */}
      <Pattern className="h-4"/>
      <Greeting />
    </div>
  );
}
