import type { FC } from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Project from "../components/project";
import Contact from "../components/contact";

const Main: FC = () => {
    return (
        <>
            <div className="min-h-screen bg-base-200">
                <div>
                    <Navbar />
                    <div className="pt-20">
                        <Home />
                        <About />
                        <Project />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;