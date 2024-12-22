import React from "react";
import PortfolioCard from "@/components/PortfolioCard";

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
      title: "Digital Connectivity",
      imageSrc: "/images/Afri-Finance.jpg", // Replace with actual image paths
    },
    {
      number: "06",
      category: "Business Planning",
      title: "Energy Solutions",
      imageSrc: "/images/Afri-Energy.jpg",
    },
    {
      number: "05",
      category: "Business Planning",
      title: "Insurance",
      imageSrc: "/images/Afri-Insu.jpg",
    },
    {
      number: "04",
      category: "Business Planning",
      title: "Agriculture",
      imageSrc: "/images/Afri-Agriculture.jpg",
    },
    {
      number: "03",
      category: "Business Planning",
      title: "Commercial Infrastructure",
      imageSrc: "/images/Commercial-afri.jpg",
    },
    {
      number: "02",
      category: "Business Planning",
      title: "ICT",
      imageSrc: "/images/ICT-AFRI.png",
    },
    {
      number: "01",
      category: "Business Planning",
      title: "Green Field",
      imageSrc: "/images/Shunde_Slider.jpg",
    },
  ];

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/porfolio001.png')", // Replace with your image path
        }}
      >
        {/* <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">Porfolio</span>
          </p>
        </div> */}
      </div>

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
            />
          ))}
        </div>
      </div>



    </div>
  );
}


