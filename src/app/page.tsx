import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import StickyScrollPage from "@/components/StickyScroll";
import TestimonialCards from "@/components/TestimonialCards";
import CardHoverEffect from '@/components/CardHoverEffect'
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02]">
      {/* <h1 className="text-center text-2xl">hello </h1> */}
      <HeroSection/>
      <FeaturedCourse/>
      <StickyScrollPage/>
      <TestimonialCards/>
      <CardHoverEffect/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
