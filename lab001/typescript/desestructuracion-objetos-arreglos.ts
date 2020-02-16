(function() {
    //funcion asignada a una variable
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'droga'
    }

    //extraer las propiedades de un objeto
    const {nombre} = avenger;

    console.log(nombre);

    const extraer = (avenger:any) => {
        const {poder} = avenger;
        console.log(poder);
    }
    extraer(avenger);

    const extraer2 = ({clave}:any) => {
        console.log(clave);
    }
    extraer2(avenger);

    //desestructurar un arreglo
    const avengers:string[] = ['Thor', 'Iroman', 'Spiderman'];
    console.log(avengers[0]);
    const [rayo, hombre, arana] = avengers;
    console.log(hombre);

    const extraerArr = (avengers: string[]) => {
        const [nombre] = avengers;
        console.log(nombre);
    }
    extraerArr(avengers);
    const extraerArr2 = ([nombre]:string[]) => {
        console.log(nombre);
    }
    extraerArr2(avengers);
})();

