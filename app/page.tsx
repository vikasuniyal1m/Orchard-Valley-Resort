import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Process from "@/components/sections/Process";
import Amenities from "@/components/sections/Amenities";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Rooms />
      <Process />
      <Amenities />
      <GalleryPreview />
      <Testimonials />
      <Contact />
    </>
  );
}
