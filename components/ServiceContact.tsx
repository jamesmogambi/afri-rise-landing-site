import React from "react";
import Image from "next/image";

const ServiceContact: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4">
      {/* Contact Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Contact Us</h2>
        <div className="h-1 w-12 bg-purple-700 mb-4"></div>
        <p className="text-gray-700 text-sm">
          📍 P.O.BOX 47942 NAIROBI, KENYA • WU YI PLAZA GALANA ROAD KILIMANI •
          SUITE B 6 TH FLOOR ROOM 12 • PIN P052176321T
          <br />
          📍 DUBAI OFFICE • No.7100 IRIS BAY TOWER • BUSINESS BAY, DUBAI
        </p>
        <p className="text-gray-700 text-sm mt-2">
          📞 +254202100254
          <br />
          📧 info@afri-rise.com
        </p>
      </div>

      {/* Call to Action */}
      <div className="relative mb-6">
        <Image
          src="/images/contactImage.jpg" // Replace with your image path
          alt="Contact Us"
          width={240}
          height={160}
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
          <p className="text-sm font-semibold">Got any Questions?</p>
          <p className="text-sm mb-2">Call us Today!</p>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span>📞</span>
            <span>+254202100254</span>
          </div>
        </div>
      </div>

      {/* Brochures Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">Our Brochures</h2>
        <div className="h-1 w-12 bg-purple-700 mb-4"></div>
        <div className="space-y-2">
          <button className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-800 transition">
            📄 Download Profile
          </button>
          <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 hover:text-white transition">
            📊 Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
