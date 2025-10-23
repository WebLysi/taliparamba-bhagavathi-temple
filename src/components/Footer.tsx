import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-10 sm:mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                ॐ
              </div>
              <h3 className="text-xl font-bold">Sri Maha Devi Temple</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
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
                  <p className="text-white/80 text-sm">+91 98765 43210</p>
                  <p className="text-white/80 text-sm">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">info@srimahadevitemple.org</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.location}</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                Temple Road, Thrissur District<br />
                Kerala - 680001<br />
                India
              </p>
            </div>
          </div>

          {/* Temple Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.templeHours}</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-white/80 text-sm">
                <p className="mb-2">
                  <span className="font-semibold">{t.footer.daily}</span><br />
                  5:00 AM - 9:00 PM
                </p>
                <p className="text-xs text-white/60">
                  {t.footer.closedDuring}<br />
                  12:00 PM - 4:00 PM
                </p>
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
