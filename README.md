# Proyecto-IV-Lenguajes

**Instituto Tecnológico de Costa Rica - Ingeniería en Computación**

**Lenguajes de Programación - Semestre II 2020**

**Profesor: Allan Rodríguez Dávila**

## Documentación del proyecto

### Manual de Usuario <img src= https://raw.githubusercontent.com/fabiospampinato/vscode-terminals/master/resources/logo.png width =20 height=20>

Este proyecto fue desarollado con el [Creador de Aplicaciones de React](https://github.com/facebook/create-react-app).

En el directorio del proyecto puede correr:

#### `npm start`

Para correr la aplicacion en modo desarollo.\
Abrir [http://localhost:3000](http://localhost:3000) y verlo en el navegador.


Si se desea lanzar el servidor utilizar:
#### `npm run dev`

Una vez que el programa se esté ejecutando verá la siguiente página, la cual sería la página principal.

<img src= /capturas_funcionalidad/menu_principal.PNG width=1000>

**Imagen 01. Menú principal**

Esta sería la página principal del juego, aquí el jugador puede irse a las opciones de crear partida, unirse a juego y ver ranking, para jugar una partida debemos ir a la opción de crear partida.

<img src= /capturas_funcionalidad/crear_partida.PNG width=1000>

**Imagen 02. Crear partida**

En esta pestaña el jugador puede crear una partida, puede seleccionar la cantidad de vueltas necesarias para jugar y la pista, para que otra persona entre a jugar con el debe ingresar a esta misma página y seleccionar las mismas vueltas y pista.

<img src= /capturas_funcionalidad/comenzar_juego.PNG width=1000>

**Imagen 03. Comenzar juego**

Después de crear la partida se debe seleccionar esta opción para cargar la pista y los carros.

<img src= /capturas_funcionalidad/pista3.PNG width=500>

**Imagen 04. Pista para jugar**

Al darle a comenzar juego se pondrá la pista seleccionada, en ella un carro se mueve con las teclas WASD y el otro con el teclado numérico con las teclas 8456, hay que dar las vueltas en sentido contrario a las manecillas del reloj, y ganará el primero que complete la cantidad de vueltas seleccionadas en el menú de crear partida.

### Pruebas de funcionalidad <img src= https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg width=20 height=20>

<img src= /capturas_funcionalidad/menu_principal.PNG width=1000>

**Imagen 05. Menú principal**

Esta sería la página principal del juego, aquí el jugador puede irse a las opciones de crear partida, unirse a juego y ver ranking.


<img src= /capturas_funcionalidad/crear_partida.PNG width=1000>

**Imagen 06. Crear partida**

En esta página el jugador puede crear una partida con los parámetros de cantidad de vueltas y una pista.

<img src= /capturas_funcionalidad/pista1.PNG width=500>

**Imagen 07. Pista 1**

<img src= /capturas_funcionalidad/pista2.PNG width=500>

**Imagen 08. Pista 2**

<img src= /capturas_funcionalidad/pista3.PNG width=500>

**Imagen 09. Pista 3**

Estas tres serían las pistas que se pueden jugar, un carro se mueve con las teclas WASD y el otro con el teclado numérico 8456.

### Descripción del problema <img src= https://images.uncyclomedia.co/uncyclopedia/en/0/01/DramaticQuestionMark.png width =20 height=20>

Se requiere una investigación acerca de las funcionalidades detalladas de los juegos de carreras\
ya que lo que se desea es reproducir el comportamiento del mismo.

#### Cliente
Se debe desarrollar la funcionalidad en la aplicación del cliente en la cual el usuario pueda elegir
entre tres opciones:

**a) Crear partida**\
**b) Unirse a Juego**\
**c) Ver ranking**


**Crear partida**\
Debe desarrollar la funcionalidad para generar un nuevo juego, donde el usuario podrá
personalizar el juego por medio de las siguientes opciones:

* a) Seleccionar el tipo de juego
* b) Seleccionar pista
* c) Una vez creado se generará un código identificador de partida.


**Unirse a juego**\
Los usuarios tendrán la funcionalidad unirse a una partida:
se le muestra los usuarios la lista de partidas por iniciar con su información: el área de juego, la
pista, el recorrido según la temática, y los usuarios unidos.

**Juego**\
El área de juego debe disponer de un área para poder jugar o correr, donde inicialmente se muestran los vehículos (al inicio de la pista) y el usuario pueda ir moviéndolas a un espacio válido.

**Pistas predefinidas**\
El sistema debe tener al menos tres pistas de juego, con un nombre de la pista y una temática.

**Estadísticas por juego**\
Por cada juego se debe indicar lo siguiente:
* a) Nombre de jugadores y su tiempo, ordenado ascendentemente
* b) Pista
* c) Identificador de partida

**Ranking**\
Se debe mostrar información de los ganadores de cada partida. Por cada juego se debe mostrar la
siguiente información:
* a) Nombre del ganador
* b) Tiempo
* c) Pista
* d) Vueltas
* e) Identificador de partida


### Diseño del programa <img src=https://cdn2.iconfinder.com/data/icons/creative-and-design-12/64/Creative-Development-idea-research-design-512.png width=20 height=20>
Para el desarrollo de este proyecto se optó por utilizar React junto con Javascript, y para el servidor se utilizó nodeJS con Express, se tomó esta decisión porque fue la que vimos que se adaptaba mejor al proyecto, además de que otros frameworks tenían una curva de aprendizaje mayor.


### Librerías usadas <img src=https://image.flaticon.com/icons/png/512/130/130304.png width=20 height=20>

|Nombre|Función|
|-|-|
|Axios|Dependencia de Express para el servidor|
|||

### Análisis de resultados
- Menu principal del cliente: Logrado
- Crear partida: el jugador puede crear una partida escogiendo la cantidad de vueltas y un mapa.
- Pistas predefinidas: se cuentan con las 3 pistas, las tres de 25x25 con obstáculos y el punto de llegada y partida son los mismos, pero le faltan las sorpresas.
- Juego: Permite mover a un carrito en la pista, sin embargo el movimiento no es constante y con shift, si no que se debe presionar las teclas WASD para el carro 1, o las teclas numéricas 8456 para el carro 2, el movimiento del carro no es continuo, cada vez que se presiona una tecla el carro se mueve un espacio. El vehículo si se termina de mover si choca con un obstáculo, sin embargo debido a que el carro se mueve al presionar las teclas, no existe un archivo de configuración que indique cuantos espacios se movería por segundo. Si un vehículo atraviesa la meta las veces que el usuario haya puesto de vueltas ganará.
- Unirse a juego: el jugador puede unirse a una partida, sin embargo esta no es por código, si no que es la misma para cualquier persona que ingrese a la página a jugar, y un problema es que cualquier persona puede ingresar a mover el carro que quiera.
- Estadísticas por juego: No logrado
- Ranking: No logrado

### Bitácora

La bitácora de los commits se encuentran dentro en la ruta `docs/` en la cual se ve un detalle de cada avance.

---
Autores:

**Joseph Valenciano Madrigal @Josephv27**

**Randall Zumbado Huertas @randox19**

**Randy Conejo Juárez @randycj**
