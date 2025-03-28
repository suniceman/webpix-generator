
import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: "施华蔻零售线", active: true, path: "/schwarzkopf" },
  { name: "丝蕴", active: false, path: "/syoss" },
  { name: "施华蔻专业线", active: false, path: "/schwarzkopf-pro" },
  { name: "资深堂专业线", active: false, path: "/shiseido-pro" },
  { name: "沙宣", active: false, path: "/vidal" },
  { name: "家清", active: false, path: "/home-care" },
];

const Sidebar = () => {
  return (
    <aside className="w-[180px] bg-gradient-to-b from-henkel-red to-henkel-lightRed text-white">
      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <Link 
            key={index}
            to={item.path}
            className={`py-4 px-6 flex items-center gap-2 hover:bg-opacity-20 hover:bg-white transition-colors ${
              item.active ? 'bg-opacity-20 bg-white' : ''
            }`}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {item.active && <span className="block w-3 h-3 bg-white"></span>}
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
