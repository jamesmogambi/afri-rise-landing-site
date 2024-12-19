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
      icon: "/images/banner-inner-page4.jpg",
      title: "Fund Management",
      description:
        "Fund Management Working with thousands of companies around the world",
      link: "/services/fund-management",
    },
    {
      icon: "/icons/project-management.png",
      title: "Project Management",
      description:
        "Project Management Working with thousands of companies around the world",
      link: "/services/project-management",
    },
    {
      icon: "/icons/strategic-planning.png",
      title: "Strategic Planning",
      description:
        "Strategic Planning Working with thousands of companies around the world",
      link: "/services/strategic-planning",
    },
    {
      icon: "/icons/investment-advisory.png",
      title: "Investment Advisory",
      description:
        "Investment Advisory Working with thousands of companies around the world",
      link: "/services/investment-advisory",
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
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Service</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">service</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Service Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

