import React from "react";
import Link from "next/link";

interface SidebarLink {
  title: string;
  href: string; // Add an href property for navigation
}

const Servicelinks: React.FC = () => {
  const links: SidebarLink[] = [
    { title: "Fund Management", href: "fund-management" },
    { title: "Project Management", href: "project-management" },
    { title: "Strategic Planning", href: "strategic-planning" },
    { title: "Investment Advisory", href: "investment-advisory" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg">
      {links.map((link, index) => (
        <Link key={index} href={link.href} passHref>
          <div
            className={`p-4 flex items-center justify-between cursor-pointer bg-gray-100 text-gray-800 border-t hover:bg-primary hover:text-white hover:rounded-lg transition-all duration-300 ${
              index === 0 ? "rounded-t-lg" : ""
            }`}
          >
            <span className="font-semibold">{link.title}</span>
            <span className="text-lg">{">"}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Servicelinks;


