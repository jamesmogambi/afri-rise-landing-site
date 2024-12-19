import React from "react";

type ServiceCardProps = {
  icon: string; // Icon source
  title: string;
  description: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={`${title} Icon`} className="h-12 w-12" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
      >
        Read More
        <svg
          className="ml-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;
