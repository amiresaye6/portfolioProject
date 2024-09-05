import Azure from "../../assets/technologies/Azure.png";
import Bash from "../../assets/technologies/Bash.png";
import C from "../../assets/technologies/C.png";
import Cloudflare from "../../assets/technologies/Cloudflare.png";
import Express from "../../assets/technologies/Express.png";
import Flask from "../../assets/technologies/Flask.png";
import Git from "../../assets/technologies/Git.png";
import GitHub from "../../assets/technologies/GitHub.png";
import HTML5 from "../../assets/technologies/HTML5.png";
// import Java from "../../assets/technologies/Java.png";
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

const TechImageMarquee = () => {
    const frontend = [
        { src: HTML5, name: "HTML5" },
        { src: JavaScript, name: "JavaScript" },
        { src: ReactImg, name: "React" },
        { src: Redux, name: "Redux" },
        { src: Tailwind_CSS, name: "Tailwind CSS" },
        { src: Vite, name: "Vite.js" }
    ];

    const backend = [
        { src: Node, name: "Node.js" },
        { src: Express, name: "Express" },
        { src: Flask, name: "Flask" },
        { src: Python, name: "Python" },
        { src: MongoDB, name: "MongoDB" },
        { src: MySQL, name: "MySQL" }
    ];

    const devops = [
        { src: Git, name: "Git" },
        { src: GitHub, name: "GitHub" },
        { src: Azure, name: "Azure" },
        { src: Bash, name: "Bash" },
        { src: Linux, name: "Linux" },
        { src: Ubuntu, name: "Ubuntu" }
    ];

    const others = [
        { src: Vim, name: "Vim" },
        { src: Visual_Studio_Code, name: "VS Code" },
        { src: Cloudflare, name: "Cloudflare" },
        { src: Redis, name: "Redis" },
        { src: NPM, name: "NPM" },
        { src: C, name: "C" }
    ];

    const renderCategory = (title, technologies) => (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                    <div key={index} className="relative group p-2 hover:bg-gray-800 rounded-md shadow-md transition">
                        <img src={tech.src} alt={tech.name} className="w-16 mx-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-white">{tech.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container mx-auto py-8 px-4">
            {renderCategory("Frontend", frontend)}
            {renderCategory("Backend", backend)}
            {renderCategory("DevOps", devops)}
            {renderCategory("Others", others)}
        </div>
    );
};

export default TechImageMarquee;
