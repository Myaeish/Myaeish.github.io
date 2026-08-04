import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border mt-12 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright on the left */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mohammad Yaeish
        </p>

        {/* Back to Top Arrow on the right */}
        <a 
          href="#hero" 
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
};