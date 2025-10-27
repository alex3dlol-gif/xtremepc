import { useState, useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Catalog } from "./components/Catalog";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ProductPage } from "./components/ProductPage";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { TrustSection } from "./components/TrustSection";
import { OrderModal } from "./components/OrderModal";
import { Toaster } from "./components/ui/sonner";
import { ReviewsSlider } from "./components/ReviewsSlider";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState<string | undefined>(undefined);
  const topRef = useRef<HTMLDivElement>(null);

  const handleViewProduct = (id: number) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenOrderModal = (productName?: string) => {
    setSelectedProductName(productName);
    setOrderModalOpen(true);
  };

  const isProductPage = selectedProductId !== null;

  return (
    <div className="min-h-screen bg-background" ref={topRef}>
      <Header 
        onScrollToTop={handleScrollToTop}
        isProductPage={isProductPage}
        onBackToHome={handleBackToHome}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />
      
      {isProductPage ? (
        <ProductPage 
          productId={selectedProductId} 
          onBackToHome={handleBackToHome}
          onOpenOrderModal={handleOpenOrderModal}
        />
      ) : (
        <>
          <Hero 
            onScrollToCatalog={handleScrollToCatalog}
            onOpenOrderModal={() => handleOpenOrderModal()}
          />
          <Features />
          <TrustSection />
          <Catalog onViewProduct={handleViewProduct} />
          <ConsultationCTA onOpenOrderModal={() => handleOpenOrderModal()} />
          <AboutSection />
          <ContactSection />
        </>
      )}

      <OrderModal 
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
        productName={selectedProductName}
      />
      <Toaster />

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src="/logo.png" 
                  alt="XtremePC" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground max-w-md">
                Премиальные компьютерные системы для профессионалов. 
                Мощность без компромиссов.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Навигация</h4>
              <div className="space-y-2 text-muted-foreground">
                <button 
                  onClick={handleScrollToTop}
                  className="block hover:text-primary transition-colors"
                >
                  Главная
                </button>
                <button 
                  onClick={handleScrollToCatalog}
                  className="block hover:text-primary transition-colors"
                >
                  Каталог
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block hover:text-primary transition-colors"
                >
                  О нас
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contacts');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block hover:text-primary transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>+7 (933) 277-08-73</p>
                <p>info@xtremepc.ru</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  © 2025 XtremePC. Все права защищены.
                </span>
                {/* Avito Rating */}
                <a 
                  href="https://www.avito.ru/brands/i28933571" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#00A4D6] to-[#0085C3] rounded-2xl border border-white/20 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold text-lg">Avito</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-2xl leading-none">5</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col text-white text-xs leading-tight">
                    <span>Рейтинг компании</span>
                    <span>на основании 96 отзывов</span>
                  </div>
                </a>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <button className="hover:text-primary transition-colors">
                  Политика конфиденциальности
                </button>
                <button className="hover:text-primary transition-colors">
                  Условия использования
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
