import React from "react";

interface AdminCardProps {
  name: string;
  role: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ name, role }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-md p-4 max-w-5x5 mx-auto">
      {/* Profile Image Section */}
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
        <svg
          className="w-10 h-10 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
        </svg>
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default AdminCard;
