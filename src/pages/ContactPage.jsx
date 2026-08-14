import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useContentHeaderParallax from "../hooks/useContentHeaderParallax";

export default function ContactPage() {
    useDocumentTitle("Hayden Mak | Contact");
    useContentHeaderParallax(true);

    const [submitted, setSubmitted] = useState(false);

    return (
        <main id="content" className="w-full max-w-[1200px] bg-white pb-8">
            <div
                id="content-header-img"
                className="relative mb-5 min-h-[30vh] w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/page_headers/contact.jpg')" }}
            >
                <div id="content-header-img-description" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b3c5dd2] px-3 py-1 text-3xl text-white">Contact</div>
                <div id="content-header-img-credits" className="absolute bottom-0 right-0 m-0 bg-[#0b3c5dd2] px-2 py-1 text-xs text-white">
                    Photo by <a href="https://unsplash.com/@anete_lusina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anete Lusina</a> on <a href="https://unsplash.com/s/photos/laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>

            <div id="content-form" className="mx-auto w-full max-w-[1200px] px-4 pb-9 md:px-8">
                {submitted ? (
                    <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Your response has been processed.</p>
                ) : (
                    <form
                        name="gform"
                        id="gform"
                        className="mx-auto flex w-full max-w-[1140px] flex-col gap-4"
                        encType="text/plain"
                        action="https://docs.google.com/forms/d/e/1FAIpQLScba3recrtFr1aElcyWgxCTKg1cTX-JL414N2PJ7BeKwEGe8g/formResponse?"
                        target="hidden_iframe"
                        onSubmit={() => setSubmitted(true)}
                    >
                        <div id="content-form-name" className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div id="content-form-first-name" className="form-fieldlabel grid grid-cols-[82px_1fr] items-center gap-2">
                                <label htmlFor="entry.62324589" className="form-name first-label">First Name:</label>
                                <input className="h-[30px] border border-[#1d2731] px-2" type="text" name="entry.62324589" id="entry.62324589" required />
                            </div>
                            <div id="content-form-last-name" className="form-fieldlabel-2 grid grid-cols-[92px_1fr] items-center gap-2">
                                <label htmlFor="entry.1495869695" className="form-name second-label">Last Name:</label>
                                <input className="h-[30px] border border-[#1d2731] px-2" type="text" name="entry.1495869695" id="entry.1495869695" required />
                            </div>
                        </div>
                        <div id="content-form-email-and-category" className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div id="content-form-email" className="form-fieldlabel grid grid-cols-[82px_1fr] items-center gap-2">
                                <label htmlFor="entry.1113174291" className="form-email-category first-label">Email:</label>
                                <input className="h-[30px] border border-[#1d2731] px-2" type="email" name="entry.1113174291" id="entry.1113174291" required />
                            </div>
                            <div id="content-form-category" className="form-fieldlabel-2 grid grid-cols-[92px_1fr] items-center gap-2">
                                <label htmlFor="entry.383804575" className="form-email-category second-label">Category:</label>
                                <select className="h-[30px] border border-[#1d2731] px-2" name="entry.383804575" id="entry.383804575" required>
                                    <option value="General Enquiry">General Enquiry</option>
                                    <option value="Photography Enquiry">Photography Enquiry</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div id="content-form-message" className="flex w-full flex-col gap-2">
                            <label htmlFor="entry.955795602" className="first-label">Message:</label>
                            <textarea className="h-[250px] w-full border border-[#1d2731] p-2" name="entry.955795602" id="entry.955795602" required></textarea>
                        </div>
                        <input className="h-[32px] w-[90px] rounded border border-[#1d2731] bg-[#a1d9fc] text-[#1d2731] transition-colors hover:bg-[#7ecbf8]" type="submit" value="Submit" />
                    </form>
                )}

                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
            </div>
        </main>
    );
}
