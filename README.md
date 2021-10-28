# IronTecPrueba App

## Caso de uso

### Instalación

Clonar repositorio o descargar la app en el dispositivo deseado. Una vez ontenido, moverse dentro de la carpeta de la aplicación **IronTecApp** y ejecutar la terminal o consola del sistema.

Para poder tener la app funcional hay que instalar todos los modulos/librerias usadas por la aplicación mediante en comando `npm install`.

Si todo sale bien, a continuación ejecutando `npm start` se compilará la app.

## Demostración

Abrir un navegador en *localhost:4200* el cual es el puerto por defecto de Angular y muestra lo siguiente:

![Front Page](/imgs/Front1.PNG "Front Page")

Escribimos el **nombre de usuario** del dueño del repositorio y pulsamos el botón de *Siguiente* (el campo es obligatorio). Hacemos lo mismo con el **nombre del repositorio** y por último pulsamos el botón *Enviar*.

> Para el ejemplo se ha usado Nombre Usuario: **KevinKurosaki** y Nombre repositorio: **IronTecPrueba**.

Por último, si el repositorio tiene contenido visible mostará una tabla con los diferentes tipos de *issues* y algo de información acerca de los mismos.

![Front Page 2](/imgs/Front2.PNG "Front Page 2")

El botón **+** nos devuelve a la página principal.

![Mas](/imgs/Mas.PNG "Mas")

## Referencias

 Para el desarrollo de la aplicación he usado información y ayuda de las siguientes fuentes:

 Github API [Github API](https://docs.github.com/es/rest/reference/repos)

 Documentación de Angular (HttpClientModle, Observables, etc) [Documentación Angular](https://angular.io/api/common/http/HttpClientModule)

 Angular Material [Documentación Angular Material](https://material.angular.io/components/button/overview)

 Mención especial para la documentación sobre Routing [Angular Routing](https://angular.io/guide/router)
 
 A pesar de no haberlo utilizado realicé algunos intentos con Nrgx [Ngrx Academia Binaria](https://academia-binaria.com/el-patron-redux-con-ngrx-en-angular/)

 Además de estas se ha utilizado diferentes foros para la solución de errores o cuestiones surgidas durante el proceso. Entre alguno de ellos Stackoverflow [StackOverflow](https://stackoverflow.com/questions/tagged/angular)