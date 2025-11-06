import { Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Calendar = () => {
  const { cf, t } = useLanguage();
  
  const event = t.calendar.event

  return (
    <section id="calendar" className="py-16 sm:py-20 bg-gradient-to-br from-[hsl(var(--manuscript-bg))] to-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <CalendarIcon className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--manuscript-text))] mb-4 px-4" style={{ fontFamily: 'Georgia, serif' }}>
            {t.calendar.title}
          </h2>
          <p className="text-xl sm:text-xl text-[hsl(var(--manuscript-accent))]" style={{ fontFamily: 'Georgia, serif' }}>{t.calendar.subtitle}</p>
        </div>

        <div className="mx-auto">
          <Card 
            className="p-6 sm:p-8 bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] border-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 relative overflow-hidden animate-slide-up"
            style={{ 
              backgroundImage: 'linear-gradient(to bottom, hsl(var(--manuscript-bg)), hsl(var(--manuscript-border))/10)'
            }}
          >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--manuscript-accent))] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-[hsl(var(--manuscript-accent))] to-transparent opacity-50"></div>
              
            <h3 
              className="text-lg sm:text-xl md:text-2xl font-bold text-[hsl(var(--manuscript-text))] mb-6 sm:mb-4 border-b-2 border-[hsl(var(--manuscript-border))] pb-2 text-center"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {event.months}
            </h3>
            <div className="space-y-4 sm:space-y-3">
              {event.events.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="border-l-4 border-[hsl(var(--manuscript-accent))] pl-4 py-2 bg-card/30 rounded-r hover:bg-card/50 transition-colors duration-200"
                >
                  <p className="text-base sm:text-sm font-semibold text-[hsl(var(--manuscript-text))]" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.date}
                  </p>
                  <p className="text-sm sm:text-lg font-bold text-[hsl(var(--manuscript-accent))]" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.name}
                  </p>
                  <p className="text-sm sm:text-base text-[hsl(var(--manuscript-text))]/80 mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card 
          className="mx-auto mt-12 p-6 sm:p-8 md:p-10 bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] border-4 shadow-divine animate-scale-in"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, hsl(var(--manuscript-bg)), hsl(var(--manuscript-border))/20)'
          }}
        >
          <p className="text-sm sm:text-base text-[hsl(var(--manuscript-text))] text-center leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="font-bold text-[hsl(var(--manuscript-accent))]">{t.calendar.note}</span> {t.calendar.noteText}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Calendar;
