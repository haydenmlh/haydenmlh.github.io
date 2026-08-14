import useDocumentTitle from "../hooks/useDocumentTitle";
import useContentHeaderParallax from "../hooks/useContentHeaderParallax";

export default function ResumePage() {
    useDocumentTitle("Hayden Mak | Resume");
    useContentHeaderParallax(true);

    return (
        <main id="content" className="w-full max-w-[1200px] bg-white pb-8">
            <div
                id="content-header-img"
                className="relative mb-5 min-h-[30vh] w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/page_headers/about.jpg')" }}
            >
                <div id="content-header-img-description" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b3c5dd2] px-3 py-1 text-3xl text-white">Resume</div>
                <div id="content-header-img-credits" className="absolute bottom-0 right-0 m-0 bg-[#0b3c5dd2] px-2 py-1 text-xs text-white">
                    Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/note?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <div id="content-body" className="px-[2.5%]">
                <p className="mb-4 text-[16px] leading-7">
                    Hayden Mak is a recent HBSc Graduate from the University of Toronto majoring in Computer Science and Economics.
                    You can <a href="https://docs.google.com/gview?url=https://github.com/haydenmlh/haydenmlh.github.io/raw/main/res/Resume_Hayden_Mak_CS.pdf">download his resume</a> or view it below.
                </p>
                <iframe
                    id="about-resume"
                    className="h-[clamp(800px,calc(100vh-185px),2000px)] w-[96%] max-w-[1200px]"
                    title="Hayden Mak Resume PDF"
                    src="https://docs.google.com/gview?url=https://github.com/haydenmlh/haydenmlh.github.io/raw/main/res/Resume_Hayden_Mak_CS.pdf&embedded=true"
                    frameBorder="0"
                ></iframe>
            </div>
        </main>
    );
}
