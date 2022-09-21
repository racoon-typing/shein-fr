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
