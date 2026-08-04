import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleViewWork = (e) => {
        // Stop the click from traveling through to the background
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* The background stars are likely here. Make sure they have pointer-events: none */}
            
            <div className="container max-w-4xl mx-auto text-center relative z-50">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mohammad</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Yaeish</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        An aspiring Aerospace Engineer passionate about space robotics, autonomy, and intelligent aerospace systems.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <button 
                            // onPointerDown triggers immediately on touch
                            onPointerDown={handleViewWork}
                            className="cosmic-button active:scale-95 transition-transform inline-block relative z-50 cursor-pointer"
                            style={{ touchAction: 'manipulation' }}
                        >
                            View My Work
                        </button>
                    </div>
                </div>
            </div>

            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-500 z-10 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};