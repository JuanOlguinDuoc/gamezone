# gamezone

# Proyecto de Registro y Login para GameZone

Este proyecto consiste en el desarrollo de un sistema de registro y login para la tienda de videojuegos online **GameZone**, cumpliendo con los requisitos de la Evaluación Formativa 1 del curso DSY1104. El objetivo principal es ofrecer una experiencia de usuario rápida y optimizada, especialmente para dispositivos móviles, a través de una interfaz interactiva y validaciones robustas.

---

### Tecnologías Utilizadas

* **HTML5:** Estructura y semántica de la página.
* **CSS3:** Estilos y diseño visual, incluyendo el uso de **Flexbox** y **CSS Grid** para el diseño responsivo.
* **JavaScript:** Lógica de validación de formularios y funcionalidad de la interfaz (mostrar/ocultar formularios).

---

### Funcionalidades Implementadas

El sistema se diseñó para cumplir con las siguientes especificaciones:

#### 1. Formulario de Registro
Este formulario permite a los nuevos usuarios crear una cuenta. Se han implementado validaciones en tiempo real para cada campo:

* **Nombre Completo:** Se valida que solo contenga caracteres alfabéticos y espacios, con un máximo de 100 caracteres.
* **Correo Electrónico:** Se verifica que el formato sea válido y que el dominio sea exclusivamente **`@duoc.cl`**.
* **Contraseña:** La validación asegura que la contraseña tenga al menos 10 caracteres e incluya como mínimo una letra mayúscula, una minúscula, un número y un carácter especial.
* **Confirmación de Contraseña:** Se compara con el campo de contraseña para garantizar que ambos valores sean idénticos.
* **Teléfono (Opcional):** Si se ingresa un número, se valida que contenga exactamente 9 dígitos.
* **Géneros Favoritos:** El usuario puede seleccionar un solo género de una lista predefinida.

Cada validación fallida muestra un **mensaje de error claro y personalizado** al usuario.

#### 2. Sistema de Login
El formulario de inicio de sesión permite a los usuarios registrados acceder a su cuenta. La lógica implementada verifica las credenciales y muestra un **mensaje de error si el nombre de usuario o la contraseña son incorrectos**.

---

### Estructura de Archivos
/
├── pages/
|   └──index.html            # Página principal con los formularios
├── css/
│   └── styles.css        # Hoja de estilos de la aplicación
├── js/
│   └── functions.js      # Lógica de JavaScript para validaciones y UI
└── images/
    └── fondo.png         # Imagen de fondo para el diseño

### Uso
Para ejecutar el proyecto, simplemente abre el archivo `index.html` en tu navegador web. La funcionalidad de los formularios se gestiona completamente en el lado del cliente con JavaScript, por lo que no se requiere un servidor.