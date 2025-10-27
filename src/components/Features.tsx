import { Card } from "./ui/card";
import { Cpu, Zap, Award, Shield, Headphones, Truck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Cpu,
      title: "Топовые комплектующие",
      description: "Только новейшие процессоры и видеокарты от ведущих производителей Intel, AMD и NVIDIA"
    },
    {
      icon: Zap,
      title: "Максимальная производительность",
      description: "Профессиональная настройка, разгон и тестирование каждой системы в течение 72 часов"
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Гарантия 1 год + расширенная на 3 года и бесплатное обслуживание в авторизованном сервисном центре"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Использование только сертифицированных комплектующих с проверенной репутацией"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка и консультации наших специалистов"
    },
    {
      icon: Truck,
      title: "Бесплатная доставка",
      description: "Бесплатная доставка по всей России с гарантией сохранности и страхованием груза"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Почему выбирают 
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              XtremePC
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы не продаем готовые решения — мы создаем компьютеры под ваши задачи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
