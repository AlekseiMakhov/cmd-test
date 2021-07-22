# cmd-test

## Project info

Проект cmd-test - миниприложение с формой для вызова на дом врача.
Используется библиотека и компонент _vue-dadata_ для подсказки адреса,
при успешном заполнении формы генерируется номер записи по шаблону: 

Russia/RU-MOW/VDV/GLAT55.723171-GLON37.626942/2021-05-28, где:

Russia – страна, полученная из сервиса Dadata
RU-MOW – “region_iso_code” из сервиса Dadata
VDV – Аббревиатура ФИО на английском
GLAT55.723171 – “geo_lat” из сервиса Dadata
GLON37.626942 - “geo_lon” из сервиса Dadata,
2021-05-28 – дата записи

В случае некорректного заполнения полей выводятся ошибки валидации.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```