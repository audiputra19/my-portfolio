import type { FC } from "react";
import { motion } from "framer-motion";
import Profile from '../assets/images/profile-picture.png'

const Home: FC = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <section id="home" className="mt-5 pt-5 mx-10 sm:mx-20">
                <motion.div 
                    className="flex-col lg:flex lg:flex-row lg:justify-between items-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >

                    {/* MOBILE IMAGE */}
                    <motion.div className="lg:hidden" variants={item}>
                        <div className="mb-10">
                            <img 
                                src={Profile} 
                                className="w-50 h-50 rounded-full object-cover object-top"
                            />
                        </div>
                    </motion.div>

                    {/* INTRODUCING */}
                    <div className="w-full md:max-w-[500px]">
                        <div>

                            <motion.h1 
                                variants={item}
                                transition={{ duration: 0.6 }}
                                className="text-5xl font-bold"
                            >
                                Hey!, I am 
                                <span className="text-primary"> Audi Putra</span>
                            </motion.h1>

                            <motion.h1 
                                variants={item}
                                transition={{ duration: 0.6 }}
                                className="text-5xl font-bold mt-3"
                            >
                                Fullstack Developer
                            </motion.h1>

                            <motion.p 
                                variants={item}
                                transition={{ duration: 0.7 }}
                                className="mt-5 text-gray-500"
                            >
                                A Fullstack Developer experienced in building web applications, 
                                dashboards, and business systems with a focus on efficiency 
                                and scalability. I love turning complex problems into simple solutions
                            </motion.p>

                            <motion.div 
                                variants={item}
                                transition={{ duration: 0.8 }}
                                className="pt-10 flex gap-3"
                            >
                                <button className="btn btn-primary">Contact Me</button>
                                <button className="btn btn-outline btn-primary">Download CV</button>
                            </motion.div>

                        </div>
                    </div>

                    {/* BACKGROUND SHAPE & IMAGE */}
                    <motion.div 
                        className="hidden lg:block relative w-[300px] h-[500px]"
                        variants={item}
                        transition={{ duration: 0.8 }}
                    >
                        <div 
                            className="absolute w-30 h-30 border-4 border-dashed border-warning top-70 right-130 rounded-full 
                            flex items-center justify-center"
                        >
                            <div className="w-20 h-20 border-4 border-warning rounded-full"></div>
                        </div>

                        <div className="absolute w-80 h-80 bg-warning top-20 right-30 rounded-full"></div>

                        <div className="absolute w-20 h-20 bg-warning top-10 right-100 rounded-full"></div>

                        <div 
                            className="absolute w-20 h-20 border-2 border-warning top-20 right-10 rounded-full 
                            flex items-center justify-center"
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