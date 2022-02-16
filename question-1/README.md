# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquí el razonamiento al puzzle_
- De acuerdo con el enunciado se recurre a la sucesión de Fibonacci (cada término es la suma de los dos anteriores).
- Si `n` es igual a 0, 1 o 2. las maneras que hay de subir son 0, 1 o 2 respectivamente.
- Las variables `first = 1` y `seconds = 2`, servirán para sumar el número actual y continuar cambiándolo. 
- A partir del número 2 hasta `n`, podemos tener un ciclo for, dentro se inicia una nueva variable llamada `current` que almacenará la suma de `first` y `second`. De esta manera asignar `second` a `first` para que `second` sea igual a `current`.
- Al terminar de recorrer el ciclo retorna `second` como la cantidad de maneras de subir una escalera de si esta tiene `n` peldaños.