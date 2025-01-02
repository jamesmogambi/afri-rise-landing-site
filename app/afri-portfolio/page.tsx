import React from "react";
import PortfolioCard from "@/components/PortfolioCard";
import PageBanner from "@/components/PageBanner";

export default function Page() {
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

  const portfolioItems = [
    {
      number: "07",
      category: "Business Planning",
      title: "Finance",
      imageSrc: "/images/Afri-Finance.jpg",
      link:"/afri-portfolio/finance "
    },
    {
      number: "06",
      category: "Business Planning",
      title: "Energy Solutions",
      imageSrc: "/images/Afri-Energy.jpg",
      link:"/afri-portfolio/energy"
    },
    {
      number: "05",
      category: "Business Planning",
      title: "Insurance",
      imageSrc: "/images/Afri-Insu.jpg",
      link:"/afri-portfolio/insurance"
    },
    {
      number: "04",
      category: "Business Planning",
      title: "Agriculture",
      imageSrc: "/images/Afri-Agriculture.jpg",
      link:"/afri-portfolio/agriculture"
    },
    {
      number: "03",
      category: "Business Planning",
      title: "Commercial Infrastructure",
      imageSrc: "/images/Commercial-afri.jpg",
      link:"/afri-portfolio/commercial-infrastructure"
    },
    {
      number: "02",
      category: "Business Planning",
      title: "ICT",
      imageSrc: "/images/ICT-AFRI.png",
      link:"/afri-portfolio/ict"
    },
    {
      number: "01",
      category: "Business Planning",
      title: "Green Field",
      imageSrc: "/images/Shunde_Slider.jpg",
      link:"/afri-portfolio/greenfield"
    },
  ];

  return (
    <div>
      {/* Background Section */}
      <PageBanner title="Portfolio"/>

         {/* Main Content Section */}
         <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              number={item.number}
              category={item.category}
              title={item.title}
              imageSrc={item.imageSrc}
              link={item.link}
            />
          ))}
        </div>
      </div>



    </div>
  );
}


