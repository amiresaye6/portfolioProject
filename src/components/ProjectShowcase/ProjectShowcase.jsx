import Azure from "../../assets/technologies/Azure.png";
import Bash from "../../assets/technologies/Bash.png";
import C from "../../assets/technologies/C.png";
import Cloudflare from "../../assets/technologies/Cloudflare.png";
import Express from "../../assets/technologies/Express.png";
import Flask from "../../assets/technologies/Flask.png";
import Git from "../../assets/technologies/Git.png";
import GitHub from "../../assets/technologies/GitHub.png";
import HTML5 from "../../assets/technologies/HTML5.png";
import Java from "../../assets/technologies/Java.png";
import JavaScript from "../../assets/technologies/JavaScript.png";
import Linux from "../../assets/technologies/Linux.png";
import MongoDB from "../../assets/technologies/MongoDB.png";
import MySQL from "../../assets/technologies/MySQL.png";
import Node from "../../assets/technologies/Node.js.png";
import NPM from "../../assets/technologies/NPM.png";
import Python from "../../assets/technologies/Python.png";
import ReactImg from "../../assets/technologies/React.png";
import Redis from "../../assets/technologies/Redis.png";
import Redux from "../../assets/technologies/Redux.png";
import Tailwind_CSS from "../../assets/technologies/Tailwind_CSS.png";
import Ubuntu from "../../assets/technologies/Ubuntu.png";
import Vim from "../../assets/technologies/Vim.png";
import Visual_Studio_Code from "../../assets/technologies/Visual_Studio_Code.png";
import Vite from "../../assets/technologies/Vite.js.png";

// Khorouga project images
import KhorougaImg from "../../assets/projects/khorouga.png";

const projects = [
  {
    title: "Khorouga - Social Trip Planning Platform",
    description: "A social platform for creating and sharing trip plans with friends and communities. Built with MERN stack.",
    image: KhorougaImg,
    techStack: [ReactImg, Node, MongoDB, Tailwind_CSS],
    demoLink: "https://amiralsayed.tech",
    codeLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payments.",
    image: "path/to/image2.png",
    techStack: [ReactImg, Node, MongoDB, Tailwind_CSS],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Blogging Platform",
    description: "A blogging platform with user accounts and markdown support.",
    image: "path/to/image3.png",
    techStack: [JavaScript, Flask, MySQL],
    demoLink: "#",
    codeLink: "#"
  }
];

const ProjectShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {projects.map((project, index) => (
        <div key={index} className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex space-x-2 mt-4">
              <a href={project.demoLink} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Demo</a>
              <a href={project.codeLink} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Code</a>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-2 pb-4">
            {project.techStack.map((tech, idx) => (
              <img key={idx} src={tech} alt="Technology Icon" className="w-8 h-8" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
