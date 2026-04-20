//files
const fs = require('fs');
fs.writeFile('nag.txt', 'hello nagaraju', (err) => {
    if (err) throw err;
    console.log("File written");

    fs.appendFile('nag.txt', '\nNew Line Added', (err) => {
        if (err) throw err;

        fs.readFile('nag.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);

            fs.rename('nag.txt', 'newnag.txt', (err) => {
                if (err) throw err;
                
                fs.unlink('newnag.txt', (err) => {
                    if (err) throw err;
                    console.log("All operations done");
                });
            });
        });
    });
});