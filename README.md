Primera Entrega del curso de React: Crea tu landing
Descripción del Proyecto
Este repositorio contiene la primera entrega del Proyecto Final de Coderhouse. El objetivo es establecer la base de un futuro e-commerce, creando los componentes principales y aprendiendo a estructurar una aplicación de React.

Objetivos Cumplidos
Estructura de Componentes: Creación de los componentes NavBar, CartWidget e ItemListContainer.

Jerarquía de la Aplicación: NavBar e ItemListContainer son renderizados en App, mientras que CartWidget es anidado dentro de NavBar.

Paso de Props: Se utiliza una prop (bienvenida) para enviar un mensaje de bienvenida desde el componente padre (App) al componente hijo (ItemListContainer).

Organización de Archivos: Los componentes se encuentran en sus respectivos archivos dentro de la carpeta src/components.

Componentes Principales
App.js ----> El componente principal que renderiza la aplicación.

NavBar.js ----> La barra de navegación que incluye el logo, los enlaces de navegación y el CartWidget.

CartWidget.js ----> El ícono del carrito de compras.

ItemListContainer.js ----> Un contenedor que muestra un mensaje de bienvenida, demostrando el uso de props.

Tecnologías Utilizadas
React: Librería principal para la creación de la interfaz de usuario.

Bootstrap: Utilizado para dar estilos a los componentes de manera rápida y responsiva

Instalación y Ejecución
Para clonar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

Clona el repositorio:
git clone [URL_DE_TU_REPOSITORIO]

Navega hasta la carpeta del proyecto:
cd [nombre-de-tu-proyecto]

Instala las dependencias necesarias:
npm install

Inicia la aplicación en modo desarrollo:
npm start

La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000.

Autor
[Tu Nombre y Apellido]