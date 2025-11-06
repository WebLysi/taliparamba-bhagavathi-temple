import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { cf, t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-10 sm:mb-8">
          {/* About */}
          <div>
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
            <p className="text-white/80 text-sm leading-relaxed mt-1 ms-14">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">{cf.phone}</p>
                  <p className="text-white/80 text-sm">{cf.phone2}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">{cf.email}</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.location}</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                {t.footer.address.split('\n').map((paragraph: string, index: number) => (
                  <p
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
              </p>
            </div>
          </div>

          {/* Temple Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.templeHours}</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-white/80 text-sm">
                {t.timings.timing_list.map((item: { day: string; time: string[] }, index: number) => (
                  <div key={index} className="mb-3">
                    <p className="font-semibold mb-1">{item.day}:</p>
                    <div className="ml-4">
                      {item.time.map((timeStr: string, timeIndex: number) => (
                        <p key={timeIndex} className="mb-1">• {timeStr}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <p className="text-white/60 text-xs mt-2">
            {t.footer.preserving}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
