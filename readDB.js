var fs = require('fs')
var path = process.argv[2]
var array = '';

var items = fs.readdirSync(path)


for (var i = 0; i < items.length; i++) {
    let file = fs.readFileSync('./DB/' + items[i]);
    file = JSON.parse(file);
    file = JSON.stringify(file);
    file = file.slice(1, -1) + ',';
    array += file;
}

fs.writeFile('db.json', "{" + array.slice(0, -1) + "}");