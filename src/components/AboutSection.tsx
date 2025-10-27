import { Card } from "./ui/card";
import { CheckCircle2, Users, Award, Wrench, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const achievements = [
    "Более 10 лет на рынке",
    "5000+ довольных клиентов",
    "Только оригинальные комплектующие",
    "Собственный сервисный центр",
    "Прямые поставки от производителей",
    "Гарантия лучшей цены"
  ];

  const advantages = [
    {
      icon: Users,
      title: "Команда профессионалов",
      description: "Сертифицированные инженеры с опытом работы более 10 лет"
    },
    {
      icon: ShieldCheck,
      title: "Без посредников",
      description: "Работаем напрямую с производителями — никаких наценок"
    },
    {
      icon: Wrench,
      title: "Полное сопровождение",
      description: "Помощь в выборе, сборке, настройке и обслуживании"
    },
    {
      icon: Award,
      title: "Прозрачное ценообразование",
      description: "Детальная смета на каждый компонент — платите только за железо"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Не магазин,
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                а мастерская
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <p>
                <strong className="text-foreground">XtremePC — это не очередная контора с накруткой цены.</strong> Мы мастерская профессионалов, 
                которые действительно разбираются в компьютерах и помогут решить любую задачу.
              </p>
              <p>
                Мы работаем напрямую с производителями и официальными дистрибьюторами. 
                <strong className="text-foreground"> Никаких посредников — никаких наценок.</strong> Вы платите только за комплектующие 
                и нашу экспертизу в их подборе.
              </p>
              <p>
                Каждая система собирается вручную нашими сертифицированными инженерами, 
                проходит 72-часовое стресс-тестирование и настраивается под ваши конкретные задачи.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </Card>
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-accent/10 to-primary/5 text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5000+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </Card>
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10 text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">100%</div>
              <div className="text-muted-foreground">Качество</div>
            </Card>
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-accent/5 to-primary/10 text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </Card>
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-16">
          <h3 className="text-3xl mb-8 text-center">Наши преимущества</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg mb-2">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
