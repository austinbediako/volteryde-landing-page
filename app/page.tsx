import {
  CitySpaceSection,
  FAQSection,
  GetVolterydeSection,
  HeroSection,
  HowItWorksSection,
  WhyChooseVolterydeSection,
} from "@/components/Home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseVolterydeSection />
      <HowItWorksSection />
      <GetVolterydeSection />
      <CitySpaceSection />
      <FAQSection />
    </>
  );
}
