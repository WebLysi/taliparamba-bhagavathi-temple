import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import committeeImage from "@/assets/committee-group.svg";
import maathrisamithiImage from "@/assets/maathrisamithi-group.svg";
import { useLanguage } from "@/context/LanguageContext";

const Committee = () => {
  const { t } = useLanguage();
  
  const committeeMembers = [
    { name: "Name", position: t.committee.president },
    { name: "Name", position: t.committee.vicePresident },
    { name: "Name", position: t.committee.secretary },
    { name: "Name", position: t.committee.treasurer },
    { name: "Name", position: t.committee.jointSecretary },
    { name: "Name", position: t.committee.member },
    { name: "Name", position: t.committee.member },
    { name: "Name", position: t.committee.member },
  ];

  const maathrisamithiMembers = [
    { name: "Name", position: t.committee.president },
    { name: "Name", position: t.committee.vicePresident },
    { name: "Name", position: t.committee.secretary },
    { name: "Name", position: t.committee.treasurer },
    { name: "Name", position: t.committee.jointSecretary },
    { name: "Name", position: t.committee.member },
  ];

  return (
    <section id="committee" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4">
            <Users className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            {t.committee.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.committee.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Main Committee */}
          <Card className="overflow-hidden shadow-soft border-primary/20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
                {t.committee.managingCommittee}
              </h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="mb-8 sm:mb-10 rounded-lg overflow-hidden shadow-soft">
                <img
                  src={committeeImage}
                  alt="Temple Committee Group"
                  className="w-full object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {committeeMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-4 bg-muted/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <h4 className="font-bold text-foreground text-lg sm:text-base">{member.name}</h4>
                    <p className="text-base sm:text-sm text-muted-foreground">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Maathrisamithi */}
          <Card className="overflow-hidden shadow-soft border-primary/20">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
                {t.committee.maathrisamithi}
              </h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="mb-8 sm:mb-10 rounded-lg overflow-hidden shadow-soft">
                <img
                  src={maathrisamithiImage}
                  alt="Maathrisamithi Group"
                  className="w-full object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {maathrisamithiMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-4 bg-muted/50 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                  >
                    <h4 className="font-bold text-foreground text-lg sm:text-base">{member.name}</h4>
                    <p className="text-base sm:text-sm text-muted-foreground">{member.position}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-6 p-6 sm:p-5 bg-accent/5 rounded-lg border-l-4 border-accent">
                <p className="text-foreground/90 leading-relaxed text-lg sm:text-base">
                  {t.committee.maathrisamithiDesc}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Committee;
