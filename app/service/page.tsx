import React from "react";
import ServiceCard from "@/components/ServiceCard";
import PageBanner from "@/components/PageBanner";

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
      <PageBanner title="Services"/>

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
