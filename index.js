fetch('https://google.com').then((data) => {
    console.log('google', data.url);
})
fetch('https://yandex.ru').then((data) => {
    console.log('yandex', data.url);
})
fetch('https://mail.ru').then((data) => {
    console.log('mail', data.url);
})
fetch('https://sheets.googleapis.com/v4/spreadsheets/1eGSBqDonAaAhnbUzeDqikh7kqD0wKz2yvhcSKcS-5nA/values/Sheet!A1:A3?key=AIzaSyDfypDcbJpX42HJI9TYeUOPpLCYiVqWhz8').then((data) => {
    console.log('google sheets', data);
})