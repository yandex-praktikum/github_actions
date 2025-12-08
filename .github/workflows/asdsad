# Простой workflow для развёртывания статического содержимого на GitHub Pages
name: Deploy static content to Pages
on:
  # Триггером выступает push в ветку master
  push:
    branches: ['master']
  # Позволяет запустить этот рабочий процесс вручную на вкладке Actions tab
  workflow_dispatch:
  
# Устанавливает права GITHUB_TOKEN, чтобы разрешить развёртывание на GitHub Pages
permissions:
  contents: read # Мы разрешаем читать контент из нашего репозитория
  pages: write # разрешаем перезаписывать github page
  id-token: write # Разрешаем использовать GITHUB_TOKEN

jobs: # Секция jobs определяет этапы процесса
 
  deploy:  # Создаётся одна задача deploy, имя может быть любым
    runs-on: ubuntu-latest # Определяет, в каком окружении будут запущены все команды этой задачи
    steps: # Перечень шагов, команд, которые будут выполнены в этом блоке
      - name: Checkout # Шаг для получения доступа к репозиторию
        uses: actions/checkout@v4 # Данный шаг использует готовый workflow actions/checkout@v4: он клонирует текущий коммит репозитория. Таким образом, раннеру становится доступен исходный код проекта
      - name: Set up Node # Шаг для указания используемой версии Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18 # Использовать будем 18-ю версию Node.js
          cache: 'npm'
      - name: Install dependencies # Шаг установки зависимостей
        run: npm ci # В ключе run хранится команда, которая будет выполнена в терминале окружения на раннере.
      - name: Build # Шаг сборки приложения
        run: npm run build # Команда для сборки приложения из вашего блока scripts
      - name: Setup Pages # Шаг конфигурации сборки 
        uses: actions/configure-pages@v4 # Используется готовый actions
      - name: Upload artifact # Загружаем артефакты
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist' # Путь до папки, где лежит сборка, в нашем случае Webpack собирает в папку dist, данные берутся из предыдущего шага Build
      - name: Deploy to GitHub Pages # Публикация артефактов на GitHub Pages с помощью готового actions
        uses: actions/deploy-pages@v4
