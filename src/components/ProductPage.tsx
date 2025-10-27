import { Button as ShadcnButton } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ArrowLeft, Cpu, HardDrive, MemoryStick, Monitor, Zap, Box, ChevronLeft, ChevronRight, Truck, Phone, MessageSquare, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { computers, type Computer } from "../data/computers";
import { useState } from "react";
import { ReviewsSlider } from "./ReviewsSlider";

interface ProductPageProps {
  productId: number;
  onBackToHome: () => void;
  onOpenOrderModal: (productName?: string) => void;
}

export function ProductPage({ productId, onBackToHome, onOpenOrderModal }: ProductPageProps) {
  const product: Computer | undefined = computers.find(c => c.id === productId);
  const images = product?.images || [product?.image || ''];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!product) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <p>Продукт не найден</p>
          <ShadcnButton onClick={onBackToHome}>Вернуться в каталог</ShadcnButton>
        </div>
      </div>
    );
  }

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

  const specs = [
    { icon: Cpu, label: "Процессор", value: product.processor },
    { icon: Monitor, label: "Видеокарта", value: product.gpu },
    { icon: MemoryStick, label: "Оперативная память", value: product.ram },
    { icon: HardDrive, label: "Накопитель", value: product.storage },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <ShadcnButton 
          variant="ghost" 
          onClick={onBackToHome}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться к каталогу
        </ShadcnButton>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 group">
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageWithFallback
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {images.length > 1 && (
              <>
                <div 
                  onClick={prevImage}
                  style={{ 
                    position: 'absolute', 
                    left: '8px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    backgroundColor: 'rgba(0,0,0,0.3)', 
                    color: 'white', 
                    zIndex: 10, 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                >
                  <ChevronLeft className="h-6 w-6" />
                </div>
                <div 
                  onClick={nextImage}
                  style={{ 
                    position: 'absolute', 
                    right: '8px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    backgroundColor: 'rgba(0,0,0,0.3)', 
                    color: 'white', 
                    zIndex: 10, 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                >
                  <ChevronRight className="h-6 w-6" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            <Badge 
              variant="outline" 
              className={`absolute top-4 left-4 ${getCategoryColor(product.category)}`}
            >
              {product.category}
            </Badge>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-4xl mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg mb-4">
                Премиальная система, созданная для максимальной производительности и надежности
              </p>
              <div className="text-4xl text-primary">{formatPrice(product.price)}</div>
            </div>

            <Separator className="my-6" />

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-xl mb-4">Характеристики</h3>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <Card key={index} className="p-4 bg-card/50 border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <spec.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                        <div>{spec.value}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Additional Features */}
            <div className="mb-6">
              <h3 className="text-xl mb-4">Дополнительно</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Готов к работе</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Box className="h-4 w-4 text-primary" />
                  <span>Премиум упаковка</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span>Тестирование 72ч</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span>Гарантия 1 год + расширенная на 3 года</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Бесплатная доставка по России</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <ShadcnButton 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => onOpenOrderModal(product.name)}
              >
                <Phone className="h-5 w-5 mr-2" />
                Получить консультацию
              </ShadcnButton>
              <a
                href="https://api.whatsapp.com/message/LPMO7MFRPFWLH1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ShadcnButton 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Написать в WhatsApp
                </ShadcnButton>
              </a>
              <a
                href="https://t.me/xtrmpc"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ShadcnButton 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Написать в Telegram
                </ShadcnButton>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="mt-12">
          <ReviewsSlider />
        </div>

        {/* Description */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-2xl mb-4">Описание</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {product.name} — это воплощение мощности и элегантности. Этот компьютер создан для 
              тех, кто не идет на компромиссы и требует максимальной производительности во всем.
            </p>
            <p>
              Комплектующие подобраны с учетом идеального баланса производительности и энергоэффективности. 
              Каждая система проходит строгое тестирование в течение 72 часов под максимальной нагрузкой.
            </p>
            <p>
              В комплект входит гарантия 1 год с возможностью расширения до 3 лет, премиальная упаковка и полная 
              техническая поддержка наших специалистов.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
