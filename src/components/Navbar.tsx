import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.history, href: "#history" },
    { label: t.nav.management, href: "#management" },
    { label: t.nav.poojaTimings, href: "#timings" },
    { label: t.nav.vazhipaad, href: "#vazhipaad" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.committee, href: "#committee" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ml" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-16 md:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink">
            <img 
              src="/logo.png" 
              alt="Temple Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent truncate">
              <span className="hidden lg:inline">{t.hero.title}</span>
              <span className="lg:hidden hidden sm:inline">Taliparamba Temple</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`hover:bg-transparent transition-all text-sm xl:text-base px-2 xl:px-3 py-2 ${
                  activeSection === item.href 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground'
                }`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2 text-foreground hover:text-primary hover:bg-transparent px-2"
              title={language === "en" ? "Switch to Malayalam" : "Switch to English"}
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{language === "en" ? "ML" : "EN"}</span>
            </Button>
          </div>

          {/* Tablet/Mobile Menu Button and Language Toggle */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="px-2 sm:px-3 py-2 text-foreground hover:text-primary hover:bg-transparent border text-xs sm:text-sm"
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">{language === "en" ? "ML" : "EN"}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 border flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-7 sm:w-7" /> : <Menu className="h-5 w-5 sm:h-7 sm:w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`w-full justify-start hover:bg-transparent transition-all text-base sm:text-lg py-3 sm:py-5 ${
                  activeSection === item.href 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground pl-4 sm:pl-5'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
