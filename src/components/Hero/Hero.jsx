import NavBar from "../NavBar/NavBar";
import myPhoto from '../../assets/my_photo.jpg';

function Hero() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary grainey_background" style={{ borderRadius: "0 0 100px 100px" }}>
      <NavBar />
      <div className="flex justify-center items-center mt-28">
        <div className="relative">
          <img
            src={myPhoto}
            alt="amir alsayed's photo :)"
            title="full stack developer"
            className="w-44 rounded-full border-2 border-white"
          />
          <h1 className="bg-white dark:bg-dark-secondary rounded-full p-1 absolute top-16 -right-16 -rotate-12 px-2 text-light-primary dark:text-dark-primary">
            Amir Alsayed
          </h1>
        </div>
      </div>
      <div className="m-auto text-center w-1/2 text-5xl font-medium mt-12 text-slate-800 dark:text-light-secondary">
        Building RESTFUL APIs with Node.js, Express, and MongoDB 🚀
      </div>
      <div className="flex justify-center items-center py-14 ">
        <a
          href="#projects"
          className="transition-transform transform hover:scale-105 flex justify-center items-center bg-[#242424] dark:bg-[#212121] w-44 p-2 rounded-full text-[#e0e0e0] dark:text-light-primary hover:bg-[#313131] dark:hover:bg-[#242424]"
        >
          See my projects
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"> <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /> </svg> </a> </div> </div>);
}

export default Hero;
