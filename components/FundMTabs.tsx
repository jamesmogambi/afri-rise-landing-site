"use client";
import { useState } from "react";

const TabContent = [
  {
    title: "Financial Flow",
    content: [
      "Developing financial projections and cash flow models",
      "Optimizing cash flows",
      "Access to financing options",
    ],
  },
  {
    title: "Company Growth",
    content: [
      "Strategic planning for sustainable growth",
      "Market expansion strategies",
      "Enhancing operational efficiency",
    ],
  },
  {
    title: "Investment",
    content: [
      "Identifying lucrative investment opportunities",
      "Portfolio management",
      "Risk analysis and mitigation",
    ],
  },
];

const FundMTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      {/* Tabs Header */}
      <div className="flex relative">
        {TabContent.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-3 text-center text-sm font-semibold relative z-10 ${
              activeTab === index
                ? "bg-purple-700 text-white"
                : "bg-gray-100 text-gray-600 border-b"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-purple-700 transition-all ${
            activeTab === 0
              ? "w-1/3 translate-x-0"
              : activeTab === 1
              ? "w-1/3 translate-x-1/3"
              : "w-1/3 translate-x-2/3"
          }`}
        ></div>
      </div>

      {/* Tabs Content */}
      <div className="p-6 border-t bg-gray-100">
        <ul className="list-disc pl-5 text-gray-700">
          {TabContent[activeTab].content.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FundMTabs;

