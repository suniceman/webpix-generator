
import React from 'react';

const menuItems = [
  { name: "施华蔻零售线", active: true },
  { name: "丝蕴", active: false },
  { name: "施华蔻专业线", active: false },
  { name: "资深堂专业线", active: false },
  { name: "沙宣", active: false },
  { name: "家清", active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-[180px] bg-gradient-to-b from-henkel-red to-henkel-lightRed text-white">
      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href="#"
            className={`py-4 px-6 flex items-center gap-2 hover:bg-opacity-20 hover:bg-white transition-colors ${
              item.active ? 'bg-opacity-20 bg-white' : ''
            }`}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {item.active && <span className="block w-3 h-3 bg-white"></span>}
            </span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
