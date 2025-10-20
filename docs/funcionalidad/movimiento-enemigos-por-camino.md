# Movimiento enemigos por camino

## (Extra, debió ser un PR aparte)

Se añaden cambios para poder configurar mejor y sin conflictos el formateo y el linter del formatrador, considerar que hay cambios solo de formato sin logica en este PR

- .prettierrc
- eslint.config.mjs
- package.json
- pnpm-lock.yaml

## Sprite

Se añaden las imágenes como las coordenadas de los sprite en formato json

El archivo `src/app/utils/sprite.ts` tiene el codigo necesario para tomar el json y convertirlo en un sprite animado, los parámetros son `identificadorAssets ` que es el nombre, key o identificador de `Assets` y un `patronNombreFrames` que sirve para identificar el valor importante para ordenar los frames en caso en el json vinieran desordenados

- Toma el `json` desde los `Assets`
- Lanza un error si no fue capaz de llegar al recurso
- Verifica si el array es correcto si no lo crea en base a la información existente
- Usa el patrón para extraer el numero de frame
- Descarta frame no validos
- Ordena los frame en relación al ID obtenido del patrón
- Extrae las texturas en base al orden encontrado anteriormente
- Filtra en caso haya un valor que le falte algo y no sea una textura valida, ademas que no este indefinida

## MainScreen

Para que sea mas ordenado y escalable se crearon diferentes elementos que controlas a otros mas pequeños, el punto de partida de todo esto es en `src/app/screens/main/MainScreen.ts`, acá se añade el `CreadorUnidades` y genera unidades después de 3 segundos iniciada la pantalla, se baja el volumen a 01, solo para que no moleste tanto mientras encontramos uno mejor

Los `camino` que tomaran los enemigos están definidos provisoriamente en la misma pantalla principal

### Mejora

Hacer como un estante de unidades disponibles si se muere alguna hacerla invisible guardarla y cuando nasca otra no crearla si no reusar un recurso muerto, esto es para que sea mas optimo el manejo de recursos, y deja menos basura

## CreadorUnidades

Controlador de unidades, es capaz de crear ordas, i sigue un principio de crear las unidades al momento pero las hace visibles al momento de su uso

- Crea unidades, de distitnos tipos siempre y cuando esta extienda de `Unidad`
- Puede generar los grupos o ordas de unidades con un retraso configurable de tiempo entre unidad
- Tiene como responsabilidad disparar el update de cada unidad

## Unidad

Comportamiento compartido de cualquier unidad, las unidades verdaderas pueden ser de tipo `Unidad` o puedes extender de `Unidad` llevando así toda la funcionalidad, la `Unidad` puede tener una animación base, puede moverse, y puede seguir caminos (Componentes añadidos por composición)

- Al crearse se decide que animación, velocidad y camino seguirán
- Esta clase tiene sinergia directa con `CreadorUnidades`
- En el update si no están visibles y no tienen un objetivo para moverse no se moverán

## Enemigo

Un enemigo en concreto, se define sus frames en este punto, solo el nombre toda la demás lógica esta en `Unidad`, puede sobreescribir la velocidad y otros atributos, la idea es crear una clase que extienda de `Unidad` por cada tipo de personaje que queramos introducir

## SeguidorDeCaminos

Script para poder asignar y despues poder elejir un punto desde un camino dado, basicamente decide cual ser ael proximo movimiento de la Unidad o Elemento

- Una vez asigado el camino que es un array de puntos, puede seleccionar el objetivo a moverse
- Puede asignarse una `variación` los puntos objetivo, obteniendo así un movimiento mas natural en vez que seguir un punto exacto
- Esta clase no mueve al elemento por si sola, solo dirige el camino
- Se puede obtener información si es camino fue hecho por completo, también puede reiniciar el camino o moverse en círculos

## Movimiento

Mueve un elemento de un punto a otro a una determinada velocidad

- Depende de ser llamado desde un `Ticker`
- Calcula la distancia faltante para compararlo con una distancia minima para comprobar que ya se llegó donde se quiere mover y mover directamente el objeto al punto objetivo
- Calcula el paso dado en este frame o tick
- Si la distancia es mejor a la distancia mínina mueve el objetivo directamente al punto objetivo, si es mejor solo avanza ese paso
- Devuelve `true` si llegó al punto `falso` si aún no

## herramientaDesarrollo

Función simple que genera sprite visibles desde un array, util or ejemplo para "ver" el camino de los enemigos

## Captura pantalla

![mover-enemigos-por-camino-1](https://github.com/user-attachments/assets/0f44fc56-6d07-4764-ae92-044cef047b43)
