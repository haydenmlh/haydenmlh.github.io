import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useTypewriterName from "../hooks/useTypewriterName";

export default function HomePage() {
    useDocumentTitle("Hayden Mak - A Computer Scientist & Developer");
    useTypewriterName(true);

    return (
        <main id="content" className="w-full max-w-[1200px] bg-white px-3 pb-8 pt-4 md:px-6 md:pt-6">
            <section className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
                <h2 className="border-b border-slate-200 bg-sky-50 px-4 py-3 text-lg font-semibold uppercase tracking-wide text-[#0b3c5d]">About Me</h2>
                <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:p-6">
                    <div className="h-28 w-28 flex-shrink-0 rounded-full border border-slate-300 bg-cover bg-center shadow-sm md:h-36 md:w-36" style={{ backgroundImage: "url('/images/about.png')" }}></div>
                    <div className="w-full rounded-lg border-l-2 border-[#d9b310] bg-white px-4 py-3 text-[16px] leading-7 text-slate-700">
                        <p className="my-2">
                            Hi, I&apos;m Hayden. I graduated in June 2024 from the University of Toronto with a Honours Bachelor of Science majoring in Computer Science and Economics.
                            I am actively looking for software development related positions and am actively upskilling to learn more about the latest technologies.
                            In my free time, I enjoy playing table tennis, tennis and jogging.
                        </p>
                        <p className="my-2">
                            You can find my resume <Link to="/resume.html">here</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
                <h2 className="border-b border-slate-200 bg-sky-50 px-4 py-3 text-lg font-semibold uppercase tracking-wide text-[#0b3c5d]">Featured Projects</h2>
                <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:p-6">
                    <Link
                        to="/projects.html"
                        className="h-28 w-28 flex-shrink-0 rounded-full border border-slate-300 bg-cover bg-center shadow-sm transition-opacity hover:opacity-90 md:h-36 md:w-36"
                        style={{ backgroundImage: "url('/images/projects.png')" }}
                    >
                        <span className="sr-only">Open projects</span>
                    </Link>
                    <div className="w-full rounded-lg border-l-2 border-[#d9b310] bg-white px-4 py-3 text-slate-700">
                        <div className="py-3">
                            <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                <div>
                                    <p className="text-lg font-semibold text-[#0b3c5d]">Recipe Book</p>
                                    <p className="text-sm text-slate-500">Frameworks: React, Django, SQLite</p>
                                </div>
                                <div>
                                    <p><a className="underline underline-offset-2" href="https://github.com/haydenmlh/Smart-Grocery-Map-and-Inventory">GitHub</a></p>
                                </div>
                            </div>
                            <p className="leading-7">
                                I worked with a team of three using Agile methodology to create recipe sharing website.
                                I developed extensive REST API using Django and SQLite and cross-platform front-end using Flutter.
                                I designed the frontend using React and custom Bootstrap elements and created the recipe creation template.
                            </p>
                        </div>

                        <hr className="my-3 border-slate-200" />

                        <div className="py-3">
                            <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                <div>
                                    <p className="text-lg font-semibold text-[#0b3c5d]">Smart Grocery App</p>
                                    <p className="text-sm text-slate-500">Frameworks: Flutter, Django, SQLite</p>
                                </div>
                                <div>
                                    <p><a className="underline underline-offset-2" href="https://github.com/haydenmlh/Smart-Grocery-Map-and-Inventory">GitHub</a></p>
                                </div>
                            </div>
                            <p className="leading-7">
                                I worked with a team of seven using Agile methodology to create an app to simplify grocery shopping. We developed extensive REST API using Django and SQLite and cross-platform front-end using Flutter.
                                I contributed to backend routing through the store, user registration and authentication, and frontend for mapping and displaying store inventory to the customer.
                                Our team used story point estimation using Fibonacci and scrum poker method.
                                I coordinated and ran twice a week standups, biweekly sprints and sprint retrospectives for the four sprints.
                            </p>
                        </div>

                        <hr className="my-3 border-slate-200" />

                        <div className="py-3">
                            <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                <div>
                                    <p className="text-lg font-semibold text-[#0b3c5d]">CatchTheClimate App</p>
                                    <p className="text-sm text-slate-500">Framework: React Native</p>
                                </div>
                                <div>
                                    <p><a className="underline underline-offset-2" href="https://github.com/haydenmlh/CatchTheClimate">GitHub</a></p>
                                </div>
                            </div>
                            <p className="leading-7">
                                Developed a front-end React Native app which queries and displays weather data from OpenWeatherAPI.
                                Implemented search function by city or zip code and queried API based on input.
                                Shortened time to display data by 70% by using local storage to store the last-searched city and cache weather data using react-native-mmkv-storage.
                            </p>
                        </div>

                        <hr className="my-3 border-slate-200" />

                        <div className="py-3">
                            <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                <div>
                                    <p className="text-lg font-semibold text-[#0b3c5d]">Schmart App | Hack The Valley 5 - 1st Place</p>
                                    <p className="text-sm text-slate-500">Frameworks: React Native, Flask</p>
                                </div>
                                <div>
                                    <p><a className="underline underline-offset-2" href="https://devpost.com/software/schmart">Devpost</a> | <a className="underline underline-offset-2" href="https://github.com/Shmart-app">GitHub</a></p>
                                </div>
                            </div>
                            <p className="leading-7">
                                Designed and implemented a barcode scanner which scanned objects and queried a nutrition API to obtain nutritional information and dynamically updated a chart.
                                Worked on user registration and login authentication in the frontend using React Native and backend using Flask.
                            </p>
                        </div>

                        <hr className="my-3 border-slate-200" />
                        <Link className="inline-block rounded-full border border-[#0b3c5d] bg-slate-50 px-4 py-2 text-[#0b3c5d] no-underline transition-colors hover:bg-[#0b3c5d] hover:text-white" to="/projects.html">More Projects</Link>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
                <h2 className="border-b border-slate-200 bg-sky-50 px-4 py-3 text-lg font-semibold uppercase tracking-wide text-[#0b3c5d]">Outside Of Work</h2>
                <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:p-6">
                    <div className="h-28 w-28 flex-shrink-0 rounded-full border border-slate-300 bg-cover bg-center shadow-sm md:h-36 md:w-36" style={{ backgroundImage: "url('/images/photos.png')" }}></div>
                    <div className="w-full rounded-lg border-l-2 border-[#d9b310] bg-white px-4 py-3 text-[16px] leading-7 text-slate-700">
                        <p>
                            I enjoy taking photographs from time to time as a hobby. To see some of my photos, you can check out my Instagram page, <a href="https://www.instagram.com/haydenm.photos">@haydenm.photos</a>.
                        </p>
                    </div>
                </div>
            </section>

            <div id="preload-01" className="hidden"></div>
            <div id="preload-02" className="hidden"></div>
            <div id="preload-03" className="hidden"></div>
        </main>
    );
}
