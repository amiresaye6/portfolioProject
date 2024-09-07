import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`bg-light-primary dark:bg-dark-primary py-16 px-8 grainey_background text-slate-800 dark:text-light-secondary`}
      style={{ borderRadius: '80px 80px 0 0' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-center mb-6">Feel free to reach out via email or follow me on social media.</p>
          <a
            href="mailto:amiralsayed.work@gmail.com"
            className="bg-white dark:bg-[#161616] dark:text-[#d4d4d3] rounded-full px-3 py-1 border-4 border-[#e5e7eb] dark:border-[#4a4a4a] transition-transform transform hover:scale-105"
          >
            Email Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-8 md:mb-0">
          <a target='_blank' href="https://www.linkedin.com/in/amir-elsayed-/" className="hover:underline text-lg">LinkedIn</a>
          <span>/</span>
          <a target='_blank' href="https://github.com/amiresaye6" className="hover:underline text-lg">GitHub</a>
          <span>/</span>
          <a target='_blank' href="https://x.com/amir38561600" className="hover:underline text-lg">X</a>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
        <nav className="flex flex-col md:flex-row gap-4 text-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      {/* Legal Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center mb-4 md:mb-0">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Amir Alsayed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
