# Проектирование информационных систем
## Задание 5. Docker

## Docker установка
https://docs.docker.com/get-docker/

https://dker.ru/docs/ (рус)

## Node js установка
https://nodejs.org/en/download/

## Frontend установка

- Установите зависимости

`$ npm install`

## Docker настройка
- Загрузка образа 

`$ docker build -t pisnode .`

- Запуск проекта

`$ docker run -d -p 3000:3000  pisnode`

- Приложение запустится по адресу localhost:3000
