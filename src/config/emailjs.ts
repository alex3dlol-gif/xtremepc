// EmailJS configuration
// Получите свои ключи на https://www.emailjs.com/
// 
// Инструкция:
// 1. Зарегистрируйтесь на https://www.emailjs.com/
// 2. Создайте сервис (Gmail, Outlook и т.д.)
// 3. Создайте шаблон письма
// 4. Вставьте ключи ниже

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Функция для проверки конфигурации
export const isEmailjsConfigured = () => {
  return (
    emailjsConfig.serviceId !== 'your_service_id' &&
    emailjsConfig.templateId !== 'your_template_id' &&
    emailjsConfig.publicKey !== 'your_public_key'
  );
};

