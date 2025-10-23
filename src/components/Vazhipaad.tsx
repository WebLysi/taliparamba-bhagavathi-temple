import { Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/LanguageContext";

const Vazhipaad = () => {
  const { t } = useLanguage();
  
  const offerings = [
    {
      name: t.vazhipaad.archana,
      time: t.vazhipaad.archanaTime,
      price: "₹51",
    },
    {
      name: t.vazhipaad.abhishekam,
      time: t.vazhipaad.abhishekamTime,
      price: "₹251",
    },
    {
      name: t.vazhipaad.sahasranamam,
      time: t.vazhipaad.sahasranamamTime,
      price: "₹151",
    },
    {
      name: t.vazhipaad.pushpanjali,
      time: t.vazhipaad.pushpanjaliTime,
      price: "₹101",
    },
    {
      name: t.vazhipaad.vilakku,
      time: t.vazhipaad.vilakkuTime,
      price: "₹71",
    },
    {
      name: t.vazhipaad.prasadam,
      time: t.vazhipaad.prasadamTime,
      price: "₹201",
    },
  ];

  return (
    <section id="vazhipaad" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <Gift className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.vazhipaad.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.vazhipaad.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 animate-slide-up">
          <Card className="overflow-hidden border-primary/30 shadow-divine">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/15 hover:to-secondary/15">
                  <TableHead className="text-lg sm:text-xl font-bold text-foreground">{t.vazhipaad.name}</TableHead>
                  <TableHead className="text-lg sm:text-xl font-bold text-foreground">{t.vazhipaad.time}</TableHead>
                  <TableHead className="text-lg sm:text-xl font-bold text-foreground text-right">{t.vazhipaad.price}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {offerings.map((offering, index) => (
                  <TableRow 
                    key={index}
                    className="hover:bg-primary/5 transition-colors duration-200"
                  >
                    <TableCell className="text-lg sm:text-xl font-semibold text-foreground">
                      {offering.name}
                    </TableCell>
                    <TableCell className="text-lg sm:text-base text-muted-foreground">
                      {offering.time}
                    </TableCell>
                    <TableCell className="text-lg sm:text-xl font-bold text-primary text-right">
                      {offering.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 shadow-soft animate-scale-in">
          <h3 className="text-2xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-4 text-center">
            {t.vazhipaad.bookingTitle}
          </h3>
          <div className="space-y-4 sm:space-y-3 text-foreground/90">
            <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking1}</span>
            </p>
            <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking2}</span>
            </p>
            <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking3}</span>
            </p>
            <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking4}</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Vazhipaad;
