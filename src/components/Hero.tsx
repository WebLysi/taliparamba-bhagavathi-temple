import heroImage from "@/assets/temple-hero.webp";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { cf, t } = useLanguage();
  const topButtonsRef = useRef<HTMLDivElement>(null);
  const bottomButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<string>("100%");

  useEffect(() => {
    const updateButtonWidth = () => {
      if (topButtonsRef.current && bottomButtonRef.current && window.innerWidth >= 640) {
        const topButtonsWidth = topButtonsRef.current.offsetWidth;
        setButtonWidth(`${topButtonsWidth}px`);
      } else {
        setButtonWidth("100%");
      }
    };

    updateButtonWidth();
    window.addEventListener("resize", updateButtonWidth);
    return () => window.removeEventListener("resize", updateButtonWidth);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (!el) return;
    const navHeight = document.querySelector('nav')?.clientHeight ?? 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Temple Main View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center pt-16 sm:pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <img 
            src="/logo.png" 
            alt="Temple Logo" 
            className="hidden lg:inline w-24 h-24 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl sm:text-4xl font-bold mb-8 shadow-divine animate-float"
          />
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight px-4 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-lg md:text-xl font-bold text-foreground font-medium px-4 animate-slide-up">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 -mt-4 sm:mt-0 pt-0 sm:pt-1 px-4">
            <div ref={topButtonsRef} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
              <button
                onClick={() => scrollToId("#timings")}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base rounded-lg font-semibold hover:shadow-divine transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
              >
                {t.hero.poojaTimings}
              </button>
              <button
                onClick={() => scrollToId("#vazhipaad")}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-card text-foreground text-sm sm:text-base border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
              >
                {t.hero.vazhipaadDetails}
              </button>
            </div>
            <div className="w-full">
              <button
                ref={bottomButtonRef}
                onClick={() => scrollToId("#donation")}
                className="px-4 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-lg rounded-lg font-semibold hover:shadow-divine transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
                style={{ width: buttonWidth }}
              >
                {t.hero.donationButton}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div> */}
    </section>
  );
};

export default Hero;
