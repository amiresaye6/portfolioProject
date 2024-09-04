
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

const ImageMarquee = () => {
    const images = [
        { src: Azure, name: "Azure" },
        { src: Bash, name: "Bash" },
        { src: C, name: "C" },
        { src: Cloudflare, name: "Cloudflare" },
        { src: Express, name: "Express" },
        { src: Flask, name: "Flask" },
        { src: Git, name: "Git" },
        { src: GitHub, name: "GitHub" },
        { src: HTML5, name: "HTML5" },
        { src: Java, name: "Java" },
        { src: JavaScript, name: "JavaScript" },
        { src: Linux, name: "Linux" },
        { src: MongoDB, name: "MongoDB" },
        { src: MySQL, name: "MySQL" },
        { src: Node, name: "Node" },
        { src: NPM, name: "NPM" },
        { src: Python, name: "Python" },
        { src: ReactImg, name: "React" },
        { src: Redis, name: "Redis" },
        { src: Redux, name: "Redux" },
        { src: Tailwind_CSS, name: "Tailwind_CSS" },
        { src: Ubuntu, name: "Ubuntu" },
        { src: Vim, name: "Vim" },
        { src: Visual_Studio_Code, name: "Visual_Studio_Code" },
        { src: Vite, name: "Vite.js" }
    ];

    return (
        <div className="relative overflow-hidden whitespace-nowrap">
            <div className="absolute top-0 left-0 flex space-x-4 animate-marquee">
                {images.concat(images).map((image, index) => (
                    <div
                        key={index}
                        className="relative group mx-4"
                    >
                        <img
                            src={image.src}
                            alt={image.name}
                            className="w-24 h-24 rounded-full object-cover border border-gray-200 shadow-lg"
                        />
                        <span className="absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-60 p-2 opacity-0 group-hover:opacity-100">
                            {image.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageMarquee;
