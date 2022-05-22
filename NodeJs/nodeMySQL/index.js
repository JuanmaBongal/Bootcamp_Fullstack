const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");

//crear conexion a la base de datos de datos 
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "probandO+12",
    database: "notas",
});

function conectar() {
    //conectarse a la base de datos
    connection.connect(function (err) {
        if (err) {
            return console.error("error: " + err.message);
        }
        console.log("Desconectado")
    })
}




const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});