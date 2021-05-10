const fs = require("fs");
const objetos = fs.readFileSync(__dirname + "/pelis.json");

const getAll = function (collection) {
  const resultado = JSON.parse(collection);
  return resultado;
};

const searchBy = function (texto, arrayDePelis) {
  const resultado = arrayDePelis.filter(function (objeto) {
    return objeto.title.toLowerCase().includes(texto);
  });
  return resultado;
};

const sortBy = function (propiedad, arrayDePelis) {
  return arrayDePelis.sort(function (item1, item2) {
    if (item1[propiedad] > item2[propiedad]) {
      return 1;
    }
    if (item1[propiedad] < item2[propiedad]) {
      return -1;
    }
    return 0;
  });
};

const filtrarTags = function (searchTags, collection) {
  return collection.filter(function (item) {
    return item.tags.includes(searchTags);
  });
};

const noFormat = function (collection) {
  const result = JSON.stringify(collection);
  return result;
};

exports.searchByCriteria = function busca(criterios) {
  var tmp = getAll(objetos);

  if (criterios.search) {
    tmp = searchBy(criterios.search, tmp);
  }
  if (criterios.sort) {
    tmp = sortBy(criterios.sort, tmp);
  }
  if (criterios.tags) {
    tmp = filtrarTags(criterios.tags, tmp);
  }
  if (criterios.hasOwnProperty("no-format")) {
    tmp = noFormat(tmp);
  }

  return tmp;
};
