//read & generate response
const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    const q = url.parse(req.url, true).query;

    const name = q.name;
    const age = q.age;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (name && age) {
        res.write(`<h2>Name: ${name}</h2>`);
        res.write(`<h2>Age: ${age}</h2>`);
    } else {
        res.write(`
            <form method="GET">
                Name: <input type="text" name="name"><br>
                Age: <input type="text" name="age"><br>
                <input type="submit" value="Submit">
            </form>
        `);
    }
    res.end();
}).listen(3000);





