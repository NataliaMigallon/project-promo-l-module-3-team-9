![image](https://github.com/Adalab/project-promo-l-module-3-team-9/blob/dev/web/src/images/logo-delicious.png)

# Delicious Profile Card

`Delicious Profile Card` es un proyecto creado por las cuatro integrantes del equipo `Delicious Code`: [Cristina Blanco](https://github.com/CrisBIB), [Marta Cano](https://github.com/Martcacio), [Mercedes Fe](https://github.com/mermfb) y [Natalia Migallón](https://github.com/NataliaMigallon).
En él hemos programado una aplicación que genera tarjetas de visita virtuales con los datos personales de la usuaria o usuario (nombre, puesto de trabajo, email, foto de perfil, teléfono, y cuentas de Linkedin y GitHub), y que puede ser compartida a través de las diferentes redes sociales mediante URL compartida.
Para desarrollar esta web hemos utilizado diferentes herramientas como HTML5, CSS3, SASS, Java Script y React, además de programar nuestro propio servidor con NODE JS y su módulo Express JS.

Para ver el proyecto tienes dos opciones: hacer click [aquí](https://delicious-profile-card.herokuapp.com/), o instalarlo en tu ordenador.

## Instalación

Si quieres instalar y ejecutar el proyecto completo, sigue los siguientes pasos:

1. Clona este repositorio
2. Entra en la carpeta raíz
3. Ejecuta en la terminal `npm install`
4. Para lanzar el proyecto: ejecuta en la terminal `npm start` o `npm run dev`
   Si quieres probar o modificar la parte del front-end con React:
5. Entra en la carpeta `/web/`
6. Ejecuta npm install
7. Para lanzar sólo la parte front-end del proyecto, ejecuta `npm start` dentro de la carpeta `/web/`

## Descripción

La SPA (Single Page Application) empieza con una sencilla “landing” que consta del logotipo, un footer y una somera descripción -tanto escrita como visual- a través de tres iconos, en donde la usuaria o usuario puede ver en qué consiste la web. Haciendo click en el botón `COMENZAR` se acceder a la denominada “cardpage”, donde está el contenido principal.

La interfaz se divide verticalmente en el header, protagonizado por el logotipo, el main, donde se sitúa la propia aplicación, y el footer. En la horizontal, el main se subdivide en una mitad izquierda que recoge el formulario, y la otra mitad derecha, donde se previsualiza la tarjeta a la vez que la usuaria va interactuando.

A su vez, el formulario está estructurado en tres partes en la vertical: la primera es la sección “diseña”, donde ponemos a disposición de la usuaria cuatro paletas de color con distintas tonalidades; la segunda es la parte de “rellena”, donde se tienen que introducir los datos que conformarán la tarjeta, así como una fotografía; y la tercera es "comparte" donde encontramos el botón de `CREAR TARJETA`.

## Estructura del proyecto

```
Delicious Profile Card

├── node_modules
├── public
├── src
├── view/pages
├── web
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── App.js
│   │   │   ├── CardPage.js
│   │   │   ├── Collapsable.js
│   │   │   ├── Design.js
│   │   │   ├── Fill.js
│   │   │   ├── Footer.js
│   │   │   ├── Form.js
│   │   │   ├── GetAvatar.js
│   │   │   ├── Header.js
│   │   │   ├── Input.js
│   │   │   ├── LandingPage.js
│   │   │   ├── Main.js
│   │   │   ├── Palettes.js
│   │   │   ├── PhotoCard.js
│   │   │   ├── Reset.js
│   │   │   ├── Share.js
│   │   │   ├── ShareCreated.js
│   │   │   └── ShareFail.js
│   │   ├── images
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── localStorage.js
│   │   ├── stylesheets
│   │   │   ├── core
│   │   │   │   ├── _functions.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── layout
│   │   │   │   ├── _collapsable.scss
│   │   │   │   ├── _designSection.scss
│   │   │   │   ├── _fillSection.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   ├── _formSection.scss
│   │   │   │   ├── _getAvatar.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _mainHome.scss
│   │   │   │   ├── _mainprofile.scss
│   │   │   │   ├── _profile.scss
│   │   │   │   ├── _resetSection.scss
│   │   │   │   └── _shareSection.scss
│   │   │   ├── pages
│   │   │   │   └── index.scss
│   │   │   ├── App.scss
│   │   │   └── index.scss
│   │   └── index.js
│   ├── .gitignore
│   ├── desktop.ini
│   ├── package-lock.json
│   └── package.json
├── .gitignore
├── README.mde
├── desktop.ini
├── package-lock.json
└── package.json
```
