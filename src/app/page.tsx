import { Banner } from "@/components/Home/Banner";
import { SectionAboutUs } from "@/components/Home/SectionAboutUs";
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
    </>
  );
}
