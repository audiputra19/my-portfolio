import { type FC, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import posDashboard from '../assets/images/project/pos-dashboard.jpg';
import posInput from '../assets/images/project/pos-input.jpg';
import posQrGenerator from '../assets/images/project/pos-qrgenerator.jpg';
import posSettings from '../assets/images/project/pos-settings.jpg';
import cooperativeDashboard from '../assets/images/project/coperative-dashboard.jpg'; 
import cooperativeMember from '../assets/images/project/coperative-member.jpg'; 
import cooperativePayment from '../assets/images/project/coperative-payment.jpg'; 
import cooperativeReport from '../assets/images/project/coperative-report.jpg'; 
import qrOrderCart from '../assets/images/project/qrorder-cart.jpg'; 
import qrOrderConfirm from '../assets/images/project/qrorder-confirm.jpg'; 
import qrOrderHomePage from '../assets/images/project/qrorder-homepage.jpg'; 
import qrOrderProcess from '../assets/images/project/qrorder-process.jpg'; 

const Project: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

    const container = {
        hidden: {},
        show: { 
            transition: { 
                staggerChildren: 0.1 
            } 
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                ease: [0.25, 1, 0.5, 1] as const 
            }
        }
    };

    const projects = [
        {
            name: "POS (Point of Sale)",
            desc: "A professional sales system to manage transactions and stock in real-time. Fully integrated with Scan to Order for seamless synchronization.",
            images: [posDashboard, posInput, posQrGenerator, posSettings],
            tech: ["React", "Typescript", "Express", "Socket.IO", "Tailwind"]
        },
        {
            name: "Scan to Order",
            desc: "A QR-based ordering application that allows customers to order directly from their tables, reducing manual errors significantly.",
            images: [qrOrderHomePage, qrOrderCart, qrOrderConfirm, qrOrderProcess],
            tech: ["React", "Typescript", "Express", "Socket.IO", "Tailwind"]
        },
        {
            name: "CMS (Cooperative System)",
            desc: "Digital platform for managing cooperative activities, including member data, savings, and loans with high transparency.",
            images: [cooperativeDashboard, cooperativeMember, cooperativePayment, cooperativeReport],
            tech: ["React", "Typescript", "Express", "Tailwind"]
        }
    ];

    const handleImageClick = (projectImages: string[]) => {
        setCurrentSlides(projectImages.map(img => ({ src: img })));
        setIsOpen(true);
    };

    return (
        <section 
            id="project" 
            className="bg-[#0f172a] py-24 relative overflow-hidden transition-colors duration-500"
        >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-warning/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>

            <div className="mx-auto px-5 sm:px-10 md:px-20 relative z-10">
                
                {/* HEADER SECTION */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <motion.span 
                        variants={item} 
                        className="text-warning font-bold tracking-[0.2em] text-sm mb-4 uppercase"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2 
                        variants={item} 
                        className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight"
                    >
                        My 
                        <span 
                            className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-warning 
                                to-yellow-200"
                        >
                            Projects
                        </span>
                    </motion.h2>
                    <motion.div 
                        variants={item} 
                        className="h-1 w-20 bg-gradient-to-r from-warning to-transparent rounded-full"
                    ></motion.div>
                </motion.div>

                {/* GRID SECTION */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            variants={item}
                            key={index} 
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 
                                rounded-[2rem] overflow-hidden transition-all duration-500 
                                hover:-translate-y-2 flex flex-col cursor-default shadow-lg 
                                hover:shadow-warning/5"
                        >
                            <div className="h-64 w-full relative overflow-hidden">
                                <Swiper
                                    spaceBetween={0}
                                    autoplay={{ delay: 3500 }}
                                    pagination={{ clickable: true }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="h-full w-full"
                                >
                                    {project.images.map((img, imgIndex) => (
                                        <SwiperSlide key={imgIndex}>
                                            <div 
                                                className="relative w-full h-full cursor-pointer"
                                                onClick={() => handleImageClick(project.images)}
                                            >
                                                <div 
                                                    className="absolute inset-0 bg-gradient-to-t 
                                                        from-[#0f172a] via-transparent to-transparent 
                                                        opacity-60 z-10"
                                                ></div>
                                                <img 
                                                    src={img} 
                                                    alt={project.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                
                                <div 
                                    className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 
                                        max-w-[80%]"
                                >
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[9px] font-black px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-warning border border-white/10 uppercase tracking-widest">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 
                                    className="text-2xl font-bold text-white mb-3 
                                        group-hover:text-warning transition-colors"
                                >
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.desc}
                                </p>
                                
                                <div 
                                    className="pt-4 border-t border-white/5 flex justify-between 
                                        items-center"
                                >
                                    <button 
                                        onClick={() => handleImageClick(project.images)}
                                        className="text-white font-bold text-sm flex items-center gap-2 
                                            group/btn cursor-pointer"
                                    >
                                        View Case Study
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4 transform group-hover/btn:translate-x-1 
                                                transition-transform" fill="none" viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={3} 
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                            />
                                        </svg>
                                    </button>
                                    
                                    <div 
                                        className="w-10 h-10 rounded-full bg-warning/10 flex items-center 
                                            justify-center text-warning opacity-0 group-hover:opacity-100 
                                            transition-opacity"
                                        >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5" 
                                            fill="none" viewBox="0 0 24 24" 
                                            stroke="currentColor">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                                            />
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 
                                                    9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 
                                                    0-8.268-2.943-9.542-7z" 
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={currentSlides}
                styles={{ 
                    container: { backgroundColor: "rgba(2, 6, 23, 0.98)" },
                }}
            />
            
            <style 
                dangerouslySetInnerHTML={{ __html: `
                .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
                .swiper-pagination-bullet-active { background: #fbbf24 !important; opacity: 1; width: 20px; border-radius: 4px; transition: all 0.3s; }
                .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.5); opacity: 0; transition: all 0.3s; }
                .group:hover .swiper-button-next, .group:hover .swiper-button-prev { opacity: 1; transform: scale(0.6); }
            `}} />
        </section>
    );
}

export default Project;