import { type FC } from "react";
import { motion } from "framer-motion";
import { LuExternalLink, LuGithub, LuInstagram, LuLinkedin, LuMail, LuMapPin, LuPhone, LuMessageSquare } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";

const Contact: FC = () => {
    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                ease: [0.25, 1, 0.5, 1] as const 
            }
        }
    };

    const contactMethods = [
        {
            name: "Email",
            value: "audiputra19@gmail.com",
            icon: <LuMail className="w-6 h-6" />,
            link: "mailto:audiputra19@gmail.com",
            color: "hover:text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            name: "LinkedIn",
            value: "Audi Putra",
            icon: <LuLinkedin className="w-6 h-6" />,
            link: "https://www.linkedin.com/in/audi-putra-734a68172/",
            color: "hover:text-blue-600",
            bg: "bg-blue-600/10"
        },
        {
            name: "GitHub",
            value: "Audi Putra",
            icon: <LuGithub className="w-6 h-6" />,
            link: "https://github.com/audiputra19",
            color: "hover:text-gray-300",
            bg: "bg-white/10"
        },
        {
            name: "Instagram",
            value: "@audi.p.hilmi",
            icon: <LuInstagram className="w-6 h-6" />,
            link: "https://www.instagram.com/audi.p.hilmi/",
            color: "hover:text-pink-500",
            bg: "bg-pink-500/10"
        },
    ];

    return (
        <section id="contact" className="bg-[#0f172a] py-24 relative overflow-hidden">
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] 
                h-[500px] bg-warning/5 blur-[150px] rounded-full"
            ></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-20"
                >
                    <motion.span 
                        variants={item} 
                        className="text-warning font-bold tracking-[0.2em] text-sm uppercase"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2 
                        variants={item} 
                        className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 tracking-tight"
                    >
                        Let's Work 
                        <span 
                            className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-warning 
                            to-yellow-200"
                        >Together</span>
                    </motion.h2>
                    <motion.div 
                        variants={item} 
                        className="h-1 w-20 bg-gradient-to-r from-warning to-transparent mx-auto rounded-full"
                    ></motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* INFO COLUMN */}
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <motion.div 
                            variants={item} 
                            className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md 
                                cursor-default group hover:border-warning/30 transition-all"
                        >
                            <div className="flex items-center gap-4 text-white">
                                <div 
                                    className="p-3 bg-warning/10 rounded-2xl text-warning 
                                        group-hover:scale-110 transition-transform"
                                >
                                    <LuMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p 
                                        className="text-xs text-gray-400 uppercase tracking-widest 
                                            font-bold"
                                    >Location</p>
                                    <p className="font-medium text-lg">Sukabumi, Indonesia</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={item}
                                    className="group flex items-center justify-between p-5 bg-white/5 
                                        border border-white/10 rounded-3xl transition-all duration-300 
                                        hover:border-white/30 hover:bg-white/[0.08]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className={`p-3 rounded-2xl transition-colors duration-300 
                                                ${method.bg} text-white group-hover:text-warning`}
                                            >
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p 
                                                className="text-xs text-gray-400 uppercase tracking-widest 
                                                    font-bold"
                                            >{method.name}</p>
                                            <p 
                                                className={`font-medium transition-colors text-white 
                                                    ${method.color}`}
                                            >{method.value}</p>
                                        </div>
                                    </div>
                                    <LuExternalLink 
                                        className="w-4 h-4 text-gray-500 group-hover:text-white 
                                            transition-colors" 
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* QUICK RESPONSE   */}
                    <motion.div 
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-gradient-to-br from-white/10 to-transparent border 
                            border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md flex flex-col 
                            justify-center items-center text-center group"
                    >
                        <div 
                            className="w-20 h-20 bg-warning/20 rounded-full flex items-center 
                                justify-center mb-8 group-hover:scale-110 transition-transform 
                                duration-500"
                        >
                            <LuMessageSquare className="w-10 h-10 text-warning" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-4">Quick Response?</h3>
                        <p className="text-gray-400 text-lg mb-10 max-w-md">
                            I'm most active on WhatsApp for direct inquiries. Feel free to ping me for 
                            project discussions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <a 
                                href="https://wa.me/6289668687722" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:max-w-[240px] bg-warning hover:bg-yellow-500 
                                    text-black font-black py-4 px-8 rounded-2xl 
                                    shadow-[0_10px_20px_rgba(251,191,36,0.2)] transition-all 
                                    duration-300 transform hover:-translate-y-1 flex items-center 
                                    justify-center gap-3 uppercase tracking-widest text-sm"
                            >
                                <LuPhone className="w-5 h-5" />
                                WhatsApp Me
                            </a>
                            
                            <a 
                                href="https://t.me/+6289668687722" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:max-w-[240px] bg-white/5 hover:bg-white/10 
                                    text-white border border-white/20 font-black py-4 px-8 rounded-2xl 
                                    transition-all duration-300 transform hover:-translate-y-1 flex 
                                    items-center justify-center gap-3 uppercase tracking-widest text-sm"
                            >
                                <FaTelegramPlane className="w-5 h-5" />
                                Telegram
                            </a>
                        </div>
                        
                        <p className="mt-8 text-xs text-gray-500 font-medium flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Available for new opportunities
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;