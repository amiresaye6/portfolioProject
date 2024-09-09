import Azure from "../../assets/technologies/Azure.png";
import Express from "../../assets/technologies/Express.png";
import Flask from "../../assets/technologies/Flask.png";
import HTML5 from "../../assets/technologies/HTML5.png";
import MongoDB from "../../assets/technologies/MongoDB.png";
import MySQL from "../../assets/technologies/MySQL.png";
import Node from "../../assets/technologies/Node.js.png";
import Python from "../../assets/technologies/Python.png";
import ReactImg from "../../assets/technologies/React.png";
import Redis from "../../assets/technologies/Redis.png";
import Tailwind_CSS from "../../assets/technologies/Tailwind_CSS.png";

// Project images
import KhorougaImg from "../../assets/projects/khorouga.png";
import AirBnBImg from "../../assets/projects/airbnb.png";

const projects = [
  {
    title: "Khorouga - Social Trip Planning Platform",
    description: "A social platform for creating and sharing trip plans with friends and communities. Built with MERN stack.",
    image: KhorougaImg,
    techStack: [ReactImg, Node, MongoDB, Tailwind_CSS, Redis, Express, Azure],
    demoLink: "https://amiralsayed.tech",
    codeLink: "https://github.com/amiresaye6/khorouga"
  },
  {
    title: "AirBnB Clone",
    description: "A full-stack replica of the AirBnB website with user management, property listings, and search functionality.",
    image: AirBnBImg,
    techStack: [Python, Flask, MySQL, HTML5, Tailwind_CSS],
    demoLink: "noDemo",
    codeLink: "https://github.com/amiresaye6/AirBnB_clone_v4"
  }
];

const ProjectShowcase = () => {
  return (
    <div className="p-10 space-y-12">
      {projects.map((project, index) => (
        <div key={index} className="relative">
          {/* Blur Layer */}
          <div className="absolute inset-0 z-10 backdrop-blur-lg bg-white/30 dark:bg-gray-700/30 rounded-xl"></div>

          {/* Project Card */}
          <div
            className="relative flex flex-col md:flex-row items-center bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 z-20"
          >
            {/* Project Image */}
            <div className="md:w-1/3 w-full overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover md:h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="md:w-2/3 w-full md:ml-6 mt-6 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex space-x-4 mb-4">
                {project.techStack.map((tech, idx) => (
                  <img
                    key={idx}
                    src={tech}
                    alt="Technology Icon"
                    className="w-8 h-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ))}
              </div>

              {/* Buttons for Demo and Code */}
              <div className="flex space-x-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="text-sm text-white bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-full shadow-md transition-shadow duration-300"
                  >
                    Demo
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="text-sm text-white bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-full shadow-md transition-shadow duration-300"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
