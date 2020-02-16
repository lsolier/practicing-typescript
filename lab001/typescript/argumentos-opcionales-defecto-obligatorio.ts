(function() {
    //parametros obligatorios, opcionales y los por defcto
    function activar(
        quien: string, 
        momento?: string,
        objeto: string = 'batisenial') {
            if (momento) {
                console.log(`${quien} activo la ${objeto} en el ${momento}`);
            } else {
                console.log(`${quien} activo la ${objeto}`);
            }
        
    }
    activar('Luis');
})();

