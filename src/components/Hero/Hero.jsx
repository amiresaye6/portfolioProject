import NavBar from "../NavBar/NavBar";
import myPhoto from '../../assets/my_photo.jpg';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary grainey_background relative z-10" style={{ borderRadius: "0 0 80px 80px" }}>
      {/* Background Element */}
      <div className="absolute inset-0 z-0 "></div>
      
      {/* NavBar Component */}
      <NavBar />
      
      {/* Photo and Name Section */}
      <div className="flex justify-center items-center mt-28 relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={myPhoto}
            alt="amir alsayed's photo :)"
            title="full stack developer"
            className="w-44 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />
          {/* <motion.h1
            className="bg-white dark:bg-dark-secondary rounded-full p-1 absolute top-16 -right-16 -rotate-12 px-3 text-light-primary dark:text-dark-primary text-lg font-semibold shadow-md"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Amir Alsayed
          </motion.h1> */}
        </motion.div>
      </div>
      
      {/* Title Section */}
      <motion.div
        className="m-auto text-center w-3/4 md:w-1/2 text-2xl md:text-4xl lg:text-5xl font-medium mt-12 text-slate-800 dark:text-light-secondary relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Building RESTFUL APIs with Node.js, Express, and MongoDB 🚀
      </motion.div>

      {/* Work with Me Button */}
      <motion.div
        className="flex justify-center items-center py-14 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://khamsat.com/user/amiralsayed"
          target="_blank"
          className="transition-transform transform hover:scale-110 flex justify-center items-center bg-[#242424] dark:bg-[#212121] w-44 p-3 rounded-full text-[#e0e0e0] dark:text-light-primary shadow-lg hover:bg-[#313131] dark:hover:bg-[#242424]"
        >
          Work with me
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="ml-2">
            <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
