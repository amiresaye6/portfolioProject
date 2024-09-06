import Azure from "../../assets/technologies/Azure.png";
import Bash from "../../assets/technologies/Bash.png";
import Cloudflare from "../../assets/technologies/Cloudflare.png";
import Express from "../../assets/technologies/Express.png";
import Flask from "../../assets/technologies/Flask.png";
import Git from "../../assets/technologies/Git.png";
import GitHub from "../../assets/technologies/GitHub.png";
import HTML5 from "../../assets/technologies/HTML5.png";
import JavaScript from "../../assets/technologies/JavaScript.png";
import Linux from "../../assets/technologies/Linux.png";
import MongoDB from "../../assets/technologies/MongoDB.png";
import MySQL from "../../assets/technologies/MySQL.png";
import Node from "../../assets/technologies/Node.js.png";
import Python from "../../assets/technologies/Python.png";
import ReactImg from "../../assets/technologies/React.png";
import Redis from "../../assets/technologies/Redis.png";
import Redux from "../../assets/technologies/Redux.png";
import Tailwind_CSS from "../../assets/technologies/Tailwind_CSS.png";
import Ubuntu from "../../assets/technologies/Ubuntu.png";
import Vim from "../../assets/technologies/Vim.png";
import Visual_Studio_Code from "../../assets/technologies/Visual_Studio_Code.png";
import Vite from "../../assets/technologies/Vite.js.png";

// Frontend, Backend, and DevOps tech arrays
const frontendTech = [
  { img: HTML5, name: "HTML5" },
  { img: JavaScript, name: "JavaScript" },
  { img: ReactImg, name: "React" },
  { img: Tailwind_CSS, name: "Tailwind CSS" },
  { img: Redux, name: "Redux" },
  { img: Vite, name: "Vite" }
];

const backendTech = [
  { img: Node, name: "Node.js" },
  { img: Express, name: "Express" },
  { img: MongoDB, name: "MongoDB" },
  { img: MySQL, name: "MySQL" },
  { img: Flask, name: "Flask" },
  { img: Python, name: "Python" }
];

const devopsTech = [
  { img: Azure, name: "Azure" },
  { img: Bash, name: "Bash" },
  { img: Git, name: "Git" },
  { img: GitHub, name: "GitHub" },
  { img: Linux, name: "Linux" },
  { img: Cloudflare, name: "Cloudflare" },
  { img: Redis, name: "Redis" },
  { img: Ubuntu, name: "Ubuntu" },
  { img: Vim, name: "Vim" },
  { img: Visual_Studio_Code, name: "VS Code" }
];

// Single grid renderer
const TechGrids = () => {

  return (
    <div className="p-8 min-h-screen transition-colors duration-300 ">
      {/* Backend Technologies */}
      <div className="mb-12 ">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-slate-800">
          Backend Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-light-primary dark:bg-dark-primary grainey_background rounded-lg shadow-lg">
          {backendTech.map((tech, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mx-auto transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
                <div className="bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-slate-800">
          Frontend Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-light-primary dark:bg-dark-primary grainey_background rounded-lg shadow-lg">
          {frontendTech.map((tech, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mx-auto transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
                <div className="bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DevOps Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-slate-800">
          DevOps Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-light-primary dark:bg-dark-primary grainey_background rounded-lg shadow-lg">
          {devopsTech.map((tech, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mx-auto transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
                <div className="bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default TechGrids;
