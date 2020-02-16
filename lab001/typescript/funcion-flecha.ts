(function() {
    //funcion asignada a una variable
    let mifuncion = function(s: string) {
        return s;
    }
 
    //funcion tradicional
    function mifuncion2(s: string) {
     return s;
    }

    //funcion de flecha
    const funcion3 = (s: string) => s.toUpperCase();

    console.log(mifuncion('Normal'));
    console.log(funcion3('felcha'));

    //Ejercicio
    const sumarN = function(a:number, b:number) {
        return a+b;
    }

    const sumarF = (a:number, b:number) => a+b;

    console.log(sumarN(5, 3));
    console.log(sumarF(5, 3));

    const hulk = {
        nombre: 'Pepito',
        smash() {
            setTimeout(() =>  {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
            
        }
    }
    hulk.smash();
})();

