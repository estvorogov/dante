# Angel Cat: Hell Gate — landing prototype

## Как запустить локально

1. Установи Node.js LTS.
2. Открой папку проекта в VSCode.
3. В терминале выполни:

```bash
npm install
npm run dev
```

4. Открой адрес: http://127.0.0.1:5173

## Команды

```bash
npm run dev      # локальный запуск
npm run build    # сборка в папку dist
npm run preview  # просмотр production-сборки
```

## Архитектура

```text
game-landing/
├─ public/
│  ├─ preview-soft.jpeg
│  └─ preview-dark.jpeg
├─ src/
│  ├─ App.jsx
│  ├─ data/
│  │  └─ gameContent.js
│  └─ styles/
│     └─ global.css
├─ index.html
├─ package.json
└─ README.md
```

## Что просить Codex делать дальше

- Добавь блок `Gameplay` после Hero, пока с placeholder-текстом.
- Перенеси каждый блок из `App.jsx` в отдельный компонент в `src/components`.
- Добавь адаптивную секцию pre-registration с email-формой.
- Замени изображения в `public` на настоящие скриншоты игры.
- Добавь анимации появления карточек без тяжёлых библиотек.
- Подключи аналитику только после выбора домена и политики приватности.
