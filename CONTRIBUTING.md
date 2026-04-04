# Contributing Guide

Guía para contribuir al desarrollo de Stay Playful.

## Estándares de Código

### TypeScript
- Siempre usar tipos explícitos
- Evitar `any` a toda costa
- Usar interfaces para props de componentes

```typescript
interface ComponentProps {
  title: string
  onSubmit: (data: FormData) => Promise<void>
  optional?: boolean
}

export function Component({ title, onSubmit, optional }: ComponentProps) {
  // ...
}
```

### Componentes React
- Usar componentes funcionales
- Separar lógica de presentación
- Nombrar con PascalCase
- Exportar con `export function` (no default export)

```typescript
// ✅ Bien
export function ButtonPrimary({ label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>
}

// ❌ Mal
const button = ({ label }) => <button>{label}</button>
export default button
```

### Estilos (Tailwind)
- Mobile-first: empezar en mobile, agregar breakpoints
- Usar `clamp()` para responsive font-size
- No usar valores arbitrarios (`[...]`) sin motivo
- Mantener orden: layout → spacing → colors → effects

```tsx
// ✅ Bien
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
  Título
</h1>

// ❌ Mal
<h1 className="text-[32px] ml-[42px] hover:text-red-500">
  Título
</h1>
```

### Archivos y Carpetas
- Componentes en `/components`
- Utilities en `/lib`
- Un componente = un archivo
- Nombres en kebab-case para carpetas, PascalCase para componentes

```
components/
├── Header.tsx
├── LanguageSwitcher.tsx
└── ui/
    ├── Button.tsx
    ├── Dialog.tsx
    └── index.ts
```

## Workflow de Git

1. **Crear rama** desde `main`:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

2. **Hacer commits** atómicos:
   ```bash
   git commit -m "feat: agregar componente X"
   git commit -m "fix: corregir bug en Y"
   ```

3. **Push y PR**:
   ```bash
   git push origin feature/nombre-descriptivo
   ```

### Commit Messages

Usar [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios de documentación
- `style:` Cambios de formato (sin lógica)
- `refactor:` Refactorización
- `perf:` Mejoras de performance
- `test:` Agregar tests

```
feat: agregar selector de idioma al header

- Nuevo componente LanguageSwitcher
- Integración con useLanguage hook
- Tests para ambos idiomas

Closes #123
```

## Pruebas Locales

### Verificar Responsive
```bash
# En DevTools: Toggle device toolbar (Ctrl+Shift+M)
# Probar: iPhone SE, iPad, Desktop 1920px
```

### Verificar Accesibilidad
```bash
# En DevTools: Lighthouse audit (Accessibility)
# Usar WAVE browser extension
# Probar con teclado (Tab, Enter, Escape)
```

### Verificar Performance
```bash
npm run analyze  # Bundle size analysis

# En DevTools: Lighthouse audit (Performance)
```

### Verificar Traducción
```
1. Cambiar idioma con el selector
2. Verificar que todas las cadenas se actualizan
3. Revisar que no hay textos hardcodeados
```

## Debugging

### Console.log (v0 style)
```typescript
console.log("[v0] Variable importante:", variable)
console.log("[v0] Renderizando componente X")
```

### VSCode Launch Config
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Checklist pre-PR

- [ ] Code compila sin errores
- [ ] No hay console.log de debug
- [ ] Types están correctos (`npm run type-check`)
- [ ] Linting pasa (`npm run lint`)
- [ ] Responsive en mobile/tablet/desktop
- [ ] Accesibilidad verificada (Lighthouse)
- [ ] Traducciones verificadas (ambos idiomas)
- [ ] Performance no degradó

## Convenciones de Nombrado

### Variables
```typescript
// ✅ Descripción clara
const isLoading = false
const userEmail = "user@example.com"
const MAX_RETRIES = 3

// ❌ Ambiguo
const loading = false
const email = "user@example.com"
const max = 3
```

### Funciones/Métodos
```typescript
// ✅ Imperativo
function validateEmail(email: string): boolean
function handleFormSubmit(data: FormData): Promise<void>

// ❌ Ambiguo
function email()
function form()
```

### Constantes
```typescript
const SITE_NAME = "Stay Playful"
const BREAKPOINT_MOBILE = 640
const URL_API = "https://api.example.com"
```

## Performance Considerations

1. **Lazy Load Heavy Components**
```typescript
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <div>Cargando...</div>
})
```

2. **Memoize cuando sea necesario**
```typescript
import { memo } from 'react'
export const Button = memo(function Button(props) {
  // ...
})
```

3. **Optimizar imágenes**
```typescript
<Image 
  src="/image.jpg" 
  alt="Descripción"
  width={800}
  height={600}
  priority  // Solo para hero images
/>
```

## Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Preguntas?

Contacta al equipo de Stay Playful.

---

**Última actualización**: 2026-04-04
