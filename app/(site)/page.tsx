import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ComingSoon from "@/components/ComingSoon";
import PhoneFrame from "@/components/PhoneFrame";
import DownloadSection from "@/components/Download";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <ComingSoon /> */}
      {/* <Brands /> */}
      {/* <Feature /> */}
      <About />
      {/* <FeaturesTab />x<FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      <FAQ />
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
