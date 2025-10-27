import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";

interface ConsultationCTAProps {
  onOpenOrderModal?: () => void;
}

export function ConsultationCTA({ onOpenOrderModal }: ConsultationCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden p-12 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6">
              Не знаете, какой компьютер выбрать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Наши эксперты помогут подобрать идеальную конфигурацию под ваши задачи и бюджет. 
              Бесплатная консультация без навязывания услуг.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={onOpenOrderModal}
              >
                <Phone className="h-5 w-5 mr-2" />
                Получить консультацию
              </Button>
              <a
                href="https://api.whatsapp.com/message/LPMO7MFRPFWLH1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Написать в WhatsApp
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
                <div className="text-3xl mb-2 text-primary">01</div>
                <h4 className="mb-2">Анализ задач</h4>
                <p className="text-sm text-muted-foreground">
                  Выясняем ваши потребности и цели использования компьютера
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
                <div className="text-3xl mb-2 text-primary">02</div>
                <h4 className="mb-2">Подбор конфигурации</h4>
                <p className="text-sm text-muted-foreground">
                  Составляем оптимальную сборку с учетом бюджета
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
                <div className="text-3xl mb-2 text-primary">03</div>
                <h4 className="mb-2">Сборка и доставка</h4>
                <p className="text-sm text-muted-foreground">
                  Собираем, тестируем и бесплатно доставляем готовый компьютер по России
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
