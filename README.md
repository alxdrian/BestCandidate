# Descripción #
Este repositorio contiene un archivo index.ts, dentro encontraremos un pequeño servidor web construido con express. Se han incluido dos endpoints sobre los cuales vamos a trabajar.

# How To Execute #

Este proyecto requiere el uso de yarn. Para levantarlo, primero instalar las dependencias usando el comando yarn, luego correr el script "yarn start"

### Instrucciones ###

1. Crear una base de datos en memoria, la cual almacenara objetos que representan a un candidato y los skills que posee:

candidato:

    {
        "id": "0facd8d3-4361-4ab7-8921-3d57a73b796a",
        "name": "Diana Lenz",
        "skills": ["scala","golang"]
    }


2. Modificar el endpoint POST de manera que reciba candidatos y los almacene en la base de datos creada en el paso 1. La aplicación deberá generar el id de cada usuario. Permitido el uso de librerias.

* En caso de éxito, devolver el status code adecuado. 
* Controlar el caso en que el body del request esté vacío retornando un status code adecuado.

3. Modificar el endpoint GET de manera que reciba una lista de skills y devuelva el candidato más adecuado.

* El candidato más adecuado es aquel que cuenta con la mayor cantidad de skills de la lista enviada.
* Controlar el caso en el que no se envíe ningún skill, devolviendo un status code adecuado.
* Considerar el caso de no encontrar ningún candidato.

Ambos endpoints deberán demostrar manejo de excepciones, imprimiendo un mensaje en la consola y devolviendo un status code adecuado.

Se evaluará claridad del desarrollo, comprensión de convenciones REST y uso del lenguaje. El uso de status codes responderá al criterio de cada uno.