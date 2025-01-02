import React, { JSX } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

type ContactCardProps = {
  icon: JSX.Element;
  title: string;
  content: string | string[];
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center justify-start p-6 border border-gray-300 rounded-lg shadow-md relative">
      {/* Diamond Icon Section */}
      <div className="absolute -top-6 w-14 h-14 bg-primary transform rotate-45 flex items-center justify-center">
        <div className="transform -rotate-45 text-white text-2xl">
          {React.cloneElement(icon, { className: "text-white" })}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-center mt-10 mb-4">{title}</h3>

      {/* Content */}
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <p key={index} className="text-center text-gray-700 text-lg mb-2">
            {item}
          </p>
        ))
      ) : (
        <p className="text-center text-gray-700 text-lg">{content}</p>
      )}
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 px-8 py-16 bg-white mt-10 mb-10">
      {/* Email Information */}
      <ContactCard
        icon={<FaEnvelope />}
        title="Mail for Information"
        content="info@afri-rise.com"
      />

      {/* Phone Information */}
      <ContactCard
        icon={<FaPhone />}
        title="Office Phone Number"
        content={["+254(0)202100254", "+971523745706"]}
      />

      {/* Address Information */}
      <ContactCard
        icon={<FaMapMarkerAlt />}
        title="Mail for Information"
        content={[
          "P.O.BOX 47942 NAIROBI, KENYA • WU YI PLAZA GALANA ROAD KILIMANI",
          "SUITE B 6TH FLOOR ROOM 12 • DWC BUSINESS CENTER LEVEL 4 BUILDING",
          "A2 DUBAI SOUTH BUSINESS PARK",
        ]}
      />
    </div>
  );
};

export default ContactSection;
