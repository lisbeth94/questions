# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_
- Inicialización de las variables: `characters` igual a la cadena entrante, `brackets` igual a una cadena con los corchetes a evaluar, `bracketsInCharacters` como un arreglo vacío, y `pile` como otro arreglo vacío.
- Se itera `characters` como un arreglo para comparar si contiene corchetes, de ser así los almacena en `bracketsInCharacters`.
- Se itera `bracketsInCharacters` en un ciclo for.
- Dentro del ciclo se inicializa una variable `bracketsIndex` la cual está buscando el índice del corchete actual en la variable de `corchetes` guardada previamente.
- Sabiendo que los corchetes de apertura tienen índices pares y los corchetes de cierre tienen índices impares se realiza la condición si `bracketsIndex` es par se agrega el `bracketsIndex + 1` a `pile` de lo contrario se elimina la adición más reciente en `pile`.
- Al finalizar el ciclo la `pile` debe quedar vacía.