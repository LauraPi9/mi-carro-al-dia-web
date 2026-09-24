# MiCarro al Día — Web

Maquetación navegable de la versión web de **MiCarro al Día**.
## Cómo verlo

Abrir `index.html` con doble clic en cualquier navegador moderno (Chrome, Edge, Firefox, Safari). No requiere instalar nada ni levantar un servidor.

## Pantallas

1. **Inicio de sesión** (`index.html`) — correo y contraseña con validación, botón para mostrar/ocultar la contraseña, enlace "¿Olvidó su contraseña?" que abre el modal **Recuperar contraseña** y, al enviarlo, el **cuadro de notificación** de correo enviado. Con un correo válido y cualquier contraseña entra al panel principal.
2. **Panel principal** (`panel.html`) — menú lateral de navegación con "Cerrar sesión", saludo y chip de usuario, aviso de obligaciones próximas a vencer, las tarjetas **Resumen del vehículo** y **Estado de las obligaciones**, y el botón flotante de ayuda (sin acción).
3. **Resumen del vehículo** (`vehiculo.html`) — breadcrumb y datos del vehículo (placa, marca y modelo), listado de **próximas obligaciones a vencer** con casillas de selección, y el modal **Pagar obligación** con detalle de la obligación, del precio y medio de pago.
4. **Estado de las obligaciones** (`obligaciones.html`) — breadcrumb y las tarjetas de **SOAT** y **Tecnicomecánica** con su píldora de estado ("Próxima a vencer" / "Al día"), datos de vigencia y entidad, y el enlace "Consultar sitio oficial".

Las tres pantallas internas (`panel.html`, `vehiculo.html`, `obligaciones.html`) comparten el panel lateral **Preguntas frecuentes**, un `<dialog class="modal modal--drawer">` que se abre tanto desde el botón flotante de ayuda como desde el ítem "+ Información" del menú.

**Guía de componentes** (`componentes.html`): paleta de colores, tipografía y sábana de controles (botones, grupo de botones, notificaciones, breadcrumb, modal de pago, tarjeta, casilla, chip de usuario y menú de navegación). Sirve como referencia al construir las demás pantallas.

## Estructura

```
├── index.html            # Inicio de sesión
├── panel.html            # Panel principal
├── vehiculo.html         # Resumen del vehículo
├── obligaciones.html     # Estado de las obligaciones
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
- **Modales:** se escriben como `<dialog class="modal">` y se abren con `data-open-modal="id-del-dialog"`; cualquier botón con `data-close-modal` los cierra. La variante `modal--drawer` (+ `modal-box--drawer`) desliza el diálogo desde el borde derecho en vez de centrarlo.
- **Acciones de maqueta:** los botones cuya pantalla aún no existe usan `data-toast="mensaje"` para mostrar un aviso temporal.
