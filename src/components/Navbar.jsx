import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function currentClass(pathname, paths) {
    return paths.includes(pathname) ? "current" : "";
}

export default function Navbar() {
    const { pathname } = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinkClass = (isActive) => `px-2 py-1 text-base transition-colors hover:text-[#328cc1] ${isActive ? "text-[#0b3c5d]" : "text-[#1d2731]"}`;

    return (
        <header className="noselect flex w-full justify-center bg-white">
            <nav id="buttons" className="w-full max-w-[1200px] border-b border-[#d7e0ea] px-4 py-3 md:px-8 md:py-5">
                <div className="flex items-center justify-between gap-3">
                    <Link to="/" id="name-link" className="no-underline" onClick={() => setMobileOpen(false)}>
                        <h1 id="header-name" className="m-0 text-[26px] font-normal uppercase leading-none text-[#0b3c5d] md:text-[30px]" style={{ fontFamily: "Nanum Gothic, sans-serif" }}>Hayden Mak</h1>
                    </Link>

                    <div className="hidden items-center gap-1 md:flex">
                        <Link
                            className={navLinkClass(currentClass(pathname, ["/resume.html", "/resume"]) === "current")}
                            to="/resume.html"
                            id="about-link"
                        >
                            Resume
                        </Link>
                        <Link
                            className={navLinkClass(currentClass(pathname, ["/projects.html", "/projects", "/projects/personal_website.html", "/projects/personal_website"]) === "current")}
                            to="/projects.html"
                            id="projects-link"
                        >
                            Projects
                        </Link>
                        <a className={navLinkClass(false)} href="https://www.instagram.com/haydenm.photos" id="photography-link">
                            Photography
                        </a>
                        <Link
                            className={navLinkClass(currentClass(pathname, ["/contact.html", "/contact"]) === "current")}
                            to="/contact.html"
                            id="contact-link"
                        >
                            Contact
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="rounded border border-[#0b3c5d] px-2 py-1 text-[#0b3c5d] md:hidden"
                        id="mobile-menu-toggle"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                        aria-controls="buttons"
                        onClick={() => setMobileOpen((value) => !value)}
                    >
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>

                {mobileOpen ? (
                    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#d7e0ea] pt-3 md:hidden">
                        <Link className="rounded bg-[#f2f7fb] px-3 py-2 text-center no-underline" to="/resume.html" id="about-link-mobile" onClick={() => setMobileOpen(false)}>
                            Resume
                        </Link>
                        <Link className="rounded bg-[#f2f7fb] px-3 py-2 text-center no-underline" to="/projects.html" id="projects-link-mobile" onClick={() => setMobileOpen(false)}>
                            Projects
                        </Link>
                        <a className="rounded bg-[#f2f7fb] px-3 py-2 text-center no-underline" href="https://www.instagram.com/haydenm.photos" id="photography-link-mobile">
                            Photography
                        </a>
                        <Link className="rounded bg-[#f2f7fb] px-3 py-2 text-center no-underline" to="/contact.html" id="contact-link-mobile" onClick={() => setMobileOpen(false)}>
                            Contact
                        </Link>
                    </div>
                ) : null}
            </nav>
        </header>
    );
}
