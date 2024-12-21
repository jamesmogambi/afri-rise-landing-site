import HomeCaurosel from "@/components/HomeCaurosel";
import Image from "next/image";
import ServicesSection from "./ServicesSection";
import QuoteSection from "./QuoteSection";

export default function page() {
  return (
    <div className="min-h-[200px] relative">
      <HomeCaurosel />
      <ServicesSection />
      <QuoteSection />
    </div>
  );
}
