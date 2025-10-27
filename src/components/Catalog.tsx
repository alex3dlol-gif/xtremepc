import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Cpu, Monitor, Server, HardDrive, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { computers, type Computer } from "../data/computers";

interface CatalogProps {
  onViewProduct: (id: number) => void;
}

export function Catalog({ onViewProduct }: CatalogProps) {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Игровой':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Рабочая станция':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Креативная':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Разработка':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Каталог
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              компьютеров
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите свою идеальную систему из премиальной коллекции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {computers.map((computer) => (
            <Card 
              key={computer.id}
              className="group overflow-hidden border-primary/20 bg-card hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <ImageWithFallback
                  src={computer.image}
                  alt={computer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge 
                  variant="outline" 
                  className={`absolute top-4 right-4 ${getCategoryColor(computer.category)} backdrop-blur-sm`}
                >
                  {computer.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {computer.name}
                </h3>

                {/* Specs */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Cpu className="h-4 w-4 text-primary" />
                    <span>{computer.processor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Monitor className="h-4 w-4 text-primary" />
                    <span>{computer.gpu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Server className="h-4 w-4 text-primary" />
                    <span>{computer.ram}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HardDrive className="h-4 w-4 text-primary" />
                    <span>{computer.storage}</span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-primary">
                    {formatPrice(computer.price)}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewProduct(computer.id)}
                    className="group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    Подробнее
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
