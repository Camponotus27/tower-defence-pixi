# Inicio aplicacion

## index.html 

Es la estructra web basica que se renderiza siempre
    - Esn la linea 15 este carga el primer archivo typescrypt llamado `main.ts`, el punto de entrada de la aplicacion

## src/main.ts

Archivo typescrypt de entrada el proyecto

    - Crea el `engie` mediante `CreationEngine`
    - Inicia las configuraciones del usuario
    - Carga las paginas de carga una vez esta complete su siclo carga la pntalla principal


## src/engine/engine.ts

Extiende de [`Application`](https://pixijs.com/8.x/guides/components/application) por tanto hereda todas sus propiedades y metodos, es el controlador del proyecto  

    - En la aplicacion de configura que desde el archivo `index.html` tomará  el `pixi-container` y desde ahi lo usará para redenderizar todo lo relacionado a pixi.js y su camva
    - Configura la pausa cuando la visivilidad cambie (Pausa Resume)
    - Carga los assets preconfigurados
