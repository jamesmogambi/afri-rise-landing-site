import React from "react";
import ServiceCard from "@/components/ServiceCard";

export default function page() {
  // const recentNews = [
  //   {
  //     imageSrc: "/images/blog002.png",
  //     date: "December 14, 2022",
  //     title: "Africa Investment Forum 2022 draws...",
  //   },
  // ];

  // const archives = [
  //   { month: "December", year: 2022, count: 1 },
  // ];

  const services = [
    {
      icon: "/images/Market-Research.svg",
      title: "Fund Management",
      description:
        "Fund Management Working with Thousands of companies around the world.",
      link: "service/fund-management",
      backgroundImage: "/images/Fund-Management.jpg",
    },
    {
      icon: "/images/Saving-Money.svg",
      title: "Project Management",
      description: "Efficient project execution worldwide.",
      link: "service/project-management",
      backgroundImage: "/images/Project-Management.jpg",
    },
    {
      icon: "/images/Corporate-Finance.svg",
      title: "Strategic Planning",
      description: "Plan strategies for success.",
      link: "service/strategic-planning",
      backgroundImage: "/images/Strategic-Planning.jpg",
    },
    {
      icon: "/images/FINANCIAL-ADVICE.svg",
      title: "Investment Advisory",
      description: "Expert advice for investments.",
      link: "service/investment-advisory",
      backgroundImage: "/images/investment-Advisory.jpg",
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
