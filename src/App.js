import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";


export default function App() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ProjectsSection />
                <AboutMeSection />
            </main>
            <Footer />
        </>
    );

}