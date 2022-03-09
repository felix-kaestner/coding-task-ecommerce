const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')
const path = require('path')

const migrations = fs.readdirSync(path.join(__dirname, 'migrations')).filter((file) => file.endsWith('.sql'))

const databasePath = path.join(__dirname, 'db.sqlite')
if(fs.existsSync(databasePath)) fs.unlinkSync(databasePath)
const database = new sqlite3.Database(databasePath)

database.serialize(function() {
    migrations.forEach((file) => {
        const sql = fs.readFileSync(path.join(__dirname, 'migrations', file)).toString()
        database.exec(sql)
        database.all('SELECT * FROM products', (_, rows) => {
            console.log(JSON.stringify(rows, null, 2))
        })
    })
})

database.close();