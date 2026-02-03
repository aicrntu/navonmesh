import HeroCrousal from "../components/home/HeroCrousal";
import About from "../components/home/About";
import Competition from "../components/home/Competition";
import PastSpeakers from "../components/home/PastSpeakers";
import Partners from "../components/home/Partners";
import Event from "../components/home/Event";

export default function Home() {
  return (
    <>
      <HeroCrousal />
      <About />
      <Competition />
      <PastSpeakers />
      <Partners />
      <Event />
    </>
  );
}
