import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

interface TagsAndShareProps {
  tags: string[];
}

const TagsAndShare: React.FC<TagsAndShareProps> = ({ tags }) => {
  return (
    <div className="flex justify-between items-center pt-4 mt-4">
      {/* Tags Section */}
      <div className="flex items-center">
        <span className="text-gray-800 font-semibold mr-2">Tags:</span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm font-medium mr-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Share Section */}
      <div className="flex items-center">
        <span className="text-gray-800 font-semibold mr-2">Share:</span>
        <FaFacebookF className="text-gray-600 cursor-pointer hover:text-gray-800 mx-2" />
        <FaTwitter className="text-gray-600 cursor-pointer hover:text-gray-800 mx-2" />
        <FaGooglePlusG className="text-gray-600 cursor-pointer hover:text-gray-800 mx-2" />
        <FaLinkedinIn className="text-gray-600 cursor-pointer hover:text-gray-800 mx-2" />
        <FaPinterestP className="text-gray-600 cursor-pointer hover:text-gray-800 mx-2" />
      </div>
    </div>
  );
};

export default TagsAndShare;