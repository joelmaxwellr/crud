const mysql = require("mysql")

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_nodejs_db"
})

conection.connect((error)=>{
    if (error) {
        console.log("El error de conexion es" + error)
    }
    console.log("Conectado a la DB MySQL!!")
})

module.exports = conection;