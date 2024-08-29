import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const cvPath = '/Cv_amir_alsayed.pdf';

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('amiralsayed.work@gmail.com');
        toast.success('Email copied to clipboard!');
    };

    const handleDownloadCV = () => {
        const cvLink = document.createElement('a');
        cvLink.href = cvPath;
        cvLink.download = 'Amir_Alsayed_CV.pdf';
        cvLink.click();
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div className={`flex flex-col md:flex-row justify-between items-center px-6 py-4 ${darkMode ? 'text-[#d4d4d3]' : 'text-[#161616]'}`}>
            <div className="flex flex-wrap justify-between items-center gap-5">
                <div className="flex items-center bg-[#e5e7eb] dark:bg-[#4a4a4a] rounded-full pl-2">
                    <div className="pr-4">amiralsayed.work@gmail.com</div>
                    <button
                        className="bg-white dark:bg-[#161616] w-20 dark:text-[#d4d4d3] rounded-full px-3 py-1 border-4 border-[#e5e7eb] dark:border-[#4a4a4a] transition-transform transform hover:scale-105"
                        onClick={handleCopyEmail}
                    >
                        Copy
                    </button>
                </div>
                <button
                    className="bg-white dark:bg-[#161616] w-20 dark:text-[#d4d4d3] rounded-full px-3 py-1 border-4 border-[#e5e7eb] dark:border-[#4a4a4a] transition-transform transform hover:scale-105"
                    onClick={handleDownloadCV}
                >
                    CV
                </button>
                <button
                    onClick={toggleDarkMode}
                    className="mt-4 md:mt-0 p-2 rounded-full bg-[#acacac] dark:bg-[#333333] text-[#161616] dark:text-[#d4d4d3] transition-transform transform hover:scale-105"
                >
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3m-12 0H3m15.36 4.64L16.24 15.6m-8.48 0L7.64 17.36m7.76-14.72L15.36 8.4M8.64 8.4L7.64 7.36" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3m-12 0H3m15.36 4.64L16.24 15.6m-8.48 0L7.64 17.36m7.76-14.72L15.36 8.4M8.64 8.4L7.64 7.36" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3  text-slate-800 mt-4 md:mt-0  dark:text-light-primary">
                <Link to="https://www.linkedin.com/in/amir-elsayed-/" className="hover:underline">LinkedIn</Link>
                <span>/</span>
                <Link to="https://github.com/amiresaye6" className="hover:underline">GitHub</Link>
                <span>/</span>
                <Link to="https://x.com/amir38561600" className="hover:underline">X</Link>
            </div>
        </div>
    );
}

export default NavBar;
