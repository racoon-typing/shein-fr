function getData() {
    // ДАТА
    let date = new Date;

    // День
    let day = date.getDate();
    // Месяц
    let month = date.getMonth();
    // Год
    let year = date.getFullYear();

    // Сегодняшняя Дата
    let dataNode = document.querySelector('.data');

    // Проверка
    if (month < 10) {
        // Вывод на страницу
        let today = `${day}/0${month}/${year}`;
        dataNode.textContent = today;
    } else {
        // Вывод на страницу
        let today = `${day}/${month}/${year}`;
        dataNode.textContent = today;
    }
}

getData();

// Время с момента опубликования
let timeNode = document.querySelector(".time-elapsed");

var startDateTime = new Date(2022, 8, 21, 14, 0, 0, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
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