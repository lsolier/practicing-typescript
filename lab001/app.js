"use strict";
(function () {
    //parametros obligatorios, opcionales y los por defcto
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batisenial'; }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en el " + momento);
        }
        else {
            console.log(quien + " activo la " + objeto);
        }
    }
    activar('Luis');
})();
