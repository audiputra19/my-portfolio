import { useState, useEffect, type FC } from "react";
import { ThemeSwitcher } from "./themeSwitcher";
import { scrollToSection } from "../utils/scroll";

const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
            ${isScrolled 
                ? "bg-base-100/80 backdrop-blur-md shadow-lg" 
                : "bg-transparent py-2"}`}
        >
            <div className="mx-10 sm:mx-20">
                <div className="navbar">
                    <div className="navbar-start">
                        <a className="text-xl font-black cursor-pointer">Audi Putra</a>
                    </div>
                    <div className="navbar-end lg:flex lg:gap-3">
                        <div className="hidden lg:block">
                            <ul className="menu menu-horizontal text-base px-1">
                                <li><button onClick={() => scrollToSection("home")}>Home</button></li>
                                <li><button onClick={() => scrollToSection("about")}>About</button></li>
                                <li><button onClick={() => scrollToSection("project")}>Project</button></li>
                                <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
                            </ul>
                        </div>
                        <div>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;