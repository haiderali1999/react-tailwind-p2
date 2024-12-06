import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => {
  const projects = [
    { label: "Project 1", link: "1" },
    { label: "Project 2", link: "2" },
    { label: "Project 3", link: "3" },
  ];
  const menu = (
    <div className="absolute top-3/4 left-4 scale-y-0 group-hover:scale-y-100 origin-top duration-200 shadow-lg mt-2 w-48 rounded-md bg-blue-950 bg-opacity-15">
      <ul>
        {projects.map((project) => (
          <li key={project.label} className="px-4 py-2">
            <Link to={project.link}>{project.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <header className="h-[10vh] flex justify-between items-center px-5 sm:px-10 text-white bg-black bg-opacity-50">
      <div className="uppercase font-bold" data-aos="fade-left">
        logo
      </div>
      <div
        className="hidden items-center space-x-5 sm:flex"
        data-aos="fade-down"
      >
        <div className="hover:underline group relative px-4 py-2">
          Projects
          {menu}
        </div>
        <div className="hover:underline">Contact Us</div>
        <div className="hover:underline">About Us</div>
      </div>
      <button
        className="hidden sm:block border px-3 py-1 hover:bg-slate-300"
        data-aos="fade-right"
      >
        Login
      </button>
      <div className="sm:hidden">
        <Icon
          className="relative group"
          icon="mage:align-right"
          width="24"
          height="24"
        ></Icon>
        {menu}
      </div>
    </header>
  );
};

export default Header;
