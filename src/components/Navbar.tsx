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
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 sm:h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Temple Logo" 
              className="w-10 h-10 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-2xl sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <span className="hidden xl:inline">{t.hero.title}</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`hover:bg-transparent transition-all text-base px-3 py-2 ${
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

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="px-3 py-2 text-foreground hover:text-primary hover:bg-transparent border"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{language === "en" ? "ML" : "EN"}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`w-full justify-start hover:bg-transparent transition-all text-lg py-5 ${
                  activeSection === item.href 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground pl-5'
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
