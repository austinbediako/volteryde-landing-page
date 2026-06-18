import {
  CitySpaceSection,
  FAQSection,
  GetVolterydeSection,
  HeroSection,
  HowItWorksSection,
  WhyChooseVolterydeSection,
} from "@/components/Home";
import { WaitlistModalProvider } from "@/components/WaitlistModalProvider";

export default function Home() {
  return (
    <WaitlistModalProvider>
      <HeroSection />
      <WhyChooseVolterydeSection />
      <HowItWorksSection />
      <GetVolterydeSection />
      <CitySpaceSection />
      <FAQSection />
    </WaitlistModalProvider>
  );
}
