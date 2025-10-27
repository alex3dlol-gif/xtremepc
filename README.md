# XtremePC - Магазин Компьютеров

Веб-сайт магазина компьютеров и компонентов, построенный с использованием React, TypeScript и Vite.

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev
```

### Сборка для production

```bash
npm run build
```

### Публикация на GitHub Pages

```bash
npm run deploy
```

Или вручную:
```bash
npm run build
npx gh-pages -d dist
```

## 📋 Настройка GitHub Pages

1. Убедитесь, что репозиторий называется правильно (например, `xtremepc`)
2. В настройках репозитория (Settings → Pages) выберите источник: ветку `gh-pages`, папка `/ (root)`
3. Проект будет доступен по адресу: `https://yourusername.github.io/xtremepc/`

## 🔧 Конфигурация

Проект настроен для работы с подпутем `/xtremepc/` в `vite.config.ts`:

```typescript
base: '/xtremepc/',
```

Если репозиторий имеет другое название или должен быть в корне, измените эту настройку.

## 📦 Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- EmailJS (для форм обратной связи)

## 📝 Особенности

- Адаптивный дизайн
- Каталог компьютеров с фильтрацией
- Форма заказа консультации
- Интеграция с EmailJS
- Темная/светлая тема
- Отзывы клиентов

## 📧 Настройка EmailJS для GitHub Pages

EmailJS не работает на GitHub Pages из-за отсутствия переменных окружения. 

**📖 Подробная инструкция:** См. файл `EMAILJS_SETUP_GITHUB.md`

**Краткая версия:**
1. Получите ключи EmailJS на https://www.emailjs.com/
2. Добавьте их в GitHub Secrets (Settings → Secrets → Actions)
3. Запустите деплой заново

Для локальной разработки создайте файл `.env` с ключами (см. `EMAILJS_SETUP.md`).
