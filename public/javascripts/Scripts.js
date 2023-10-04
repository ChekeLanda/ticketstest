const fs = require("fs");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");
const filename ="Tickets.xlsx";

function leerexcel() {
    let worksheets = {};
const workbook = XLSX.readFile(filename);

for (const sheetName of workbook.SheetNames) {

  worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}
    return worksheets;
}

function leerhoja() {
    var leerh =leerexcel();
    return leerh.Hoja1;
}

function actualizarexcel(nticket,pid,nombre,correo,bum,incidente,causa,fecha,valido) {
    leerhoja.push({
        "Numero de ticket": nticket,
        "PID": pid,
        "Nombre": nombre,
        "Correo": correo,
        "Bum": bum,
        "Incidente": incidente,
        "Causa": causa,
        "Fecha": fecha,
        "Valido": valido
    });
    
}

module.exports.leerhoja=leerhoja;

