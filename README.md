# 🚀 Portafolio Personal - David Martínez

Portafolio web personal y CV desarrollado con **Angular 20**, diseñado con una arquitectura modular basada en componentes y un archivo de configuración centralizado para facilitar la edición y mantenimiento.

---

## 📂 Estructura del Proyecto

```text
personal/
├── .github/workflows/
│   └── deploy.yml            # Despliegue automático a GitHub Pages
├── public/                   # Archivos estáticos (fotos, logos, CV en PDF)
│   ├── David.JPG
│   ├── Luis-David-Martinez-CV.pdf
│   ├── CBTIOS.png
│   ├── escom.png
│   ├── FotosEscom/
│   ├── fotografia/
│   ├── music/
│   └── previewClima/
└── src/
    ├── app/
    │   ├── data/
    │   │   └── portfolio.data.ts   # ⭐ ARCHIVO PRINCIPAL DE EDICIÓN (textos, proyectos, enlaces)
    │   ├── models/
    │   │   └── portfolio.model.ts  # Interfaces y tipos de TypeScript
    │   ├── components/
    │   │   ├── navbar/             # Barra de navegación con scroll suave y menú móvil
    │   │   ├── hero/               # Portada con foto, efecto máquina de escribir y copiar correo
    │   │   ├── projects/           # Sección de proyectos con sliders de Swiper
    │   │   ├── education/          # Formación académica (ESCOM, CBTis) con tarjetas y galería
    │   │   ├── about/              # Hobbies (Fotografía y Música) con sliders
    │   │   └── footer/             # Pie de página y botón de regreso arriba
    │   ├── app.ts                  # Componente raíz
    │   ├── app.html
    │   └── app.css
    ├── styles.css                  # Estilos globales y temas
    └── index.html                  # Plantilla HTML base con fuentes e iconos
```

---

## ✏️ ¿Cómo editar el contenido fácilmente?

Casi todo el contenido editable se encuentra en un solo archivo:
👉 [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts)

### 1. Modificar tus datos personales, roles o redes
Edita la constante `PERSONAL_INFO`:
- **Roles animados:** Cambia el arreglo `titles: ['Desarrollador', 'Diseñador', 'Filmmaker']`. La animación se ajustará automáticamente.
- **Biografía:** Edita el campo `bio`.
- **Correo y CV:** Cambia `email` o el nombre del archivo en `cvUrl`.
- **Redes sociales:** En `socials`, actualiza los enlaces de LinkedIn, GitHub o Instagram.

### 2. Agregar o editar Proyectos
Edita la constante `PROJECTS`:
```typescript
{
  id: 'nuevo-proyecto',
  title: 'Nombre de tu Proyecto',
  description: 'Breve explicación de las tecnologías y función del proyecto...',
  link: 'https://mi-proyecto.com',
  linkText: 'Conocer',
  images: [
    'previewClima/foto1.webp',
    'previewClima/foto2.webp'
  ]
}
```

### 3. Modificar Formación Académica
Edita la constante `EDUCATION_DATA`:
- Puedes cambiar la descripción general de tu semestre actual.
- Puedes agregar o modificar grados académicos en la lista `items`.
- Puedes actualizar las fotos del campus en `campusImages`.

### 4. Modificar Hobbies o Sobre Mí
Edita la constante `HOBBIES_DATA`:
- Agrega o edita secciones con su título, descripción y galería de fotos.

---

## 💻 Comandos de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
npm start
```

Abre tu navegador en `http://localhost:4200/`. La aplicación se recarga automáticamente al guardar cualquier cambio.

---

## 📦 Compilación y Despliegue

### Compilar para producción local:
```bash
npm run build
```

### Compilar para GitHub Pages:
```bash
npm run build:gh
```
*(Configurado para la ruta base `/personal/`)*

### Despliegue Automático con GitHub Actions:
Este repositorio incluye el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Cada vez que hagas `git push origin main`, GitHub compilará y publicará la versión más reciente automáticamente en GitHub Pages.

> **Nota:** Para activarlo en tu repositorio de GitHub, ve a **Settings > Pages > Build and deployment > Source** y selecciona **GitHub Actions**.
