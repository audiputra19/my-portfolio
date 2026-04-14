import type { FC } from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";

const Main: FC = () => {
    return (
        <>
            <div className="min-h-screen bg-base-200">
                <div>
                    <Navbar />
                    <Home />
                    <About />
                </div>
            </div>
        </>
    )
}

export default Main;