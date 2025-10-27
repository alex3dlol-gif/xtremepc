# Быстрая настройка EmailJS

## 1. Регистрация
Зайдите на https://www.emailjs.com/ и зарегистрируйтесь (бесплатно)

## 2. Настройка Email сервиса

1. В Dashboard нажмите **"Add New Service"**
2. Выберите **Gmail** (или другой email-провайдер)
3. Следуйте инструкциям для подключения
4. **Скопируйте Service ID** (например: `service_123abc`)

## 3. Создание шаблона письма

1. Перейдите в **"Email Templates"**
2. Нажмите **"Create New Template"**
3. Выберите ваш сервис
4. **Subject:** `Новая заявка с сайта XtremePC`
5. **Content** добавьте:
```
Имя: {{from_name}}
Телефон: {{from_phone}}
Товар: {{product_name}}

{{message}}
```
6. Сохраните и **скопируйте Template ID** (например: `template_456def`)

## 4. Получение Public Key

1. Перейдите в **Account → General**
2. **Скопируйте Public Key** (например: `abc123XYZ`)

## 5. Заполнение .env файла

Откройте файл `.env` в корне проекта и добавьте:

```env
VITE_EMAILJS_SERVICE_ID=ваш_service_id
VITE_EMAILJS_TEMPLATE_ID=ваш_template_id
VITE_EMAILJS_PUBLIC_KEY=ваш_public_key
```

**ВАЖНО:** Перезапустите dev сервер после изменения `.env` файла:
```
Остановите сервер (Ctrl+C) и запустите снова: npm run dev
```

## 6. Проверка работы

1. Откройте сайт: http://localhost:3000
2. Заполните форму заявки
3. Проверьте свой email - письмо должно прийти в течение минуты

## Просмотр заявок без EmailJS

Если EmailJS не настроен, заявки сохраняются в localStorage.

Чтобы их посмотреть:
1. Откройте Developer Tools (F12)
2. Перейдите в консоль
3. Введите:
```javascript
JSON.parse(localStorage.getItem('orders'))
```

Вы увидите все сохраненные заявки.

Чтобы очистить заявки:
```javascript
localStorage.removeItem('orders')
```

