import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const SpecialNote = () => {
  const { t } = useLanguage();

  return (
    <section id="special-note" className="py-16 sm:py-20 bg-gradient-to-br from-[hsl(var(--manuscript-bg))] to-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <AlertTriangle className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {t.specialNote.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">    
          <Card  className="p-6 sm:p-8 shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-soft">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">       
                <div className="flex-grow">
                  <ul className="text-sm sm:text-lg md:text-xl text-muted-foreground text-justify font-semibold text-lg sm:text-base list-disc pl-5 space-y-1">
                    <li>{t.specialNote.content}</li>
                    <li>{t.specialNote.discipline}</li>
                  </ul>
                </div>
              </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialNote;

