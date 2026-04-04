# Stay Playful - Premium Next.js Application

Una aplicación web moderna y responsiva construida con Next.js 16, React 19 y Tailwind CSS 4.

## 🎯 Características Principales

- **Next.js 16**: Server components, App Router, optimizaciones de rendering
- **React 19.2**: Últimas características y performance improvements
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Design system moderno
- **Responsive Design**: Mobile-first, tablet, desktop optimizado
- **Traducción**: Sistema bilingüe Sueco ↔ Inglés
- **Accesibilidad**: WCAG 2.1 AA compliant
- **Performance**: Image optimization, code splitting, lazy loading
- **Componentes UI**: shadcn/ui + Radix UI

## 🚀 Quick Start

```bash
# Instalación de dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Ejecutar servidor de producción
npm start

# Verificación de tipos
npm run type-check

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx                # Root layout con providers
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Estilos globales
│   └── favicon.ico
├── components/
│   ├── Header.tsx                # Header responsive con navegación
│   ├── Hero.tsx                  # Hero section con imagen optimizada
│   ├── Method.tsx                # Sección Method con scroll animation
│   ├── Programs.tsx              # Programas showcase
│   ├── Testimonials.tsx          # Testimonios
│   ├── Footer.tsx                # Footer con links
│   ├── LanguageSwitcher.tsx      # Selector de idioma
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── config.ts                 # Configuración centralizada
│   ├── use-language.tsx          # Language provider & context hook
│   ├── a11y.ts                   # Accesibilidad utilities
│   └── performance.ts            # Performance helpers
├── public/
│   ├── logo1.png                 # Logo
│   ├── StayPlay.JPG              # Hero image
│   └── ...
├── styles/
│   └── ...                       # Archivos de estilo adicionales
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencias y scripts
```

## 🌐 Configuración de Idioma

El sitio soporta Sueco (sv) e Inglés (en) de forma centralizada:

```typescript
// En cualquier componente
import { useLanguage } from '@/lib/use-language'

export function Component() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t('nav.programs')}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
    </div>
  )
}
```

Las traducciones están definidas en `lib/config.ts` en el objeto `translations`.

## ♿ Accesibilidad (A11y)

- ARIA labels en todos los botones, links e inputs
- Screen reader optimizado
- Keyboard navigation completa
- Semantic HTML5
- Color contrast WCAG AA (4.5:1 mínimo)

```typescript
import { a11y } from '@/lib/a11y'

// Anunciar a lectores de pantalla
a11y.announceToScreenReader('Contenido cargado exitosamente')

// Saltar al contenido principal
a11y.skipToMainContent()
```

## ⚡ Performance

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Carga automática de bundles
- **Lazy Loading**: Componentes cargados bajo demanda
- **Caching**: Strategy optimizado para estático y dinámico
- **Compression**: Automático en despliegue

```bash
# Analizar bundle size
npm run analyze
```

## 📱 Responsive Breakpoints

- **mobile**: < 640px (sm)
- **tablet**: 640px - 1024px (md)
- **desktop**: 1024px - 1536px (lg)
- **wide**: > 1536px (xl)

Todos los componentes están optimizados con `clamp()` y breakpoints de Tailwind.

## 🔧 Configuración de Ambiente

Copiar `.env.local.example` a `.env.local` y configurar:

```env
NEXT_PUBLIC_SITE_NAME=Stay Playful
NEXT_PUBLIC_SITE_URL=https://stayplayful.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@stayplayful.com
NEXT_PUBLIC_CONTACT_PHONE=+46-123-456-789
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com
NEXT_PUBLIC_DEFAULT_LANGUAGE=sv
```

## 🎨 Design System

- **Primary Color**: #14532D (verde oscuro)
- **Accent Color**: #E3488B (rosa)
- **Typography**: DM Sans (body), Playfair Display (headings)
- **Spacing**: Tailwind scale (rem-based)
- **Border Radius**: Consistent 4px/8px/12px

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

## 🚢 Deployment

### Vercel (Recomendado)

```bash
# Se despliega automáticamente en push a main
git push origin main
```

### Docker

```bash
docker build -t stay-playful .
docker run -p 3000:3000 stay-playful
```

## 📊 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Desarrollo local con HMR |
| `npm run build` | Build optimizado para producción |
| `npm start` | Ejecutar servidor de producción |
| `npm run lint` | Ejecutar ESLint |
| `npm run type-check` | Verificar tipos TypeScript |
| `npm run analyze` | Analizar tamaño del bundle |

## 🐛 Debugging

```bash
# Activar debug en desarrollo
DEBUG=* npm run dev

# Type checking completo
npm run type-check

# Linting con fix
npm run lint -- --fix
```

## 📦 Dependencias Principales

- **next**: 16.2.0 - React framework
- **react**: 19.2.4 - UI library
- **tailwindcss**: 4.2.0 - Utility-first CSS
- **framer-motion**: 11.18.0 - Animations
- **lucide-react**: 0.564.0 - Icons
- **zod**: 3.24.1 - Type validation
- **recharts**: 2.15.0 - Charts

## 🔐 Seguridad

- CSP headers configurados
- XSS protection
- CSRF tokens (cuando sea necesario)
- Environment variables secure
- Validación de formularios con Zod

## 📄 License

© 2026 Stay Playful. Todos los derechos reservados.

## 👥 Soporte

Para preguntas o issues, contacta al equipo de Stay Playful.

---

**Última actualización**: 2026-04-04  
**Versión**: 1.0.0  
**Status**: 🟢 Producción Ready

