import { motion } from 'framer-motion';
import imageTemp from '../../assets/Developer activity-amico.svg'
const cvPath = '/Cv_amir_alsayed.pdf';


const About = () => {
    const handleDownloadCV = () => {
        const cvLink = document.createElement('a');
        cvLink.href = cvPath;
        cvLink.download = 'Amir_Alsayed_CV.pdf';
        cvLink.click();
    };
    return (
        <section className="relative py-12 px-6 md:px-16 lg:px-32 bg-primary text-secondary bg-light-third dark:bg-dark-third grainey_background dark:text-dark-secondary transition-colors duration-300 pt-40 -top-20 border border-gray-100" style={{ borderRadius: '0 0 80px 80px'}}>
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full" style={{ borderRadius: '0 0 80px 80px' }}></div>

            <div className="container mx-auto relative z-10">
                {/* Add a personal touch */}
                <motion.h1
                    className="text-4xl font-bold mb-6 text-center hover:text-accent transition duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hello, I&apos;m Amir Alsayed
                </motion.h1>

                {/* Text and Layout */}
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
                    {/* About Text */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="mb-4 text-lg leading-relaxed">
                            I’m a full-stack developer with a passion for building innovative and functional applications. Currently, I&apos;m pursuing a degree in <span className="font-semibold text-accent">Computer and Systems Engineering</span> at <span className="font-semibold text-accent">Zagazig University</span>, graduating in <span className="font-semibold text-accent">2025</span>.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            During my time as a student, I completed the <span className="font-semibold text-accent">ALX Software Engineering Program</span>, focusing on both frontend and backend development, particularly in the <span className="font-semibold text-accent">MERN stack</span>.
                        </p>
                        <p className="text-lg leading-relaxed">
                            I strive to create impactful digital experiences by prioritizing simplicity, scalability, and functionality in my solutions.
                        </p>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center lg:justify-end z-50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src={imageTemp}
                            alt="Amir Alsayed"
                            className="w-72  hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 flex justify-center">
                    <motion.div
                        className="flex justify-center items-center py-14 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <button
                            onClick={handleDownloadCV}
                            className="transition-transform transform hover:scale-110 flex justify-center items-center bg-[#242424] dark:bg-[#212121] p-3 rounded-full text-[#e0e0e0] dark:text-light-primary shadow-lg hover:bg-[#313131] dark:hover:bg-[#242424]"
                        >
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 pl-3">
                                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" fill="#ffffff" />
                            </svg>

                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
