//user login system
const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <form method="POST">
                <input name="user" placeholder="Username"><br>
                <input name="pass" type="password" placeholder="Password"><br>
                <button>Login</button>
            </form>
        `);
    }else {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const data = querystring.parse(body);
            res.end(
                (data.user === "admin" && data.pass === "1234") ? "Login Successful ✅" : "Invalid ❌"
            );
        });
    }
}).listen(3000);








