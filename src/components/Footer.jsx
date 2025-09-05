import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8">
      <div className="flex flex-col items-center gap-4">
        {/* Logo with dark/light mode */}
        <div className="flex items-center justify-center">
          {/* Light mode logo */}
          <img
            src="/portfolio/imgs/logo_black.png"
            alt="Daniel Callata Logo"
            className="h-40 w-auto dark:hidden"
          />
          {/* Dark mode logo */}
          <img
            src="/portfolio/imgs/logo_white.png"
            alt="Daniel Callata Logo"
            className="h-40 w-auto hidden dark:block"
          />
        </div>

        {/* Copyright text */}
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Daniel Callata - All rights reserved.
        </p>

        {/* Back to top button */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
