# CARDIFY


Cardify es una librería que nos permite mejorar la visualización de imágenes, destacándolas y enseñando información acerda de ellas.

## Proyecto

Implementar un plugin que rescate las imágenes presentes en un contenedor, y reemplazarlas por un nuevo elemento que contenga la imagen, imagen a la cual se le aplicará un filtro, bajando su brillo, además de mostrar la descripción presente en uno de los atributos de la imagen (atributo `alt`).

## Metodología de trabajo

- Slack, para mantener la comunicación en el trabajo remoto.

- Metodología Agile, para hacer más eficiente el desarrollo del trabajo.

## Flujo de trabajo

1. Realizamos **fork** a repositorio de Laboratoria.

2. **Clonamos** el fork en nuestra máquina. 

3. Configuramos nuestro ambiente de desarrollo.

4. Preparamos nuestro producto.

5. Al terminar, enviamos un **pull request** a la rama de Laboratoria.


## Instalación

### Global (navegador)

- En nuestro html debemos incorporar los siguientes códigos:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
<script>$(container).cardify({});</script>
```

## Uso

- En nuestro archivo js correctamente enlazado a nuestro html, debemos incluir el siguiente código.

- Tener en cuenta que solo las imágenes en `container` serán modificadas. 

```js
$(container).cardify({});
```

## Ejemplos

¿Link a gh-pages con ejemplo?
