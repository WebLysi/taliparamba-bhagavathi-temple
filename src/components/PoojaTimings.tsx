import { Clock, Sunrise, Sun, Sunset, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const PoojaTimings = () => {
  const { t } = useLanguage();
  
  const timings = [
    {
      icon: Sunrise,
      name: "Usha Pooja",
      time: "5:30 AM - 6:00 AM",
      description: "Morning awakening ceremony",
    },
    {
      icon: Sun,
      name: "Pantheeradi Pooja",
      time: "8:00 AM - 9:00 AM",
      description: "Mid-morning offerings",
    },
    {
      icon: Sun,
      name: "Uccha Pooja",
      time: "11:00 AM - 12:00 PM",
      description: "Noon ceremonial worship",
    },
    {
      icon: Sunset,
      name: "Deeparadhana",
      time: "6:00 PM - 7:00 PM",
      description: "Evening lamp ceremony",
    },
    {
      icon: Moon,
      name: "Athazha Pooja",
      time: "7:30 PM - 8:00 PM",
      description: "Night closing ceremony",
    },
  ];

  return (
    <section id="timings" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4">
            <Clock className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.timings.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.timings.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {timings.map((pooja, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20 hover:border-primary/40"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <pooja.icon className="w-10 h-10 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-xl font-bold text-foreground mb-2 sm:mb-1">
                    {pooja.name}
                  </h3>
                  <p className="text-muted-foreground text-lg sm:text-base">{pooja.description}</p>
                </div>

                <div className="w-full sm:w-auto sm:text-right flex-shrink-0 mt-2 sm:mt-0">
                  <div className="text-xl sm:text-lg font-bold text-primary">
                    {pooja.time}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Card className="p-6 sm:p-8 bg-primary/5 border-primary/30 mt-8">
            <div className="text-center space-y-3">
              <p className="text-foreground font-semibold text-lg sm:text-base">
                Temple Opening Hours: 5:00 AM - 9:00 PM
              </p>
              <p className="text-muted-foreground text-base sm:text-sm">
                Special poojas can be arranged with prior notice. Please contact the temple office.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PoojaTimings;
