import { Card } from "@/components/ui/card";
import { Shield, User } from "lucide-react";
import thanthriImage from "@/assets/thanthri.jpg";
import rakshaadhikaariImage from "@/assets/rakshaadhikaari.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Management = () => {
  const { t } = useLanguage();
  
  return (
    <section id="management" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.management.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.management.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {/* Thanthri Section */}
          <Card className="overflow-hidden shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User className="w-8 h-8 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-3xl sm:text-2xl font-bold text-foreground">{t.management.thanthri}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 sm:space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden shadow-soft mb-6 sm:mb-4">
                <img
                  src={thanthriImage}
                  alt="Temple Thanthri"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3 sm:space-y-2">
                <h4 className="text-2xl sm:text-xl font-bold text-foreground">
                  Panicker Krishnan Namboodiri
                </h4>
                <p className="text-muted-foreground text-lg sm:text-base">Chief Tantri - Temple Head Priest</p>
                
                <div className="pt-4 space-y-3 sm:space-y-2 text-foreground/90">
                  <p className="leading-relaxed text-lg sm:text-base">
                    A revered scholar of Vedic traditions with over 40 years of experience in temple 
                    rituals and ceremonies. Maintains the sacred traditions passed down through 
                    generations of his family.
                  </p>
                  <p className="text-base sm:text-sm text-muted-foreground pt-3 sm:pt-2">
                    <span className="font-semibold">Lineage:</span> 18th generation Tantri
                  </p>
                  <p className="text-base sm:text-sm text-muted-foreground">
                    <span className="font-semibold">Specialization:</span> Vedic rituals, Tantric ceremonies
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Rakshaadhikaari Section */}
          <Card className="overflow-hidden shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Shield className="w-8 h-8 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-3xl sm:text-2xl font-bold text-foreground">{t.management.rakshaadhikaari}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 sm:space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden shadow-soft mb-6 sm:mb-4">
                <img
                  src={rakshaadhikaariImage}
                  alt="Temple Rakshaadhikaari"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3 sm:space-y-2">
                <h4 className="text-2xl sm:text-xl font-bold text-foreground">
                  Suresh Kumar Pillai
                </h4>
                <p className="text-muted-foreground text-lg sm:text-base">Temple Administrator & Guardian</p>
                
                <div className="pt-4 space-y-3 sm:space-y-2 text-foreground/90">
                  <p className="leading-relaxed text-lg sm:text-base">
                    Dedicated administrator overseeing daily temple operations, maintenance, and ensuring 
                    the smooth conduct of all religious ceremonies. Coordinates with devotees and manages 
                    temple resources with utmost care.
                  </p>
                  <p className="text-base sm:text-sm text-muted-foreground pt-3 sm:pt-2">
                    <span className="font-semibold">Experience:</span> 15 years in temple management
                  </p>
                  <p className="text-base sm:text-sm text-muted-foreground">
                    <span className="font-semibold">Contact:</span> Available at temple office daily
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Management;
