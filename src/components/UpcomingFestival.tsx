import {
  CalendarDays,
  Clock,
  MapPin,
  ScrollText,
  Landmark,
  Users,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import posterEn from '@/assets/festival/sahasra-chandi-poster-en.jpeg';
import posterMl from '@/assets/festival/sahasra-chandi-poster-ml.jpg';

const LotusMark = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 44c-1.4-7.2 2.4-13.8 9-18 1.5-1 3.2.6 2.5 2.2C33.2 35.4 29.2 41 24 44z" />
    <path d="M24 44c1.4-7.2-2.4-13.8-9-18-1.5-1-3.2.6-2.5 2.2C14.8 35.4 18.8 41 24 44z" />
    <path d="M24 44c-4.2-6.2-4.4-13.6-1.3-20.4.7-1.5 2.9-1.5 3.6 0C29.4 30.4 29.2 37.8 24 44z" />
    <path d="M24 42c-6.6-9.6-15.6-13.6-22.8-14-1.6-.1-2.4 2-.9 2.8C11.4 35.6 18.2 39.4 24 42z" />
    <path d="M24 42c6.6-9.6 15.6-13.6 22.8-14 1.6-.1 2.4 2 .9 2.8C36.6 35.6 29.8 39.4 24 42z" />
    <ellipse cx="24" cy="20.5" rx="4" ry="5.5" />
  </svg>
);

const UpcomingFestival = () => {
  const { language, t } = useLanguage();
  const festival = t.festival;
  const poster = language === 'ml' ? posterMl : posterEn;

  return (
    <section
      id="upcoming-festival"
      className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 shadow-soft">
            <LotusMark className="w-8 h-8 text-white" />
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
            style={{ fontFamily: "Georgia, 'Noto Serif Malayalam', serif" }}
          >
            {festival.title}
          </h2>
          <LotusMark className="w-5 h-5 text-primary/80 mx-auto mt-3" />
        </div>

        <Card className="overflow-hidden border-primary/20 shadow-soft bg-card">
          <div
            className={`grid grid-cols-1 gap-0 ${language === 'ml' ? 'lg:grid-cols-[46%_54%]' : 'lg:grid-cols-2'}`}
          >
            <div
              className={`p-5 sm:p-8 lg:p-8 space-y-5 sm:space-y-5 ${language === 'ml' ? 'lg:[&_p]:text-[14px] lg:[&_li]:text-[14px] lg:[&_h3]:text-[18px] lg:[&_p]:leading-relaxed' : ''}`}
            >
              <div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {festival.organisedByLabel}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {festival.organisedBy}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {festival.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-primary/15 bg-muted/40 p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1.5">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide">
                      {festival.dateLabel}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">
                    {festival.date}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-muted/40 p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1.5">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide">
                      {festival.timeLabel}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">
                    {festival.time}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-muted/40 p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1.5">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide">
                      {festival.venueLabel}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">
                    {festival.venue}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="w-5 h-5 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {festival.scheduleTitle}
                  </h3>
                </div>
                <div className="rounded-xl border border-primary/15 overflow-hidden">
                  {festival.schedule.map((item, index) => (
                    <div
                      key={`${item.time}-${index}`}
                      className={`grid gap-3 px-3.5 py-2.5 text-sm sm:text-[15px] ${
                        language === 'ml'
                          ? 'grid-cols-[6.8rem_1fr] sm:grid-cols-[9.5rem_1fr]'
                          : 'grid-cols-[6.2rem_1fr] sm:grid-cols-[8.5rem_1fr]'
                      } ${index % 2 === 0 ? 'bg-muted/50' : 'bg-card'}`}
                    >
                      <span className="font-semibold text-primary">
                        {item.time}
                      </span>
                      <span className="text-foreground leading-snug">
                        {item.programme}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {festival.discourseTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {festival.acharyaLabel}
                  </span>
                  {' : '}
                  {festival.acharya}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {festival.participationTitle}
                  </h3>
                </div>
                <ul className="space-y-2.5 pl-1">
                  {festival.participation.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {festival.footerLabel}
                    </p>
                    <p className="text-base font-bold text-foreground">
                      {festival.footer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-8 lg:pl-4 flex items-start">
              <div className="w-full lg:sticky lg:top-28 self-start rounded-2xl overflow-hidden border border-primary/20 shadow-soft bg-muted/20">
                <img
                  src={poster}
                  alt={festival.posterAlt}
                  className={`block w-full h-auto ${
                    language === 'ml' ? 'lg:scale-y-[1.08] lg:origin-top' : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingFestival;
