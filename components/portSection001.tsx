import React from "react";

interface PortSection001Props {
 // imageSrc: string;
  category: string;
  title: string;
  description: string;
}

const PortSection001: React.FC<PortSection001Props> = ({
 // imageSrc,
  category,
  title,
  description,
}) => {
  return (
    <div className="max-w-7x3 mx-auto bg-white rounded-lg  overflow-hidden">
      {/* Image Section */}
      {/* <div className="relative w-full h-80">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute"
          objectPosition="center"
        />
      </div> */}

      {/* Content Section */}
      <div className="p-6">
        <p className="text-sm text-primary font-semibold uppercase mb-2">
          {category}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PortSection001;
