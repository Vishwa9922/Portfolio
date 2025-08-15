import myPhoto from "../assets/Myphoto.jpg";
import codingBoy from "../assets/co.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black font-['Poppins'] pt-20">
      {/* pt-20 => navbar ke liye space */}

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 md:px-12 gap-8 md:gap-12">

        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-4">
            Hi There 👋🏼, I'M
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
            Vishwajeet Kanchanwar
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Java Developer",
                  "Spring Boot Developer",
                  "React.js Developer",
                  "MySQL Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={codingBoy}
            alt="Coding Boy"
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-2xl shadow-xl shadow-cyan-500/50 hover:scale-110 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center px-6 md:px-12 py-12 sm:py-16 bg-black/50 backdrop-blur-lg border-t border-gray-800 gap-6 md:gap-12">

        {/* Left Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={myPhoto}
            alt="Vishwajeet"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full border-4 border-blue-500 shadow-[0_0_30px_#38bdf8] object-cover hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="flex-1 text-center md:text-left mt-6 md:mt-0 md:pl-8 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            LET ME INTRODUCE MYSELF 😊
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mb-6 leading-relaxed">
            I'm a passionate Full-Stack Java Developer specializing in Spring Boot,
            MySQL, and React.js. I enjoy creating scalable, efficient, and user-friendly
            applications that solve real-world problems. I’m always learning and striving
            to stay ahead in technology to deliver innovative solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl sm:text-3xl">
            <a
              href="https://www.linkedin.com/in/vishwajeet-kanchanwar-26793b360/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_15px_#0a66c2]"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Vishwa9922"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_15px_white]"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:vishukanchanwar17@gmail.com"
              className="text-red-400 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_15px_#ff4d4d]"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
