# Гайд по работе со сборкой

Для начала работы у вас должент быть установлен Node.js 18

## 🚀 Структура проекта

Внутри проекта вы увидете следующие папки и файлы:

```text
/
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   └── svg/
├── src/
│   ├── components/
│   │   ├── Container/
│   │   │   ├── Container.astro
│   │   │   └── Container.scss
│   │   └── ...
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.astro
│   │   │   └── Button.scss
│   │   └── ...
│   ├── layouts/
│   │   ├── root/
│   │   │   └── root.astro
│   │   ├── Main/
│   │   │   └── Main.astro
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sitemap.astro
│   ├── styles/
│   │   ├── components/
│   │   ├── global/
│   │   ├── vendors/
│   │   └── index.scss
│   ├── scripts/
│   │   ├── modules/
│   │   ├── utils/
│   │   └── index.js
│   └── images/
├── util/
└── package.json
```

## 🐱‍💻 Команды

Все команды запускаются из корня проекта:

| Command                               | Action                                                |
| :------------------------------------ | :---------------------------------------------------- |
| `npm install`                         | Установить зависимости                                |
| `npm run dev`                         | Запустить локальный дев сервер `localhost:4321`       |
| `npm run start`                       | Запустить сервер c IP адресом `localhost:IP`          |
| `npm run build`                       | Собрать билд для продакшна `./dist/`                  |
| `npm run preview`                     | Посмотреть билд локально перед деплоем                |
| `npm run astro -- --help`             | Получить помощь в использовании Astro CLI             |
| `npm run lint`                        | Запустить линтер с автоисправлениями                  |
| `npm run gen:component name`          | Создать компонент Astro по шаблону в папку components |
| `npm run gen:component name --ui`     | Создать ui компонент Astro по шаблону                 |
| `npm run gen:component name --layout` | Создать layout компонент Astro по шаблону             |
