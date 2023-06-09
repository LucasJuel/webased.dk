const mysql = require('mysql')
const db = mysql.createConnection({
host: "webased",
user: "lucasjuel",
password: "LucasMojang00!",
database:"webased" 
})

module.exports = db;