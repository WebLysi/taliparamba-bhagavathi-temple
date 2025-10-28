import { Building2 } from "lucide-react";
import architectureImage from "@/assets/temple-architecture-3d.svg";
import { useLanguage } from "@/context/LanguageContext";

const Architecture = () => {
  const { t } = useLanguage();
  
  return (
    <section id="architecture" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <Building2 className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.architecture.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.architecture.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-divine">
            <img
              src={architectureImage}
              alt="3D architectural rendering of temple future development plans"
              className="w-full h-auto"
            />
          </div>

          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl sm:text-xl font-bold text-card-foreground mb-4 sm:mb-3">
                {t.architecture.sanctumTitle}
              </h3>
              <p className="text-muted-foreground text-lg sm:text-base leading-relaxed">
                {t.architecture.sanctumDesc}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl sm:text-xl font-bold text-card-foreground mb-4 sm:mb-3">
                {t.architecture.culturalTitle}
              </h3>
              <p className="text-muted-foreground text-lg sm:text-base leading-relaxed">
                {t.architecture.culturalDesc}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl sm:text-xl font-bold text-card-foreground mb-4 sm:mb-3">
                {t.architecture.gardenTitle}
              </h3>
              <p className="text-muted-foreground text-lg sm:text-base leading-relaxed">
                {t.architecture.gardenDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
