import { BookOpen, ZoomIn, ZoomOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const History = () => {
  const [fontSize, setFontSize] = useState(1);
  const { t } = useLanguage();

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 0.2, 2));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 0.2, 0.8));
  };

  return (
    <section id="history" className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4">
            <BookOpen className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.history.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.history.subtitle}</p>
        </div>

        {/* Zoom Controls */}
        <div className="max-w-4xl mx-auto mb-6 flex justify-end gap-2">
          <Button
            onClick={decreaseFontSize}
            variant="outline"
            size="lg"
            className="gap-2"
            aria-label="Decrease text size"
          >
            <ZoomOut className="w-5 h-5" />
            <span className="hidden sm:inline">{t.history.zoomOut}</span>
          </Button>
          <Button
            onClick={increaseFontSize}
            variant="outline"
            size="lg"
            className="gap-2"
            aria-label="Increase text size"
          >
            <ZoomIn className="w-5 h-5" />
            <span className="hidden sm:inline">{t.history.zoomIn}</span>
          </Button>
        </div>

        {/* Palm-leaf manuscript style card */}
        <Card className="max-w-4xl mx-auto p-8 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: 'hsl(var(--manuscript-bg))',
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        >
          {/* Decorative borders */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-[hsl(var(--manuscript-border))] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-[hsl(var(--manuscript-border))] to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-b from-transparent via-[hsl(var(--manuscript-border))] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-b from-transparent via-[hsl(var(--manuscript-border))] to-transparent" />
          
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-[hsl(var(--manuscript-accent))]" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-[hsl(var(--manuscript-accent))]" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-[hsl(var(--manuscript-accent))]" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-[hsl(var(--manuscript-accent))]" />

          <div 
            className="relative z-10 space-y-6 sm:space-y-8 font-serif"
            style={{ fontSize: `${fontSize}em` }}
          >
            {/* Decorative header */}
            <div className="text-center pb-6 border-b-2 border-[hsl(var(--manuscript-accent))]">
              <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--manuscript-text))] mb-2">
                ॐ श्री महा देवी मन्दिर ॐ
              </div>
              <div className="text-sm text-[hsl(var(--manuscript-border))]">
                ✦ ✦ ✦
              </div>
            </div>

            <div className="text-[hsl(var(--manuscript-text))] leading-relaxed space-y-6">
              {t.history.content.split('\n\n').map((paragraph: string, index: number) => (
                <p 
                  key={index} 
                  className={`indent-8 ${index === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-[hsl(var(--manuscript-accent))] first-letter:mr-2 first-letter:float-left' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 p-6 sm:p-8 bg-[hsl(var(--manuscript-accent))]/10 rounded-lg border-2 border-[hsl(var(--manuscript-accent))] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--manuscript-bg))] px-4 text-[hsl(var(--manuscript-accent))] font-bold">
                ✦ Sacred Verse ✦
              </div>
              <p className="text-[hsl(var(--manuscript-text))] text-center font-medium italic pt-2">
                "Where the divine presence is felt in every breeze, where prayers echo through centuries, 
                where devotion finds its eternal home - this is our sacred Sri Maha Devi Temple."
              </p>
            </div>

            {/* Decorative footer */}
            <div className="text-center pt-6 border-t-2 border-[hsl(var(--manuscript-accent))]">
              <div className="text-sm text-[hsl(var(--manuscript-border))]">
                ✦ ✦ ✦
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default History;
