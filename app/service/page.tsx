import React from "react";
import Sidebar from "@/components/SideBar";
import ServiceCard from "@/components/ServiceCard";

export default function Page() {
  const recentNews = [
    {
      imageSrc: "/images/blog002.png",
      date: "December 14, 2022",
      title: "Africa Investment Forum 2022 draws...",
    },
  ];

  const archives = [
    { month: "December", year: 2022, count: 1 },
  ];

  const services = [
    {
      icon: "/icons/fund-management.svg",
      title: "Fund Management",
      description: "Helping manage funds globally.",
      link: "#",
      backgroundImage: "/images/service1010.png",
    },
    {
      icon: "/icons/project-management.svg",
      title: "Project Management",
      description: "Efficient project execution worldwide.",
      link: "#",
      backgroundImage: "/images/service1116.png",
    },
    {
      icon: "/icons/strategic-planning.svg",
      title: "Strategic Planning",
      description: "Plan strategies for success.",
      link: "#",
      backgroundImage: "/images/service1121.png",
    },
    {
      icon: "/icons/investment-advisory.svg",
      title: "Investment Advisory",
      description: "Expert advice for investments.",
      link: "#",
      backgroundImage: "/images/service1124.png",
    },
  ];

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/service001.png')", // Replace with your image path
        }}
      >
        {/* <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Service</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">service</span>
          </p>
        </div> */}
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 gap-12">
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>
      </div>


    </div>
  );
}

