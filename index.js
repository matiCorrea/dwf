const pelis = require("./pelis");

function parsearARGV(text) {
  const resultado = {};
  text.forEach(function (item, indice) {
    if (item.startsWith("--")) {
      const sinGuiones = item.slice(2);
      resultado[sinGuiones] = text[indice + 1];
    }
    
  });
  return resultado;
}

function main() {
  const data = process.argv.slice(2);
  const commands = parsearARGV(data);
  const busqueda = pelis.searchByCriteria(commands);
  console.log(busqueda);
}

main();
