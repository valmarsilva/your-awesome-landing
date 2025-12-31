import { MapPin } from "lucide-react";

const areas = [
  { city: "Itajaí", badge: "Sede" },
  { city: "Balneário Camboriú", badge: null },
  { city: "Camboriú", badge: null },
  { city: "Brusque", badge: null },
  { city: "Blumenau", badge: null },
  { city: "Itapema", badge: null },
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider">
            Cobertura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Áreas de Atendimento
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Atendemos toda a região do Vale do Itajaí com rapidez e eficiência.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area.city}
              className="relative bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-6 text-center transition-colors group"
            >
              {area.badge && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                  {area.badge}
                </span>
              )}
              <MapPin className="w-8 h-8 mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="font-semibold">{area.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
