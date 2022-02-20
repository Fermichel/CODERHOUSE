/*
HOLA TUTORA E DEJO EL DESFIO DE LA CLASE NUMERO 3 ESPERO QUE ESTE TODO OK,
DE VERDAD ES ALGO NUEVO PARA MI, RECIEN TERMINE UN BIMESTRE DE LO QUE ES FRONTEND1, ASI QUE TODO ESTO ES NUEVO NUEVO JAJA,
SE LOS DEJO A LOS TRES CASOS EN EL MISMO ARCHIVO PARA QUE LO COMENTE Y LO PRUEBE.
 */

/* CLASE 03 ALGORITMO con for
1.pedir un numero
2.validar que sea un numero
3.definir un contador
4.definir contador con los numero negativos y positvivos
3.imprimir el nuemero*/

let numero= parseInt(prompt("Ingrese un numero"))

if (!isNaN (numero))
{
    if(numero>=0)
    {
        for (let i= 0; i<=numero; i=i+1)
    {
        console.log (i);
    }
    }
    else (numero<=0)
    {
        for (let i=numero; i<=0; i=i+1)
        {
            console.log (i);
        }
    }
}
else if (isNaN (numero))
{
    console.log ("Dato ingresado no es un numero")
}


/* CLASE 03 ALGORITMO con while
1.pedir al usuario su primer nombre
2.pedir al usuario su segundo nombre
2.pedir al usuario su apellido
4.Imprimir el nombre completo*/

let texto1= prompt("Ingrese su primer nombre");
let resultado1= texto1;
let texto2= prompt("Ingrese su segundo nombre");
let resultado2= texto2;
let union= " ";

while (union!= "ESC")
{
    union= prompt("Ingrese su Apellido");
    resultado= resultado1+" "+resultado2+" "+union;
    console.log (resultado);
}

/* CLASE 03 ALGORITMO
1.pedir al usuario numero
2.imprimir la palabra hola.*/


let numero=parseInt(prompt("Ingrese un nuemero"))

for (let i= 1; i<=numero; i=i+1)
    {
        alert ("hola");
    }
