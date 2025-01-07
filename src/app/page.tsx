import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Home/Banner";
import { SectionAboutUs } from "@/components/Home/SectionAboutUs";
import { SectionFAQ } from "@/components/Home/SectionFaq";
import { SectionIndicators } from "@/components/Home/SectionIndicators";
import { SectionOurService } from "@/components/Home/SectionOurService";
import SectionPartners from "@/components/Home/SectionPartners";
import { SectionWhyOurProducts } from "@/components/Home/SectionWhyOurProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <SectionAboutUs />
      <SectionIndicators />
      <SectionOurService />
      <SectionWhyOurProducts />
      <SectionPartners />
      <SectionFAQ />
      <Footer />
    </>
  );
}
