import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function initializeAnalytics() {
    if (window.gtag) {
        window.gtag("config", "G-0BLLSR9Y1W");
    }
}

export default function SiteLayout({ children }) {
    const location = useLocation();

    useEffect(() => {
        initializeAnalytics();
    }, []);

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-0BLLSR9Y1W", {
                page_path: location.pathname
            });
        }
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen w-full flex-col items-center">
            <div id="pre-footer" className="flex w-full flex-1 flex-col items-center">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}
