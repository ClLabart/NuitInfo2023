import React from "react";

import "./assets/js/code.js";
import Navbar from "./component/navbar/Navbar.jsx";
import Footer from "./component/footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar scrollY={scrollY} />

            <main>
                <Outlet />
            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </>
    );
}

export default App;
