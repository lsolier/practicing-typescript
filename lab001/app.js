"use strict";
(function () {
    //funcion asignada a una variable
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'droga'
    };
    //extraer las propiedades de un objeto
    var nombre = avenger.nombre;
    console.log(nombre);
    var extraer = function (avenger) {
        var poder = avenger.poder;
        console.log(poder);
    };
    extraer(avenger);
    var extraer2 = function (_a) {
        var clave = _a.clave;
        console.log(clave);
    };
    extraer2(avenger);
    //desestructurar un arreglo
    var avengers = ['Thor', 'Iroman', 'Spiderman'];
    console.log(avengers[0]);
    var rayo = avengers[0], hombre = avengers[1], arana = avengers[2];
    console.log(hombre);
    var extraerArr = function (avengers) {
        var nombre = avengers[0];
        console.log(nombre);
    };
    extraerArr(avengers);
    var extraerArr2 = function (_a) {
        var nombre = _a[0];
        console.log(nombre);
    };
    extraerArr2(avengers);
})();
