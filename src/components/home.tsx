import type { FC } from "react";
import { motion } from "framer-motion";
import Profile from '../assets/images/profile-picture.png'
import { scrollToSection } from "../utils/scroll";
import myCV from '../assets/files/cv-audi-putra.pdf';

const Home: FC = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -30 },
        show: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
        }
    };

    return (
        <>
            <section 
                id="home" 
                className="min-h-[85vh] flex items-center mt-5 pt-5 px-5 sm:px-10 md:px-20 overflow-hidden"
            >
                <motion.div 
                    className="flex-col lg:flex lg:flex-row lg:justify-between items-center w-full"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* PROFILE IN MOBILE */}
                    <motion.div className="lg:hidden" variants={item}>
                        <div className="mb-10">
                            <img 
                                src={Profile} 
                                className="w-48 h-48 rounded-full object-cover object-top border-4 
                                    border-primary/20 shadow-2xl"
                                alt="Profile"
                            />
                        </div>
                    </motion.div>

                    {/* HEADER */}
                    <div className="w-full lg:max-w-[600px]">
                        <div>
                            <motion.div 
                                variants={item} 
                                className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                    bg-primary/10 border border-primary/20"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span 
                                        className="animate-ping absolute inline-flex h-full w-full 
                                            rounded-full bg-warning opacity-75"
                                    ></span>
                                    <span 
                                        className="relative inline-flex rounded-full h-2 w-2 bg-warning"
                                    ></span>
                                </span>
                                <span 
                                    className="text-[10px] font-black uppercase tracking-[0.2em] 
                                        text-primary"
                                >
                                     Open for Projects
                                </span>
                            </motion.div>

                            <motion.h1 
                                variants={item}
                                className="text-5xl md:text-7xl font-black leading-[1.1]"
                            >
                                Hey!, I am <br />
                                <span 
                                    className="text-transparent bg-clip-text bg-gradient-to-r 
                                        from-primary to-blue-400"
                                >
                                    Audi Putra
                                </span>
                            </motion.h1>

                            <motion.h2 
                                variants={item}
                                className="text-3xl md:text-4xl font-bold mt-4 tracking-tight"
                            >
                                Fullstack Developer
                            </motion.h2>

                            <motion.p 
                                variants={item}
                                className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg"
                            >
                                Experienced in building high-performance web applications, 
                                interactive dashboards, and scalable business systems. 
                                I love turning complex problems into simple, elegant solutions.
                            </motion.p>

                            <motion.div 
                                variants={item}
                                transition={{ duration: 0.8 }}
                                className="pt-10 flex gap-3"
                            >
                                <button 
                                    onClick={() => scrollToSection("contact")}
                                    className="btn btn-primary transition-all duration-300 hover:scale-105"
                                >
                                    Contact Me
                                </button>
                                <a 
                                    href={myCV}
                                    download="CV_Audi_Putra.pdf"
                                    className="btn btn-outline btn-primary transition-all 
                                        duration-300 hover:scale-105"
                                >
                                    Download CV
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* BACKGROUND & PROFILE */}
                    <motion.div 
                        className="hidden lg:block relative w-[300px] h-[500px]"
                        variants={item}
                        transition={{ duration: 0.8 }}
                    >
                        <div 
                            className="absolute w-30 h-30 border-4 border-dashed border-warning top-70 
                                right-130 rounded-full flex items-center justify-center"
                        >
                            <div className="w-20 h-20 border-4 border-warning rounded-full"></div>
                        </div>

                        <div className="absolute w-80 h-80 bg-warning top-20 right-30 rounded-full"></div>

                        <div className="absolute w-20 h-20 bg-warning top-10 right-100 rounded-full"></div>

                        <div 
                            className="absolute w-20 h-20 border-2 border-warning top-20 right-10 
                                rounded-full flex items-center justify-center"
                        >
                            <div className="w-15 h-15 bg-warning rounded-full"></div>
                        </div>

                        <div className="absolute grid grid-cols-2 gap-2 top-[300px] right-[40px]">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                        </div>

                        <img 
                            src={Profile} 
                            className="absolute top-0 right-[120px] w-full 
                                [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
                        />
                    </motion.div>

                </motion.div>
            </section>
        </>
    )
}

export default Home;