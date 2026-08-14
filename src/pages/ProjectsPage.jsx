import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useContentHeaderParallax from "../hooks/useContentHeaderParallax";

export default function ProjectsPage() {
    useDocumentTitle("Hayden Mak | Projects");
    useContentHeaderParallax(true);

    return (
        <main id="content" className="w-full max-w-[1200px] bg-white pb-8">
            <div
                id="content-header-img"
                className="relative mb-5 min-h-[30vh] w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/page_headers/projects.jpg')" }}
            >
                <div id="content-header-img-description" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b3c5dd2] px-3 py-1 text-3xl text-white">Projects</div>
                <div id="content-header-img-credits" className="absolute bottom-0 right-0 m-0 bg-[#0b3c5dd2] px-2 py-1 text-xs text-white">
                    Photo by <a href="https://unsplash.com/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Harrison</a> on <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-[2.5%] md:grid-cols-2 xl:grid-cols-3">
                <article className="tile overflow-hidden rounded-lg border border-slate-200 bg-[#e2e8e9] shadow-sm">
                    <a href="https://devpost.com/software/schmart" className="tile-link block no-underline">
                        <div className="img-wrapper">
                            <img className="tile-content h-auto w-full object-cover" src="/images/projects/schmart_app.jpg" alt="Schmart App screenshot" loading="lazy" decoding="async" />
                            <div className="px-3 pb-4 pt-3">
                                <p className="tile-title noselect text-2xl text-[#0b3c5d]">Schmart App</p>
                                <p className="tile-lang noselect text-sm text-slate-600">Language: React Native (Typescript), Python (Flask) <br /> Hack the Valley - Overall 1st Prize</p>
                                <div className="tile-description noselect mt-2 text-[15px] text-slate-700">
                                    <p className="tile-description-paragraph">
                                        As a team of four, we created a smart grocery shopping app which helped users meet their health and environmental goals. It displays the health information of food dynamically as food is added to the shopping cart. It also uses a machine learning algorithm to recommend foods based on previous purchase history.
                                    </p>
                                    <p className="tile-description-paragraph">Click this tile to learn more about our design process and inspiration!</p>
                                    <div className="tile-date mt-2 text-right text-sm text-slate-500">Project date: October 2021</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>

                <article className="tile overflow-hidden rounded-lg border border-slate-200 bg-[#e2e8e9] shadow-sm">
                    <Link to="/projects/personal_website.html" className="tile-link block no-underline">
                        <div className="img-wrapper">
                            <img className="tile-content h-auto w-full object-cover" src="/images/projects/website_screenshot.jpg" alt="Personal website screenshot" loading="lazy" decoding="async" />
                            <div className="px-3 pb-4 pt-3">
                                <p className="tile-title noselect text-2xl text-[#0b3c5d]">My Personal Website</p>
                                <p className="tile-lang noselect text-sm text-slate-600">Language: HTML, CSS, Javascript</p>
                                <div className="tile-description noselect mt-2 text-[15px] text-slate-700">
                                    <p className="tile-description-paragraph">
                                        This is my first medium-scale self-directed project outside coursework. I learned a lot more about foundational web development basics by applying HTML, CSS and Javascript to construct the website.
                                    </p>
                                    <p className="tile-description-paragraph">Click this tile to learn more about my design process and inspiration!</p>
                                    <div className="tile-date mt-2 text-right text-sm text-slate-500">Project date: June 2021 - Present</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>

                <article className="tile overflow-hidden rounded-lg border border-slate-200 bg-[#e2e8e9] shadow-sm">
                    <div className="img-wrapper">
                        <img className="tile-content h-auto w-full object-cover" src="/images/projects/doodlejump_screenshot.png" alt="Doodle Jump clone screenshot" loading="lazy" decoding="async" />
                        <div className="px-3 pb-4 pt-3">
                            <p className="tile-title noselect text-2xl text-[#0b3c5d]">Doodle Jump clone</p>
                            <p className="tile-lang noselect text-sm text-slate-600">Language: MIPS Assembly</p>
                            <div className="tile-description noselect mt-2 text-[15px] text-slate-700">
                                <p className="tile-description-paragraph">
                                    For CSC258, we implemented a Doodle Jump clone in MIPS Assembly in a team of two. We built a score system, diminishing platform sizes and score-based messages.
                                </p>
                                <div className="tile-date mt-2 text-right text-sm text-slate-500">Project date: March 2021 - April 2021</div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="tile overflow-hidden rounded-lg border border-slate-200 bg-[#e2e8e9] shadow-sm">
                    <div className="img-wrapper">
                        <img className="tile-content h-auto w-full object-cover" src="/images/projects/transit_simulator.jpg" alt="Transit System Simulator screenshot" loading="lazy" decoding="async" />
                        <div className="px-3 pb-4 pt-3">
                            <p className="tile-title noselect text-2xl text-[#0b3c5d]">Transit System Simulator</p>
                            <p className="tile-lang noselect text-sm text-slate-600">Language: MIPS Assembly</p>
                            <div className="tile-description noselect mt-2 text-[15px] text-slate-700">
                                <p className="tile-description-paragraph">
                                    For CSC207, we implemented a command-line transit fare simulator with account balance checks, line/station management, and team Scrum workflow.
                                </p>
                                <div className="tile-date mt-2 text-right text-sm text-slate-500">Project date: November 2020 - December 2020</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
