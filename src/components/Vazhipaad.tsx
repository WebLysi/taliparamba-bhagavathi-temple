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
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Vazhipaad = () => {
  const { t } = useLanguage();
  
  // use items from translation object (t.vazhipaad.items)
  const offerings = t?.vazhipaad?.items ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(offerings.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOfferings = offerings.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

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
                  <TableHead className="text-sm sm:text-xl font-bold text-foreground">{t.vazhipaad.name}</TableHead>
                  <TableHead className="text-sm sm:text-xl font-bold text-foreground text-right">{t.vazhipaad.price}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedOfferings.map((offering: any, index: number) => (
                  <TableRow 
                    key={startIndex + index}
                    className="hover:bg-primary/5 transition-colors duration-200"
                  >
                    <TableCell className="text-sm sm:text-lg font-semibold text-foreground">
                      {offering.name}
                    </TableCell>
                    <TableCell className="text-sm sm:text-lg font-bold text-primary text-right">
                      {offering.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Pagination Controls */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={goPrev} disabled={currentPage === 1}>
              Prev
            </Button>
            <div className="text-sm text-muted-foreground px-2">
              Page {currentPage} / {totalPages}
            </div>
            <Button variant="outline" size="sm" onClick={goNext} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
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
            {/* <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking2}</span>
            </p> */}
            <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking3}</span>
            </p>
            {/* <p className="flex items-start gap-4 sm:gap-3 text-lg sm:text-base">
              <span className="text-primary font-bold text-xl sm:text-base">•</span>
              <span>{t.vazhipaad.booking4}</span>
            </p> */}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Vazhipaad;
