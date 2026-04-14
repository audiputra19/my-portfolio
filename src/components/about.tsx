import type { FC } from "react";
import { motion } from "framer-motion";
import Laptop from '../assets/images/Laptop.png'
import { FaReact, FaNodeJs, FaPhp, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql, SiRedux, SiSocketdotio, SiTailwindcss, SiExpress } from "react-icons/si";

const About: FC = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    const skills = [
        {
            title: "Fullstack Development",
            desc: "Building complete web applications from frontend to backend using modern technologies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
            )
        },
        {
            title: "Real-time Systems",
            desc: "Developing features such as notifications, data processing, and system interactions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2-4h.01M12 8v4m0 4h.01" />
                </svg>
            )
        },
        {
            title: "Problem Solving",
            desc: "Analyzing complex problems and turning them into efficient solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3a7 7 0 00-7 7c0 2.386 1.194 4.5 3 5.764V19a1 1 0 001 1h6a1 1 0 001-1v-3.236A6.978 6.978 0 0019 10a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            title: "REST API Development",
            desc: "Designing and building scalable and secure APIs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6h3" />
                </svg>
            )
        }
    ];

    const technologies = [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Socket.IO", icon: <SiSocketdotio /> },
    ];

    return (
        <>
            <section 
                id="about" 
                className="relative mt-10 lg:mt-35 bg-base-100"
            >
                <div className="py-10 px-10 sm:px-20">

                    {/* BACKGROUND */}
                    <motion.div 
                        className="hidden lg:block relative"
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className="absolute w-100 h-100 bg-warning left-[-100px] rounded-full"></div>
                        <div className="absolute w-20 h-20 border-4 border-warning top-[12px] left-[465px] rounded-full"></div>
                        <div className="absolute w-80 h-80 border-4 border-dashed border-warning top-[400px] right-[100px] rounded-full 
                            flex justify-center items-center">
                            <div className="w-60 h-60 border-4 border-dashed border-warning rounded-full"></div>
                        </div>
                        <div className="absolute grid grid-cols-4 gap-4 top-[300px] right-[-40px]">
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                            <div className="w-4 h-4 bg-warning rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* MAIN CONTENT */}
                    <motion.div 
                        className="flex justify-between gap-5"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="hidden lg:block w-[600px] flex justify-center items-center z-10"
                            variants={item}
                        >
                            <img 
                                src={Laptop}
                                className="w-[600px]"
                            />
                        </motion.div>

                        <div className="flex-1 w-full md:max-w-[600px]">
                            <motion.h1 
                                variants={item}
                                className="text-4xl font-bold"
                            >
                                About
                            </motion.h1>

                            <motion.div 
                                variants={item}
                                className="mt-5 flex flex-col gap-3"
                            >
                                <p className="text-gray-500">
                                    I am a Fullstack Developer with experience in building web applications from front-end to back-end.
                                    I have worked on various projects such as interactive web applications, dashboards, cashier systems, and attendance systems.
                                </p>
                                <p className="text-gray-500">
                                    I enjoy solving complex problems and turning them into simple, efficient, and scalable solutions.
                                    I am passionate about learning new technologies and continuously improving my skills.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* SKILLS + TECHNOLOGIES */}
                    <motion.div 
                        className="relative z-10 mt-10 lg:mt-20"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            variants={item}
                            className="text-3xl font-bold"
                        >
                            Skills & Technologies
                        </motion.h1>

                        {/* SKILLS */}
                        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map((skill) => (
                                <motion.div 
                                    key={skill.title}
                                    variants={item}
                                    className="border border-base-300 shadow bg-base-200 p-5 rounded-xl
                                        flex flex-col gap-2 w-full"
                                >
                                    <div className="mb-3 bg-primary text-white flex justify-center items-center w-15 h-15 rounded-full mx-auto">
                                        {skill.icon}
                                    </div>
                                    <p className="font-medium text-center text-lg">{skill.title}</p>
                                    <p className="text-center text-sm text-gray-500">{skill.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* TECHNOLOGIES */}
                        <motion.div 
                            className="mt-10"
                            variants={item}
                        >
                            <div className="mt-10 overflow-hidden">
                                <div className="flex w-max animate-scroll py-2 gap-6">

                                    <div className="flex gap-6">
                                        {technologies.map((tech, i) => (
                                            <motion.div
                                                key={i}
                                                variants={item}
                                                className="flex items-center gap-3 border border-base-300 shadow bg-base-200 px-5 py-3 rounded-full whitespace-nowrap"
                                            >
                                                <span className="text-2xl">
                                                    {tech.icon}
                                                </span>
                                                <span className="text-sm font-medium">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="flex gap-6">
                                        {technologies.map((tech, i) => (
                                            <motion.div
                                                key={`dup-${i}`}
                                                variants={item}
                                                className="flex items-center gap-3 border border-base-300 shadow bg-base-200 px-5 py-3 rounded-full whitespace-nowrap"
                                            >
                                                <span className="text-2xl">
                                                    {tech.icon}
                                                </span>
                                                <span className="text-sm font-medium">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* EXPERIENCE */}
                    <motion.div
                        className="relative z-10 mt-10 mt-10"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            variants={item}
                            className="text-3xl font-bold"
                        >
                            Experience
                        </motion.h1>
                        <div className="mt-5">
                            <div
                                className="flex gap-10"
                            >
                                <motion.div 
                                    variants={item}
                                    className="flex justify-center items-center w-18 h-18 bg-primary 
                                    text-white font-bold rounded-full"
                                >
                                    2026
                                </motion.div>
                                <motion.div 
                                    variants={item}
                                    className="flex-1 p-5 border border-base-300 shadow bg-base-200 rounded-xl"
                                >
                                    <p className="font-medium text-lg">Web Programmer</p>
                                    <p className="font-medium mt-2">2018 - 2026</p>
                                    <p className="font-medium text-primary mt-2">PT. SARANDI KARYA NUGRAHA</p>
                                    <p className="text-sm text-gray-500 mt-3">
                                        I am responsible for developing, maintaining, and troubleshooting 
                                        web applications using PHP, HTML, and MySQL. I focus on building 
                                        stable and efficient systems, ensuring smooth functionality, 
                                        and resolving issues to improve application performance.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About;