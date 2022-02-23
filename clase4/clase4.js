/*
Algoritmo clase 04
1. pedir al usuario el precio con el que quiere calcular las cuotas
2. imprimir el valor ingresado en cuota 01
3. imprimir  el valor ingresado en cuota 03 con el 21% de recargo
4. imprimir el valo ingresado en cuota 06 con el 50% de recargo
*/

const precioReal= parseFloat (prompt("ingrese el valor a calcular"))

function cuotas (precioCalculado)
{
    console.log ("cuota en 01: ", precioCalculado);
    console.log ("cuota en 03: ", (precioCalculado*1.21))
    console.log ("cuota en 06: ", (precioCalculado*1.50))
}

cuotas(precioReal);