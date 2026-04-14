import type { FC } from "react";
import { ThemeSwitcher } from "./themeSwitcher";
import { scrollToSection } from "../utils/scroll";

const Navbar: FC = () => {
    return (
        <>
            <div className="mx-10 sm:mx-20">
                <div className="navbar bg-base-200">
                    <div className="navbar-start">
                        <a className="text-xl font-semibold">Audi Putra</a>
                    </div>
                    <div className="navbar-end lg:flex lg:gap-3">
                        <div className="hidden lg:block">
                            <ul className="menu menu-horizontal text-base px-1">
                                <li><button onClick={() => scrollToSection("home")}>Home</button></li>
                                <li><button onClick={() => scrollToSection("about")}>About</button></li>
                                <li><a>Project</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar