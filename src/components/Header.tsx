import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  onScrollToTop: () => void;
  isProductPage: boolean;
  onBackToHome: () => void;
  onOpenOrderModal: () => void;
}

export function Header({ onScrollToTop, isProductPage, onBackToHome, onOpenOrderModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => (isProductPage ? onBackToHome() : onScrollToTop())}
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="XtremePC" 
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {isProductPage ? (
              <button onClick={onBackToHome} className="transition-colors text-muted-foreground hover:text-foreground">Назад</button>
            ) : (
              <>
                <button onClick={onScrollToTop} className="transition-colors text-muted-foreground hover:text-foreground">Главная</button>
                <button onClick={() => scrollTo('catalog')} className="transition-colors text-muted-foreground hover:text-foreground">Каталог</button>
                <button onClick={() => scrollTo('about')} className="transition-colors text-muted-foreground hover:text-foreground">О нас</button>
                <button onClick={() => scrollTo('contacts')} className="transition-colors text-muted-foreground hover:text-foreground">Контакты</button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3 border-t border-border mt-4">
            {isProductPage ? (
              <button
                onClick={() => {
                  onBackToHome();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 transition-colors text-muted-foreground"
              >
                Назад
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    onScrollToTop();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2 transition-colors text-muted-foreground"
                >
                  Главная
                </button>
                <button
                  onClick={() => {
                    scrollTo('catalog');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2 transition-colors text-muted-foreground"
                >
                  Каталог
                </button>
                <button
                  onClick={() => {
                    scrollTo('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2 transition-colors text-muted-foreground"
                >
                  О нас
                </button>
                <button
                  onClick={() => {
                    scrollTo('contacts');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2 transition-colors text-muted-foreground"
                >
                  Контакты
                </button>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
