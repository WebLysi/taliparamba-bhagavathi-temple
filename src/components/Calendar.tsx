import { Calendar as CalendarIcon, ZoomIn, ZoomOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Calendar = () => {
  const { t } = useLanguage();
  const [fontSize, setFontSize] = useState(100);

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 10, 140));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 10, 80));
  };
  const events = [
    {
      month: "January",
      events: [
        { date: "14", name: "Makara Sankranti", description: "Harvest festival celebration" },
      ],
    },
    {
      month: "February",
      events: [
        { date: "18", name: "Maha Shivaratri", description: "Grand night celebration of Lord Shiva" },
      ],
    },
    {
      month: "March",
      events: [
        { date: "25", name: "Holi Festival", description: "Festival of colors celebration" },
      ],
    },
    {
      month: "April",
      events: [
        { date: "6", name: "Vishu", description: "Kerala New Year celebration" },
        { date: "21", name: "Ram Navami", description: "Birth celebration of Lord Rama" },
      ],
    },
    {
      month: "August",
      events: [
        { date: "15", name: "Krishna Jayanthi", description: "Birth celebration of Lord Krishna" },
        { date: "30", name: "Onam Festival", description: "10-day harvest festival" },
      ],
    },
    {
      month: "September",
      events: [
        { date: "15-24", name: "Navaratri", description: "Nine nights of Goddess worship" },
      ],
    },
    {
      month: "October",
      events: [
        { date: "12", name: "Dussehra", description: "Victory of good over evil" },
        { date: "31", name: "Deepavali", description: "Festival of lights" },
      ],
    },
    {
      month: "November",
      events: [
        { date: "12", name: "Annual Utsavam", description: "Grand annual temple festival (7 days)" },
      ],
    },
  ];

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

        <div className="flex justify-center gap-3 mb-8">
          <Button
            onClick={decreaseFontSize}
            variant="outline"
            size="lg"
            className="bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] text-[hsl(var(--manuscript-text))] hover:bg-[hsl(var(--manuscript-accent))]/20"
          >
            <ZoomOut className="w-5 h-5 mr-2" />
            {t.calendar.smallerText}
          </Button>
          <Button
            onClick={increaseFontSize}
            variant="outline"
            size="lg"
            className="bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] text-[hsl(var(--manuscript-text))] hover:bg-[hsl(var(--manuscript-accent))]/20"
          >
            <ZoomIn className="w-5 h-5 mr-2" />
            {t.calendar.largerText}
          </Button>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          style={{ fontSize: `${fontSize}%` }}
        >
          {events.map((monthData, index) => (
            <Card 
              key={index} 
              className="p-6 sm:p-8 bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] border-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 relative overflow-hidden animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundImage: 'linear-gradient(to bottom, hsl(var(--manuscript-bg)), hsl(var(--manuscript-border))/10)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--manuscript-accent))] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-[hsl(var(--manuscript-accent))] to-transparent opacity-50"></div>
              
              <h3 
                className="text-2xl sm:text-2xl font-bold text-[hsl(var(--manuscript-text))] mb-6 sm:mb-4 border-b-2 border-[hsl(var(--manuscript-border))] pb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {monthData.month}
              </h3>
              <div className="space-y-4 sm:space-y-3">
                {monthData.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex} 
                    className="border-l-4 border-[hsl(var(--manuscript-accent))] pl-4 py-2 bg-card/30 rounded-r hover:bg-card/50 transition-colors duration-200"
                  >
                    <p className="text-lg sm:text-base font-semibold text-[hsl(var(--manuscript-text))]" style={{ fontFamily: 'Georgia, serif' }}>
                      {event.date}
                    </p>
                    <p className="text-xl sm:text-lg font-bold text-[hsl(var(--manuscript-accent))]" style={{ fontFamily: 'Georgia, serif' }}>
                      {event.name}
                    </p>
                    <p className="text-lg sm:text-base text-[hsl(var(--manuscript-text))]/80 mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card 
          className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 md:p-10 bg-[hsl(var(--manuscript-bg))] border-[hsl(var(--manuscript-border))] border-4 shadow-divine animate-scale-in"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, hsl(var(--manuscript-bg)), hsl(var(--manuscript-border))/20)'
          }}
        >
          <p className="text-lg sm:text-base text-[hsl(var(--manuscript-text))] text-center leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="font-bold text-[hsl(var(--manuscript-accent))]">{t.calendar.note}</span> {t.calendar.noteText}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Calendar;
