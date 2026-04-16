import type { FC } from "react";
import { motion } from "framer-motion";
import Laptop from '../assets/images/Laptop.png'
import { FaReact, FaNodeJs, FaPhp, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql, SiRedux, SiSocketdotio, SiTailwindcss, SiExpress } from "react-icons/si";

const About: FC = () => {

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1] as const,
            }
        }
    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1
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
                className="relative mt-10 lg:mt-35 bg-base-100 overflow-hidden"
            >
                <div className="py-24 px-10 sm:px-20">

                    {/* BACKGROUND */}
                    <motion.div 
                        className="hidden lg:block relative"
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className="absolute w-100 h-100 bg-warning left-[-100px] rounded-full"></div>
                        <div 
                            className="absolute w-20 h-20 border-4 border-warning top-[12px] left-[465px] 
                                rounded-full"
                        ></div>
                        <div 
                            className="absolute w-80 h-80 border-4 border-dashed border-warning 
                                top-[400px] right-[100px] rounded-full flex justify-center items-center"
                        >
                            <div className="w-60 h-60 border-4 border-dashed border-warning rounded-full"></div>
                        </div>
                        <div className="absolute grid grid-cols-4 gap-4 top-[300px] right-[-40px]">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-warning rounded-full"></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* MAIN CONTENT */}
                    <motion.div 
                        className="flex justify-between gap-5"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div 
                            className="hidden lg:block w-[600px] flex justify-center items-center z-10"
                            variants={item}
                        >
                            <img src={Laptop} className="w-[600px]" alt="Laptop" />
                        </motion.div>

                        <div className="flex-1 w-full md:max-w-[600px]">
                            <motion.h1 variants={item} className="text-4xl font-black">About</motion.h1>
                            <motion.div variants={item} className="mt-5 flex flex-col gap-3">
                                <p className="text-gray-500">
                                    I am a Fullstack Developer with experience in building web 
                                    applications from front-end to back-end. I have worked on various 
                                    projects such as interactive web applications, dashboards, 
                                    cashier systems, and attendance systems.
                                </p>
                                <p className="text-gray-500">
                                    I enjoy solving complex problems and turning them into simple, 
                                    efficient, and scalable solutions.
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
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 
                            variants={item} 
                            className="text-3xl font-black flex items-center gap-4"
                        >
                            Skills & Tech
                            <div className="h-1 w-20 bg-primary rounded-full opacity-50"></div>
                        </motion.h2>

                        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map((skill) => (
                                <motion.div 
                                    key={skill.title}
                                    variants={item}
                                    className="border border-base-300 shadow bg-base-200 p-5 rounded-xl 
                                        flex flex-col gap-2 w-full group/item cursor-default 
                                        transition-all duration-500 hover:border-primary/50 
                                        hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                >
                                    <div 
                                        className="mb-3 bg-primary text-white flex justify-center 
                                            items-center w-15 h-15 rounded-full mx-auto transition-all 
                                            duration-500 group-hover/item:scale-110"
                                    >
                                        {skill.icon}
                                    </div>
                                    <p className="font-bold text-center text-lg">{skill.title}</p>
                                    <p className="text-center text-sm text-gray-400">{skill.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* TECHNOLOGIES */}
                        <motion.div className="mt-10" variants={item}>
                            <div className="relative mt-10 overflow-hidden">
                                <div 
                                    className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r 
                                        from-base-100 to-transparent z-10 pointer-events-none"
                                ></div>
                                <div 
                                    className="absolute inset-y-0 right-0 w-15 bg-gradient-to-l 
                                        from-base-100 to-transparent z-10 pointer-events-none"
                                ></div>

                                <div className="flex w-max animate-scroll py-2 gap-6">
                                    <div className="flex gap-6">
                                        {technologies.map((tech, i) => (
                                            <div 
                                                key={i} 
                                                className="flex items-center gap-3 border border-base-300 
                                                    shadow bg-base-200 px-7 py-4 rounded-full 
                                                    whitespace-nowrap group/item cursor-default 
                                                    transition-all duration-500 hover:border-primary/50 
                                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                                >
                                                <span className="text-2xl transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-12">{tech.icon}</span>
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-6">
                                        {technologies.map((tech, i) => (
                                            <div 
                                                key={`dup-${i}`} 
                                                className="flex items-center gap-3 border border-base-300 
                                                    shadow bg-base-200 px-7 py-4 rounded-full 
                                                    whitespace-nowrap group/item cursor-default 
                                                    transition-all duration-500 hover:border-primary/50 
                                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                                >
                                                <span 
                                                    className="text-2xl transition-transform duration-500 
                                                        group-hover/item:scale-125 
                                                        group-hover/item:rotate-12"
                                                >
                                                    {tech.icon}
                                                </span>
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* EXPERIENCE */}
                    <motion.div
                        className="relative z-10 mt-20"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={item} className="flex flex-col mb-12">
                            <h2 className="text-3xl font-black flex items-center gap-4">
                                Experience
                                <div className="h-1 w-20 bg-primary rounded-full opacity-50"></div>
                            </h2>
                        </motion.div>

                        <div className="relative mt-10">
                            <div 
                                className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b 
                                    from-primary via-primary/20 to-transparent hidden md:block"
                            ></div>

                            <div className="space-y-12">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                                    <motion.div 
                                        variants={item}
                                        className="relative z-10 flex flex-none justify-center 
                                            items-center w-18 h-18 bg-[#1e293b] border-3 border-primary 
                                            text-primary font-black rounded-2xl 
                                            shadow-[0_0_20px_rgba(59,130,246,0.2)] 
                                            transform rotate-3"
                                    >
                                        2026
                                    </motion.div>

                                    <motion.div 
                                        variants={item}
                                        className="flex-1 p-8 border border-base-300 shadow bg-base-200 
                                            backdrop-blur-sm rounded-[2rem] relative overflow-hidden 
                                            group hover:border-primary/40 transition-all duration-500 
                                            cursor-default hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                    >
                                        <div 
                                            className="absolute -right-10 -top-10 w-32 h-32 
                                                bg-primary/5 rounded-full blur-3xl"
                                        ></div>
                                        <div 
                                            className="flex flex-col md:flex-row md:items-center 
                                                justify-between gap-2 mb-4"
                                        >
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight">Web Programmer</h3>
                                                <p 
                                                    className="text-primary font-bold text-sm 
                                                        tracking-widest uppercase mt-1"
                                                >PT. SARANDI KARYA NUGRAHA</p>
                                            </div>
                                            <div 
                                                className="px-4 py-1.5 bg-primary/10 border 
                                                    border-primary/20 rounded-full"
                                            >
                                                <span 
                                                    className="text-xs font-bold text-primary"
                                                >2018 — Present</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-base">
                                            Responsible for developing, maintaining, and troubleshooting 
                                            web applications using the PHP ecosystem. My focus is on keeping 
                                            systems running smoothly, fixing bugs quickly, and writing clean code that 
                                            performs well.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About;