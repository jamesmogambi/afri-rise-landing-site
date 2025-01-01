import React from "react";
import ArticleCard from "@/components/Article";
import Sidebar from "@/components/SideBar";

export default function Page() {
  const recentNews = [
    {
      imageSrc: "/images/blog002.png",
      date: "December 14, 2022",
      title: "Africa Investment Forum 2022 draws...",
    },
  ];

  const galleryImages = [
    "/images/gallery-widget1.jpg",
    "/images/gallery-widget2.jpg",
    "/images/gallery-widget3.jpg",
    "/images/gallery-widget4.jpg",
    "/images/gallery-widget5.jpg",
    "/images/gallery-widget6.jpg",
  ];

  const archives = [
    { month: "December", year: 2022, count: 1 },
  ];

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/blog001.png')", // Replace with your image path
        }}
      >
        {/* <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">Blog</span>
          </p>
        </div> */}
      </div>

      {/* Main Content and Sidebar Section */}
      <div className="max-w-[95%] mx-auto mt-8 mb-8 flex flex-col lg:flex-row gap-6">
        {/* Main Content: Article Card */}
        <div className="flex-grow w-full lg:w-[75%] border border-gray-200 rounded-lg p-6 shadow-lg">
          <ArticleCard
            className="w-full h-full"
            imageSrc="/images/blog_Image.jpg"
            date="December 14, 2022"
            category="Finance"
            readingTime="4 mins read"
            title="Africa Investment Forum 2022 draws $31 billion in investor interest"
            description="A total of $63.8 billion of investment interest mobilized in 2022"
            readMoreLink="/blog/news01"
            
          />
        </div>


        {/* Sidebar */}
        <div className="flex-shrink-0 w-full lg:w-[25%] border border-gray-200 rounded-lg p-6 shadow-lg">
          <Sidebar recentNews={recentNews} archives={archives} galleryImages={galleryImages} />
        </div>
      </div>




    </div>
  );
}
