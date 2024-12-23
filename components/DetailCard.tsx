import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

const DetailCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  items,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      {/* Image Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain" // Adjusts to contain the whole image
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        <ul className="list-disc pl-5 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailCard;
