import { MessageCircle, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    description: "Respondemos todas tus consultas de forma directa",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Te contestamos en minutos por WhatsApp",
  },
  {
    icon: Heart,
    title: "Hecho con amor",
    description: "Productos artesanales de calidad premium",
  },
];

export const TrustBlock = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                              bg-primary/10 text-primary mb-5 
                              group-hover:bg-primary group-hover:text-primary-foreground 
                              transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
