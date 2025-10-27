import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Свяжитесь
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              с нами
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">

            <Card className="p-6 border-primary/20 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (933) 277-08-73
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@xtremepc.ru<br />
                    support@xtremepc.ru
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Telegram</h3>
                  <a 
                    href="https://t.me/xtrmpc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @xtrmpc
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 10:00 - 20:00<br />
                    Сб-Вс: 11:00 - 18:00
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <h3 className="text-2xl mb-2">Остались вопросы?</h3>
            <p className="text-muted-foreground mb-6">
              Напишите нам и получите ответ в течение 15 минут
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Ваше имя <span className="text-primary">*</span></label>
                <Input 
                  placeholder="Иван Иванов" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <Input 
                  type="email" 
                  placeholder="ivan@example.com" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Телефон <span className="text-primary">*</span></label>
                <Input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, чем мы можем помочь..."
                  rows={4}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Send className="h-4 w-4 mr-2" />
                Отправить сообщение
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Отправляя форму, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
