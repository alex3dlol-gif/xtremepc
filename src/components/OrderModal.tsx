import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Phone, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailjsConfigured } from "../config/emailjs";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export function OrderModal({ open, onOpenChange, productName }: OrderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setIsSubmitting(true);

    try {
      // Проверяем конфигурацию EmailJS
      if (isEmailjsConfigured()) {
        // Отправляем через EmailJS
        const templateParams = {
          from_name: name,
          from_phone: phone,
          product_name: productName || 'Общая заявка',
          to_name: 'XtremePC',
          message: `Новая заявка от ${name}. Телефон: ${phone}. Товар: ${productName || 'Общая консультация'}`,
        };

        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        );

        toast.success("Заявка успешно отправлена!");
      } else {
        // Если EmailJS не настроен, сохраняем в localStorage и выводим в консоль
        const orderData = {
          name,
          phone,
          productName: productName || 'Общая заявка',
          timestamp: new Date().toISOString(),
        };

        // Сохраняем в localStorage
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        // Выводим в консоль для разработки
        console.log("Order submitted (EmailJS не настроен):", orderData);
        
        toast.success("Заявка сохранена локально!");
        toast.info("Настройте EmailJS для отправки на email. Проверьте консоль для просмотра заявок.");
      }

      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setName("");
        setPhone("");
        setIsSubmitted(false);
        onOpenChange(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error: any) {
      console.error("Ошибка отправки письма:", error);
      console.error("Код ошибки:", error?.code);
      console.error("Текст ошибки:", error?.text);
      toast.error("Произошла ошибка при отправке заявки");
      toast.error(error?.text || "Проверьте настройки EmailJS");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setIsSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Оставить заявку</DialogTitle>
              <DialogDescription>
                {productName ? (
                  <>Заполните форму и наш менеджер свяжется с вами для оформления заказа <span className="text-primary">{productName}</span></>
                ) : (
                  <>Заполните форму и наш менеджер свяжется с вами в ближайшее время</>
                )}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-input-background"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 bg-input-background"
                    required
                  />
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой конфиденциальности
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Отмена
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">
              Наш менеджер свяжется с вами в ближайшее время
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
