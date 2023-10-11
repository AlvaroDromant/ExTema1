

/* Creamos una funcion la cual nos permite calcular la diagonal, ancho y longitud de un rectangulo. Con el if else conseguimos que si el
usuario no rellena los campos le saldra un aviso*/
const calculate = () => {
    let long = document.getElementById('long').value;
    let ancho = document.getElementById('ancho').value;
    let perimetro = (long * 2) + (ancho * 2);
    let area = long * ancho;
    let diagonal = (Math.SQRT1_2(long + ancho));

    if (long === " " || ancho === " ") {
        document.getElementById('mensaje').innerHTML = 'Ingrese todos los valores';
    } else {
        document.getElementById('mensajep').innerHTML = 'El perimetro es: '+perimetro;
        document.getElementById('mensajea').innerHTML = 'El area es: '+area;
        document.getElementById('mensajed').innerHTML = 'El area es: '+diagonal;
    }
}