import HomeCaurosel from "@/components/HomeCaurosel";
import ServicesSection from "./ServicesSection";
import QuoteSection from "./QuoteSection";
import WhatWeDo from "./WhatWeDo";
import AboutVideo from "./AboutVideo";
import ProjectsSection from "./ProjectsSection";
import CompanyProfileChart from "./CompanyProfileChart";

export default function page() {
  return (
    <div className="min-h-[200px] ">
      <HomeCaurosel />
      <ServicesSection />
      <QuoteSection />
      {/* <WhatWeDo /> */}
      <AboutVideo />
      {/* <ProjectsSection /> */}
      <CompanyProfileChart />
    </div>
  );
}
