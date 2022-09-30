let dataToday;

// Получаем объект дата
function getObjectOfData() {
    dataToday = {
        minut: '',
        hours: '',
        day: '',
        month: '',
        year: ''
    };

    // ДАТА
    let date = new Date;

    // Минуты
    dataToday.minut = date.getMinutes();
    // Часы
    dataToday.hours = date.getHours();
    // День
    dataToday.day = date.getDate();
    // Месяц
    dataToday.month = date.getMonth();
    // Год
    dataToday.year = date.getFullYear();
}

getObjectOfData();


// Вывод сегодняшней даты на страницу
function getData(day, month, year) {
    // Сегодняшняя Дата-Noda
    let dataNode = document.querySelector('.data');

    // Проверка
    if (month < 10) {
        // Вывод на страницу
        let today = `${day}/0${month + 1}/${year}`;
        dataNode.textContent = today;
    } else {
        // Вывод на страницу
        let today = `${day}/${month}/${year}`;
        dataNode.textContent = today;
    }
}

getData(dataToday.day, dataToday.month, dataToday.year);


// Вывод даты на 2 часа меньше страницу
function getDataForTimeElapsed(minut, hours, day, month, year) {
    let dayNode = document.querySelector('.day');
    let monthNode = document.querySelector('.month');
    let yearNode = document.querySelector('.year');
    let hourNode = document.querySelector('.hour');
    let minutNode = document.querySelector('.minut');


    // Вывод на страницу
    dayNode.textContent = day;
    yearNode.textContent = year;
    hourNode.textContent = hours - 2;
    minutNode.textContent = '00';

    // Месяц текстом
    let monthText;

    switch (month) {
        case 0:
            monthText = 'Janvier';
            break;
        case 1:
            monthText = 'Février';
            break;
        case 2:
            monthText = 'Mars';
            break;
        case 3:
            monthText = 'Avril';
            break;
        case 4:
            monthText = 'Peut';
            break;
        case 5:
            monthText = 'Juin';
            break;
        case 6:
            monthText = 'Juillet';
            break;
        case 7:
            monthText = 'Août';
            break;
        case 8:
            monthText = 'Septembre';
            break;
        case 9:
            monthText = 'Octobre';
            break;
        case 10:
            monthText = 'Novembre';
            break;
        case 11:
            monthText = 'Décembre';
            break;
        default:
            monthText = 'Erreur';
    }

    monthNode.textContent = monthText;
}

getDataForTimeElapsed(dataToday.minut, dataToday.hours, dataToday.day, dataToday.month, dataToday.year);


// Время с момента опубликования
let timeNode = document.querySelector(".time-elapsed");

// let date = new Date;

var startDateTime = new Date(2022, 8, 21, 14, 0, 0, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

// var newDate = new Date();
// var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    let newDate = new Date();
    let newStamp = newDate.getTime();
    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    // var s = diff;

    let timing = `${h}h${m}`;
    timeNode.textContent = timing;
}

timer = setInterval(updateClock, 1000);