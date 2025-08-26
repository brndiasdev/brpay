import { DiferenciaisRapidos } from "@/components/BeneficiosSection";
import HeroSection from "@/components/HeroSection";
import HowWorksSection from "@/components/HowWorksSection";
import ImpactSection from "@/components/ImpactSection";
import FaqSection from "@/components/FaqSection";
import FinalCTASection from "@/components/FinalCTASection";

// SEO
import { heroData } from "@/data/hero";
import { impactoData } from "@/data/impacto";
import { howWorksData } from "@/data/how-works";

import { faqData } from "@/data/faq";
import { diferenciaisBRPay } from "@/data/diferenciais";

export default function Home() {
  return (
    <>
      <HeroSection data={heroData} />
      <DiferenciaisRapidos data={diferenciaisBRPay} />
      <HowWorksSection data={howWorksData} />
      <ImpactSection data={impactoData} />
      <FaqSection data={faqData} />
      <FinalCTASection />
    </>
  );
}
