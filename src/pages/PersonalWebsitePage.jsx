import useDocumentTitle from "../hooks/useDocumentTitle";
import useContentHeaderParallax from "../hooks/useContentHeaderParallax";

export default function PersonalWebsitePage() {
    useDocumentTitle("Hayden Mak - Personal Website Inspiration and Process");
    useContentHeaderParallax(true);

    return (
        <main id="content" className="w-full max-w-[1200px] bg-white pb-8">
            <div
                id="content-header-img"
                className="relative mb-5 min-h-[30vh] w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/page_headers/projects.jpg')" }}
            >
                <div id="content-header-img-description" className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[#0b3c5dd2] px-3 py-1 text-center text-2xl text-white md:text-3xl">Personal Website Inspiration and Process</div>
                <div id="content-header-img-credits" className="absolute bottom-0 right-0 m-0 bg-[#0b3c5dd2] px-2 py-1 text-xs text-white">
                    Photo by <a href="https://unsplash.com/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Harrison</a> on <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>

            <div id="content-paragraph" className="px-[2.5%] text-[16px] leading-7 text-slate-700">
                <p id="process-title" className="mb-3 mt-1 text-2xl font-semibold text-[#0b3c5d]">Initial Progress</p>
                <div id="content-first-paragraph" className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr] md:items-start">
                    <div id="color-scheme" className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                        <img className="w-full rounded" src="/images/projects/personal_website/color_scheme.jpg" alt="Color scheme inspiration" loading="lazy" decoding="async" />
                        <div className="img-caption mt-2 text-sm text-slate-500">- Elegant and <br />Sophisticated <br /> Color Scheme</div>
                    </div>
                    <p>
                        The primary purpose of my personal website is to showcase my programming projects and photography.
                        To achieve this, I began the website design by splitting my navigation into several subsections, namely Home, About, Projects, Photography, Blog and Contact.
                        After browsing <a href="https://www.canva.com/learn/website-color-schemes/">an article</a> on Canva about website color schemes, I decided to incorporate the No.11 Elegant and Sophisticated colour scheme from the article.
                    </p>
                </div>

                <div id="content-second-paragraph" className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr] md:items-start">
                    <div id="initial-website" className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                        <img id="initial-website-img" className="w-full rounded" src="/images/projects/personal_website/initial_design.jpg" alt="Initial personal website design" loading="lazy" decoding="async" />
                        <div className="img-caption mt-2 text-sm text-slate-500">- Initial prototype of personal website</div>
                    </div>
                    <p>
                        I then proceeded to design the navigation bar to make it responsive for mobile and desktop.
                        I learned media queries, mobile metadata setup, and CSS/JavaScript resizing to create cleaner layouts.
                    </p>
                </div>

                <p id="inspiration-title" className="mb-3 mt-2 text-2xl font-semibold text-[#0b3c5d]">Current Design Inspiration</p>

                <p id="content-third-paragraph" className="mb-6">
                    After seeking constructive criticism from close friends (credits to <a href="https://github.com/loukos-scheffer">Loukos Scheffer</a>),
                    I changed the look and colors from colorful tabs to a cleaner modern style.
                    I took inspiration from websites in <a href="https://www.themuse.com/advice/the-35-best-personal-websites-weve-ever-seen">this article</a>, including
                    <a href="https://www.rhiannonnavin.com/"> Rhiannon Navin&apos;s site</a>,
                    <a href="https://www.orestisgeorgiou.com/"> Dr. Orestis Georgiou&apos;s site</a>, and
                    <a href="https://www.nathanielkoloc.com/"> Nathaniel Koloc&apos;s site</a>.
                </p>

                <p id="lessons-title" className="mb-3 text-2xl font-semibold text-[#0b3c5d]">Lessons Learnt</p>

                <div id="content-fourth-paragraph" className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr] md:items-start">
                    <div id="constructive-criticism" className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                        <img id="constructive-criticsm-img" className="w-full rounded" src="/images/projects/personal_website/constructive_criticsm.png" alt="Constructive criticism notes" loading="lazy" decoding="async" />
                        <div className="img-caption mt-2 text-sm text-slate-500">- Constructive criticism was very useful for my design process</div>
                    </div>
                    <p>
                        Through coding this website, I learned that constructive criticism is important for generating new ideas and inspiration.
                    </p>
                </div>

                <p id="content-fifth-paragraph" className="mb-4">
                    I have also gained the understanding that front-end development requires a strong eye for visuals and design.
                    I will continue to improve by studying current industry practices and building more projects.
                </p>
            </div>
        </main>
    );
}
