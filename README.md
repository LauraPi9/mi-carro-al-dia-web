# MiCarro al Día — Web

Maquetación navegable de la versión web de **MiCarro al Día**.
## Cómo verlo

Abrir `index.html` con doble clic en cualquier navegador moderno (Chrome, Edge, Firefox, Safari). No requiere instalar nada ni levantar un servidor.

## Pantallas

1. **Inicio de sesión** (`index.html`) — correo y contraseña con validación, botón para mostrar/ocultar la contraseña, enlace "¿Olvidó su contraseña?" que abre el modal **Recuperar contraseña** y, al enviarlo, el **cuadro de notificación** de correo enviado. Con un correo válido y cualquier contraseña entra al panel principal.
2. **Panel principal** (`panel.html`) — menú lateral de navegación con "Cerrar sesión", saludo y chip de usuario, aviso de obligaciones próximas a vencer, las tarjetas **Resumen del vehículo** y **Estado de las obligaciones**, y el botón flotante de ayuda (sin acción).

**Guía de componentes** (`componentes.html`): paleta de colores, tipografía y sábana de controles (botones, grupo de botones, notificaciones, breadcrumb, modal de pago, tarjeta, casilla, chip de usuario y menú de navegación). Sirve como referencia al construir las demás pantallas.

## Estructura

```
├── index.html            # Inicio de sesión
├── panel.html            # Panel principal
├── componentes.html      # Guía de componentes (sábana de controles)
├── css/
│   ├── styles.css        # Tokens (colores, tipografía, radios) y todos los componentes
│   └── guia.css          # Estilos exclusivos de componentes.html
└── js/
    ├── icons.js          # Íconos SVG; se usan con <span class="icon" data-icon="mail"></span>
    ├── app.js            # Comportamiento compartido: modales, toasts, contraseña
    └── login.js          # Validación del inicio de sesión y recuperación de contraseña
```

## Convenciones

- **Colores y tipografía** se definen una sola vez como variables en `:root` de `css/styles.css` (`--color-navy`, `--color-blue`, `--color-green`, `--color-bg`…). La fuente es *Plus Jakarta Sans* (Google Fonts).
- **Modales:** se escriben como `<dialog class="modal">` y se abren con `data-open-modal="id-del-dialog"`; cualquier botón con `data-close-modal` los cierra.
- **Acciones de maqueta:** los botones cuya pantalla aún no existe usan `data-toast="mensaje"` para mostrar un aviso temporal.
