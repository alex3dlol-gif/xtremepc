# Настройка EmailJS для GitHub Pages

## Проблема
EmailJS не работает на GitHub Pages, потому что переменные окружения (`.env` файл) не включены в публикацию из соображений безопасности.

## Решение: Настройка GitHub Secrets

### Шаг 1: Получите ключи EmailJS

Если у вас еще нет настроенного EmailJS:
1. Зарегистрируйтесь на https://www.emailjs.com/
2. Создайте сервис (Gmail, Outlook и т.д.)
3. Создайте шаблон письма
4. Получите Public Key

Подробнее смотрите в файле `EMAILJS_SETUP.md`

### Шаг 2: Добавьте Secrets в GitHub

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Добавьте следующие три секрета:

   **Secret 1:**
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: ваш Service ID (например: `service_abc123`)

   **Secret 2:**
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
   - Value: ваш Template ID (например: `template_xyz789`)

   **Secret 3:**
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
   - Value: ваш Public Key (например: `abcDEF123`)

### Шаг 3: Запустите деплой

После добавления secrets:

1. Перейдите в **Actions** на GitHub
2. Выберите workflow **"Build and Deploy to GitHub Pages"**
3. Нажмите **"Run workflow"** → **"Run workflow"**

Или просто сделайте коммит в ветку `main`:
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

### Шаг 4: Проверьте работу

1. Подождите 1-2 минуты пока закончится деплой
2. Откройте ваш сайт на GitHub Pages
3. Попробуйте отправить заявку через форму
4. Проверьте свой email - письмо должно прийти

## Автоматический деплой

После настройки, каждый коммит в ветку `main` будет автоматически:
1. Билдить проект с EmailJS ключами
2. Публиковать на GitHub Pages

## Проверка работы без EmailJS

Если EmailJS не настроен, заявки сохраняются в localStorage. 

Чтобы посмотреть заявки:
1. Откройте сайт
2. Нажмите F12 (Developer Tools)
3. В консоли введите:
```javascript
JSON.parse(localStorage.getItem('orders'))
```

## Альтернативное решение (не рекомендуется)

Если вы не хотите использовать GitHub Secrets, можно временно убрать `.env` из `.gitignore` и закоммитить файл. **НО ЭТО НЕБЕЗОПАСНО**, так как ключи будут публичными.

### Как это сделать:

1. Откройте `.gitignore`
2. Закомментируйте или удалите строку `.env`
3. Создайте `.env` файл:
```env
VITE_EMAILJS_SERVICE_ID=ваш_service_id
VITE_EMAILJS_TEMPLATE_ID=ваш_template_id
VITE_EMAILJS_PUBLIC_KEY=ваш_public_key
```
4. Закоммитьте его:
```bash
git add .env
git commit -m "Add .env file"
git push
```

⚠️ **ВНИМАНИЕ:** Это сделает ваши EmailJS ключи публичными! Используйте только для тестирования.
