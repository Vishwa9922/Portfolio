import { GiCricketBat } from "react-icons/gi";
import { FaBiking, FaJava, FaReact, FaDocker } from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiEclipseide,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { GrDatabase } from "react-icons/gr";

export default function About() {
  const skills = [
    { icon: <FaJava className="text-5xl text-orange-500" />, name: "Java" },
    { icon: <SiSpring className="text-5xl text-green-500" />, name: "Spring" },
    { icon: <SiSpringboot className="text-5xl text-green-400" />, name: "Spring Boot" },
    { icon: <SiMysql className="text-5xl text-blue-500" />, name: "MySQL" },
    { icon: <GrDatabase className="text-5xl text-yellow-500" />, name: "SQL" },
    { icon: <FaReact className="text-5xl text-cyan-400" />, name: "React" },
    { icon: <SiJavascript className="text-5xl text-yellow-400" />, name: "JavaScript" },
    { icon: <FaDocker className="text-5xl text-blue-400" />, name: "Docker" },
  ];

  const tools = [
    { icon: <SiEclipseide className="text-4xl text-violet-400" />, name: "Eclipse IDE" },
    { icon: <SiSpring className="text-4xl text-green-600" />, name: "Spring Tool Suite" },
    { icon: <SiIntellijidea className="text-4xl text-purple-400" />, name: "IntelliJ IDEA" },
    { icon: <SiPostman className="text-4xl text-orange-400" />, name: "Postman" },
    { icon: <SiMysql className="text-4xl text-blue-500" />, name: "Workbench" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-800/50 rounded-2xl shadow-2xl p-10 backdrop-blur-lg border border-gray-700 space-y-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400">
          Know Who I&apos;M
        </h2>

        {/* Intro Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Hello, I am <span className="font-semibold text-white">Vishwajeet Kanchanwar</span> from Nagpur, Maharashtra, India.</p>
          <p>I have recently completed my Bachelor's Degree in <span className="font-semibold text-white">Computer Science and Engineering</span> from Priyadarshini Bhagwati College of Engineering, Nagpur (2025).</p>
          <p>Additionally, I have earned my <span className="font-semibold text-white">Microsoft Azure Fundamentals</span> certification and completed Full-Stack Java Development projects. Currently preparing for a career as a Java Full Stack Developer.</p>
          <p>Apart from coding, I love to do:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><GiCricketBat className="text-indigo-400 text-2xl"/>Cricket</li>
            <li className="flex items-center gap-3"><FaBiking className="text-indigo-400 text-2xl"/>Riding</li>
          </ul>
          <blockquote className="italic text-xl font-light text-indigo-300 border-l-4 border-indigo-500 pl-4">
            "Turning ideas into impactful digital solutions!"
          </blockquote>
          <p className="font-medium text-right">— Vishwajeet</p>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-3xl font-bold text-indigo-400 text-center mb-4">Professional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 bg-gray-700/50 p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition-transform">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div>
          <h3 className="text-3xl font-bold text-indigo-400 text-center mb-4">Tools I Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-2 bg-gray-700/50 p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition-transform">
                {tool.icon}
                <span className="font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
