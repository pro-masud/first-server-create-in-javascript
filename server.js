const http = require("http");

http.createServer((req, res) => {
    res.write("Hellow Here now")
    res.end();
}).listen(5050, () => {
    console.log(`Server Is Running On Post 5050`);
});