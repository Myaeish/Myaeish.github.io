import { cn } from '@/lib/utils'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    return (
        <nav className={cn(
            "fixed w-full top-0 left-0 z-[100] transition-all duration-300",
            // Solid background colors to prevent projects/text from bleeding through
            isScrolled ? "py-3 bg-white dark:bg-slate-950 shadow-md border-b border-black/5" : "py-5 bg-transparent"
        )}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a className="text-xl font-bold text-primary z-[120] relative" href="#hero">
                    <span className="text-foreground">Mohammad's</span> Portfolio
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="p-2 text-foreground z-[120] relative"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className={cn(
                    "fixed inset-0 bg-white dark:bg-slate-950 z-[110] flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
                )}>
                    <div className="flex flex-col space-y-10 text-3xl text-center font-bold">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground hover:text-primary transition-colors" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};