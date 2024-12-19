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
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-2 text-lg">
            Afri-Rise Equity - <span className="text-orange-500">Blog</span>
          </p>
        </div>
      </div>

      {/* Main Content and Sidebar Section */}
      <div className="max-w-[90%] mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content: Article Card */}
        <div className="col-span-1 lg:col-span-3">
          <ArticleCard
            imageSrc="/images/blog002.png" // Replace with your image path
            date="December 14, 2022"
            category="Finance"
            readingTime="4 mins read"
            title="Africa Investment Forum 2022 draws $31 billion in investor interest"
            description="A total of $63.8 billion of investment interest mobilized in 2022"
            readMoreLink="/articles/africa-investment-forum-2022"
          />
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          <Sidebar recentNews={recentNews} archives={archives} />
        </div>
      </div>
    </div>
  );
}
