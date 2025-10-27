import { Card } from "./ui/card";
import { Shield, TrendingDown, Users2, Wrench } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl mb-4">Почему нам доверяют</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы работаем не как магазин, а как команда профессионалов, которая действительно заботится о результате
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl mb-2">Прямые цены</h4>
            <p className="text-sm text-muted-foreground">
              Работаем напрямую с поставщиками. Наценка только на сборку и тестирование
            </p>
          </Card>

          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-card to-accent/5">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-xl mb-2">Полная прозрачность</h4>
            <p className="text-sm text-muted-foreground">
              Показываем детальную смету на каждый компонент. Никаких скрытых платежей
            </p>
          </Card>

          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl mb-2">Сервис на годы</h4>
            <p className="text-sm text-muted-foreground">
              Не бросаем после продажи. Помогаем с любыми вопросами по вашему ПК
            </p>
          </Card>

          <Card className="p-6 text-center border-primary/20 bg-gradient-to-br from-card to-accent/5">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users2 className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-xl mb-2">Реальная экспертиза</h4>
            <p className="text-sm text-muted-foreground">
              Инженеры с 10+ годами опыта, а не продавцы-консультанты
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
            <p className="text-lg mb-2">
              <strong>Гарантия лучшей цены:</strong>
            </p>
            <p className="text-muted-foreground">
              Если найдете аналогичную конфигурацию дешевле — сделаем скидку и добавим апгрейд в подарок
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
