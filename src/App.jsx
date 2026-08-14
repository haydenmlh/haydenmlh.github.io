import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import PersonalWebsitePage from "./pages/PersonalWebsitePage";

export default function App() {
    return (
        <SiteLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume.html" element={<ResumePage />} />
                <Route path="/projects.html" element={<ProjectsPage />} />
                <Route path="/contact.html" element={<ContactPage />} />
                <Route path="/projects/personal_website.html" element={<PersonalWebsitePage />} />
                <Route path="/resume" element={<Navigate to="/resume.html" replace />} />
                <Route path="/projects" element={<Navigate to="/projects.html" replace />} />
                <Route path="/contact" element={<Navigate to="/contact.html" replace />} />
                <Route path="/projects/personal_website" element={<Navigate to="/projects/personal_website.html" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </SiteLayout>
    );
}
