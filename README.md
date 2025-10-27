
# XtremePC Computer Store Website

This is a code bundle for XtremePC Computer Store Website. The original project is available at https://www.figma.com/design/PyRelXvHjfXHpAZyg0RfMX/XtremePC-Computer-Store-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Настройка отправки заявок (EmailJS)

Для работы формы заявок без бэкенда используется EmailJS. Вот как настроить:

### 1. Регистрация на EmailJS
- Зайдите на https://www.emailjs.com/
- Зарегистрируйтесь или войдите в аккаунт
- EmailJS бесплатный и позволяет отправлять до 200 писем в месяц

### 2. Настройка Email-сервиса
- В Dashboard перейдите в "Email Services"
- Нажмите "Add New Service"
- Выберите свой email-провайдер (Gmail, Outlook и т.д.)
- Следуйте инструкциям для подключения
- Сохраните полученный **Service ID**

### 3. Создание шаблона письма
- Перейдите в "Email Templates"
- Нажмите "Create New Template"
- Выберите свой сервис
- В Subject добавьте: `Новая заявка с сайта`
- В Body/alike добавьте:
  ```
  Имя: {{from_name}}
  Телефон: {{from_phone}}
  Товар: {{product_name}}
  
  Сообщение: {{message}}
  ```
- Сохраните шаблон и скопируйте **Template ID**

### 4. Получение Public Key
- Перейдите в "Account" → "General"
- Скопируйте **Public Key**

### 5. Настройка переменных окружения
Создайте файл `.env` в корне проекта:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Замените значения на полученные ID и ключи.

### 6. Использование без EmailJS
Если EmailJS не настроен, заявки автоматически сохраняются:
- В **localStorage** браузера (в браузере пользователя)
- В **консоли браузера** (для просмотра в DevTools)

Чтобы просмотреть сохраненные заявки, выполните в консоли браузера:
```javascript
console.log(JSON.parse(localStorage.getItem('orders')));
```

## Публикация на GitHub Pages

1. Соберите проект: `npm run build`
2. Настройте GitHub Pages в настройках репозитория
3. Укажите папку `dist` как источник
4. Ваш сайт будет доступен по адресу: `https://your-username.github.io/newtry/`

### Важно
- Не забывайте настроить EmailJS для получения заявок на email
- Либо периодически проверяйте localStorage в браузере посетителей (не рекомендуется для продакшн)
