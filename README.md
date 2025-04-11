# AirOperation2

## Descripción General

AirOperation2 es una aplicación web que permite a los usuarios buscar información detallada sobre aeronaves y sus vuelos utilizando el número de registro de la aeronave. La aplicación proporciona datos en tiempo real sobre el estado de la aeronave, detalles técnicos, y la información de su último vuelo, incluyendo rutas, aeropuertos de origen y destino, y horarios.

## Funcionalidades Principales

- **Búsqueda de aeronaves**: Consulta información detallada de aeronaves mediante su número de registro.
- **Visualización de datos técnicos**: Muestra información como estado de la aeronave, línea de producción, propietario, número y tipo de motores.
- **Información de vuelos**: Presenta datos del último vuelo de la aeronave, incluyendo aeropuertos de origen y destino, horarios y distancia.
- **Historial de búsquedas**: Almacena el último registro consultado para facilitar búsquedas recurrentes.
- **Interfaz responsiva**: Diseño adaptable a diferentes dispositivos, desde relojes inteligentes hasta computadoras de escritorio.

## Tecnologías Utilizadas

- **HTML5**: Estructura básica de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (ES6+)**: Lógica de la aplicación y manipulación del DOM.
- **LocalStorage API**: Almacenamiento del último vuelo consultado.
- **Fetch API**: Realización de peticiones a la API externa.
- **AeroDataBox API**: Fuente de datos para información de aeronaves y vuelos.

## Estructura del Proyecto

\`\`\`
AirOperation2/
├── index.html              # Página principal de la aplicación
├── main.js                 # Archivo principal de JavaScript
├── api.js                  # Funciones para interactuar con la API
├── ui.js                   # Funciones para actualizar la interfaz de usuario
├── html.js                 # Plantillas HTML para componentes dinámicos
├── styles/
│   ├── styles.css          # Estilos principales
│   └── variables.css       # Variables CSS (actualmente vacío)
└── storage/
    └── img/
        ├── plane.svg       # Icono de avión para la barra de búsqueda
        └── Find your Flight.mp4  # Video de fondo para el encabezado
\`\`\`

## Instalación y Configuración

1. **Clonar el repositorio**:
   \`\`\`bash
   git clone https://github.com/tu-usuario/AirOperation2.git
   cd AirOperation2
   \`\`\`

2. **Configuración de la API**:
   La aplicación utiliza la API de AeroDataBox. Para utilizarla, necesitarás:
   - Registrarte en [RapidAPI](https://rapidapi.com/)
   - Suscribirte a la API de AeroDataBox
   - Obtener tu clave API
   - Reemplazar la clave API en el archivo `api.js`:
     \`\`\`javascript
     "x-rapidapi-key": "TU_CLAVE_API_AQUÍ"
     \`\`\`

3. **Ejecutar la aplicación**:
   - Abre el archivo `index.html` en tu navegador, o
   - Utiliza un servidor local como Live Server de VS Code

## Uso de la Aplicación

1. **Buscar una aeronave**:
   - Ingresa el número de registro de la aeronave en el campo de búsqueda (ej. "N12345" o "EC-MYT")
   - Haz clic en el botón "Buscar"
   - La aplicación mostrará la información de la aeronave y su último vuelo

2. **Consultar el último vuelo buscado**:
   - Haz clic en el botón "Último vuelo" en la parte inferior
   - La aplicación cargará automáticamente la información de la última aeronave consultada

3. **Visualizar detalles**:
   - La tarjeta superior muestra la imagen y detalles técnicos de la aeronave
   - La tarjeta inferior muestra la información del vuelo, incluyendo:
     - Aeropuertos de origen y destino
     - Horarios de salida y llegada
     - Distancia del vuelo
     - Representación visual de la ruta

## API Utilizada

La aplicación utiliza la API de AeroDataBox a través de RapidAPI para obtener información sobre aeronaves y vuelos. Se utilizan tres endpoints principales:

1. **Información de aeronaves**:
   \`\`\`
   GET https://aerodatabox.p.rapidapi.com/aircrafts/reg/{matricula}
   \`\`\`

2. **Información de vuelos**:
   \`\`\`
   GET https://aerodatabox.p.rapidapi.com/flights/reg/{matriculaVuelo}
   \`\`\`

3. **Información de aeropuertos**:
   \`\`\`
   GET https://aerodatabox.p.rapidapi.com/airports/icao/{codigoIcao}
   \`\`\`

## Manejo de Errores

La aplicación incluye manejo de errores para:
- Registros de aeronaves inexistentes
- Problemas de conexión con la API
- Ausencia de datos de vuelo

Cuando ocurre un error en la búsqueda, se muestra un mensaje indicando que el registro no existe y se eliminan las tarjetas de información.

## Características Responsivas

La aplicación está diseñada para funcionar en diversos dispositivos:
- Relojes inteligentes (menos de 280px)
- Teléfonos móviles pequeños (281px - 375px)
- Teléfonos móviles (376px - 480px)
- Teléfonos grandes y tablets pequeñas (481px - 768px)
- Tablets y laptops pequeñas (769px - 1024px)
- Laptops y computadoras de escritorio (más de 1025px)

## Mejoras Futuras

Algunas posibles mejoras para futuras versiones:
- Implementación de un historial completo de búsquedas
- Visualización de múltiples vuelos para una misma aeronave
- Mapa interactivo para visualizar la ruta del vuelo
- Información meteorológica en los aeropuertos de origen y destino
- Notificaciones en tiempo real sobre cambios en el estado del vuelo
- Modo oscuro/claro para la interfaz

## Solución de Problemas Comunes

- **La búsqueda no muestra resultados**: Verifica que el número de registro sea correcto y que tengas conexión a internet.
- **El botón "Último vuelo" no funciona**: Asegúrate de haber realizado al menos una búsqueda exitosa previamente.
- **Las imágenes no cargan**: Algunas aeronaves pueden no tener imágenes disponibles en la base de datos.
- **Error de API**: Verifica que tu clave API sea válida y que no hayas excedido el límite de peticiones.

## Contribución

Si deseas contribuir a este proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`)
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

Desarrollado con ❤️ por [Tu Nombre]