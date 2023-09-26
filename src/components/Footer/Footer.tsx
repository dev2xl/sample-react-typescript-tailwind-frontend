import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-16 flex items-center justify-center bg-slate-700 text-white w-full">
      <div className="px-4 md:px-0 container w-full flex justify-between items-center">
        <span> Sample React + Typescript + Tailwindcss + React Router</span>
        <a
          href="https://github.com/dev2xl"
          className="p-2 hover:scale-105 transition-transform"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <FaGithub size="24px" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
