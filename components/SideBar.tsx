import React from "react";

type NewsItem = {
  imageSrc: string;
  date: string;
  title: string;
};

type ArchiveItem = {
  month: string;
  year: number;
  count: number;
};

type SidebarProps = {
  recentNews: NewsItem[];
  archives: ArchiveItem[];
  galleryImages: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ recentNews, archives, galleryImages }) => {
  return (
    <aside className="bg-white p-4 shadow-md rounded-lg">
      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
        <div className="border-t-2 border-yellow-500 w-8 mb-2"></div>
        <div className="border-t-2 border-purple-800 w-6"></div>
        {recentNews.map((news, index) => (
          <div key={index} className="flex items-start mt-4">
            <img
              src={news.imageSrc || ""}
              alt={news.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Finance</p>
              <p className="text-sm text-gray-800 font-medium">{news.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent News */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent News
        </h2>
        <div className="border-t-2 border-yellow-500 w-8 mb-2"></div>
        <div className="border-t-2 border-purple-800 w-6"></div>
        {recentNews.map((news, index) => (
          <div key={index} className="flex items-start mt-4">
            <div className="ml-4">
              <p className="text-sm text-gray-500">{news.date}</p>
              <p className="text-sm text-gray-800 font-medium">{news.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="border-t-2 border-yellow-500 w-8 mb-2"></div>
        <div className="border-t-2 border-purple-800 w-6"></div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Archives */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Archives</h2>
        <div className="border-t-2 border-yellow-500 w-8 mb-2"></div>
        <div className="border-t-2 border-purple-800 w-6"></div>
        {archives.map((archive, index) => (
          <div
            key={index}
            className="flex justify-between items-center mt-4 text-gray-800"
          >
            <p>
              <span className="text-gray-600">&gt;</span> {archive.month}{" "}
              {archive.year}
            </p>
            <span className="text-gray-600">({archive.count})</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

