import HomeCaurosel from "@/components/HomeCaurosel";
<<<<<<< HEAD
import ServicesSection from "./ServicesSection";
import QuoteSection from "./QuoteSection";
import WhatWeDo from "./WhatWeDo";
import AboutVideo from "./AboutVideo";
import ProjectsSection from "./ProjectsSection";
import CompanyProfileChart from "./CompanyProfileChart";
import CustomerCallBackSection from "./CustomerCallBackSection";

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
      <CustomerCallBackSection />
=======
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-[200px]">
      <HomeCaurosel />
>>>>>>> 28d8e9b284d6b00d15bd3b51a5212d765be4779d
    </div>
  );
}
