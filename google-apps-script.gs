// Приём заявок с лендинга ANDROS в Google Таблицу.
// 1. Создайте Google Таблицу → Расширения → Apps Script → вставьте этот код.
// 2. Развернуть → Новое развертывание → тип «Веб-приложение»,
//    «Запуск от имени»: Я, «Кто имеет доступ»: Все.
// 3. Скопируйте URL веб-приложения и вставьте его в index.html в строку var LEAD_ENDPOINT='...';

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Дата', 'Тип бизнеса', 'Город', 'Продукт', 'Объём в месяц', 'Имя', 'Телефон']);
  }
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), d.type, d.city, d.product, d.volume, d.name, d.phone]);
  return ContentService.createTextOutput('ok');
}
