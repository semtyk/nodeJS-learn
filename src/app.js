// Для запуска сервера необходимо выполнить команду в терминале node src/app.js
// Для того, чтобы при внесении изменений не приходилось каждый раз перезапускать сервер,
// установим пакет nodemon. Для этого выполним команду:  npm install nodemon --save-dev
// или же команду: npm i nodemon -dev
// Теперь сервер можно запускать при помощи команды: nodemon src/app.js Но ее надо добавить в скрипты package.json

const http = require("http"); //Подключаем модуль HTTP
const getUsers = require("./modules/users"); //Модуль с пользовательской функцией для получения списка из файла

const server = http.createServer((request, response) => {
  //Параметр request храит информацию о запросе
  //    Основные методы:
  //    headers: возвращает заголовки запроса
  //    method: тип запроса (GET, POST, DELETE, PUT)
  //    url: представляет запрошенный адрес
  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();
    return;
  }

  //Параметр response управляет отправкой ответа
  // Основные методы:
  // statusCode: устанавливает статусный код ответа
  // statusMessage: устанавливает сообщение, отправляемое вместе со статусным кодом
  // setHeader(name, value): добавляет в ответ один заголовок
  // write: пишет в поток ответа некоторое содержимое
  // writeHead: добавляет в ответ статусный код и набор заголовков
  // end: сигнализирует серверу, что заголовки и тело ответа установлены, в итоге ответ отсылается клиента.
  //... Данный метод должен вызываться в каждом запросе.
  response.statusCode = 200;
  response.statusMessage = "OK";
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.write("Приветствую тебя на этом сервере, мой маленький друг!");
  response.end();
}); //При помощи метода createServer создаем (инитим) сервер

server.listen(3000, () => {
  console.log("Сервер запущен по адресу по адресу http://127.0.0.1:3000");
}); //При помощи метода listen запускаем сервер
