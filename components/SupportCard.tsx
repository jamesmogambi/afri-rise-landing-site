import React from "react";
import Image from "next/image";

const SupportCard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Image Section */}
      <div className="relative lg:w-1/2 w-full rounded-lg overflow-hidden">
        <Image
          src="/images/Support-Agent.jpg" // Replace with your image path
          alt="Support Team"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-6 h-6 bg-primary rotate-45 -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:ml-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          We Support Our Clients Five Working Days
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-800">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Portfolio management
          </li>
          <li className="flex items-center text-gray-800">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Capacity building support
          </li>
          <li className="flex items-center text-gray-800">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Fundraising expertise
          </li>
          <li className="flex items-center text-gray-800">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            ESG integration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportCard;
