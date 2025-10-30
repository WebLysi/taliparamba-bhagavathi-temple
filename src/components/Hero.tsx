import heroImage from "@/assets/temple-hero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

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
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center pt-20 sm:pt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-24 h-24 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl sm:text-4xl font-bold mb-8 shadow-divine animate-float">
            ॐ
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight px-4 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-lg md:text-xl text-muted-foreground font-medium px-4 animate-slide-up">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8 px-4">
            <button
              onClick={() => scrollToId("#timings")}
              className="px-10 py-5 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg sm:text-base rounded-lg font-semibold hover:shadow-divine transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
            >
              {t.hero.poojaTimings}
            </button>
            <button
              onClick={() => scrollToId("#vazhipaad")}
              className="px-10 py-5 sm:px-8 sm:py-4 bg-card text-foreground text-lg sm:text-base border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
            >
              {t.hero.vazhipaadDetails}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div> */}
    </section>
  );
};

export default Hero;
