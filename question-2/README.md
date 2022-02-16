# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_
- Se instalaron las librerías `csv-parser` para leer el archivo y `csv-writer` para generar el archivo `output.csv`.
- Se inicializan las constantes `result` para procesar los datos extraídos del archivo .csv y `csvWriter` para crear el nuevo archivo generado (paths y headers)
- En la función `fs.createReadStream(args.toString())` se leen y transforman los datos del .csv a json. asignando como argumento el nombre del archivo con los datos de los eventos `(BrowsingEvents.csv)`, al iterar estos datos son agregados al arreglo `result`.
- Se inicializa la constante `uniqueProducts` donde se extraen los `entityId` de cada registro cuyo `entityType` sea igual a `product` y un arreglo vacío llamado `data`, donde se asignan los datos del nuevo archivo a generar.
- Se itera `uniqueProducts` con un `forEach`, dentro de este ciclo se inicializan las variables `visitsPerProduct` y `clicksPerProduct` como arreglos vacíos y se itera `result` con un `forEach`. - Para obtener los clicks por producto se creó un condicional para comparar si son iguales el id del producto con el `entityId` de cada registro en `result` y si `eventType` es igual a `click`, de ser así se guarda el user de ese registro al arreglo de `clicksPerProduct`.
- Para obtener las visitas por producto se creó un condicional para comparar si son iguales el id del producto con el `entityId` de cada registro en `result` y si `eventType` es igual a `impression`, de ser así se guarda el user de ese registro al arreglo de `visitsPerProduct`.
- Se crea una nueva variable `uniqueClicksPerProduct` para asignar la cantidad de registros únicos en `clicksPerProduct` y otra variable `uniqueVisitsPerProduct` para asignar la cantidad de registros únicos en `visitsPerProduct`.
- Para calcular la métrica `CTR` del producto, se obtiene dividiendo el número de clics que ha obtenido un enlace (`clicksPerProduct`) entre el número de veces que este ha sido visto por los usuarios (`visitsPerProduct`) multiplicado por 100.
- Finalmente en esta iteración se agrega un objeto con `productId, clicks, impressions, ctr` al array `data` - Al terminar de iterar todo el arreglo de `uniqueProducts` se mapea `data` en `csvWriter.writeRecords()` para generar el archivo output.csv
