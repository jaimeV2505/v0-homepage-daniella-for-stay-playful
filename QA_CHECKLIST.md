# QA Checklist - Stay Playful

Lista de verificación exhaustiva para asegurar calidad de producción.

## ✅ Fase 1: Funcionalidad

- [ ] Homepage carga sin errores
- [ ] Todos los componentes se renderean correctamente
- [ ] Links internos funcionan
- [ ] Links externos abren en tab nuevo
- [ ] No hay console errors o warnings
- [ ] No hay errores de hydration en la consola
- [ ] TypeScript compile sin errores (`npm run type-check`)

## ✅ Fase 2: Responsive Design

### Mobile (iPhone SE, 375px)
- [ ] Layout se adapta correctamente
- [ ] Texto es legible (no muy pequeño)
- [ ] Botones son tocables (min 48px)
- [ ] Imágenes no se cortan
- [ ] Menu mobile funciona
- [ ] No hay overflow horizontal

### Tablet (iPad, 768px)
- [ ] Grid se adapta a 2 columnas
- [ ] Espaciado es proporcional
- [ ] Navegación visible o accesible
- [ ] Imágenes se escalan bien

### Desktop (1920px+)
- [ ] Layout completo visible
- [ ] Grid multi-columna funciona
- [ ] Máximo ancho respetado
- [ ] Hover states visibles

### Orientación
- [ ] Portrait y landscape en mobile
- [ ] No hay text que se corte
- [ ] Layouts se adaptan correctamente

## ✅ Fase 3: Traducción (SV ↔ EN)

### Sueco
- [ ] Texto del header en sueco
- [ ] Nav items traducidos
- [ ] CTA buttons traducidos
- [ ] Footer traducido
- [ ] Labels de formularios traducidos
- [ ] Sin texto en inglés visible

### Inglés
- [ ] Texto del header en inglés
- [ ] Nav items traducidos
- [ ] CTA buttons traducidos
- [ ] Footer traducido
- [ ] Labels de formularios traducidos
- [ ] Sin texto en sueco visible

### Selector de idioma
- [ ] Botón funciona en header
- [ ] Cambio es inmediato
- [ ] Idioma persiste en reload
- [ ] Accesible por teclado

## ✅ Fase 4: Accesibilidad (A11y)

### Keyboard Navigation
- [ ] Tab navega por todos los interactivos
- [ ] Tab order es lógico
- [ ] Shift+Tab va hacia atrás
- [ ] Enter activa botones
- [ ] Space activa checkboxes
- [ ] Escape cierra modales

### Screen Reader
- [ ] Landmarks detectados (main, nav, footer)
- [ ] ARIA labels presentes
- [ ] Form labels asociados
- [ ] Botones tienen descripción
- [ ] Links tienen texto descriptivo
- [ ] Imágenes tienen alt text

### Color & Contrast
- [ ] Texto sobre fondo tiene contrast >= 4.5:1
- [ ] No usa solo color para comunicar (usa iconos/texto)
- [ ] Hover states visibles (no solo color)
- [ ] Focus indicators visibles

### Forms
- [ ] Labels asociados a inputs
- [ ] Error messages claros
- [ ] Required fields indicados
- [ ] Validación es accesible

## ✅ Fase 5: Performance

### Lighthouse Score
- [ ] Performance >= 90
- [ ] Accessibility >= 95
- [ ] Best Practices >= 90
- [ ] SEO >= 90

### Images
- [ ] Formato optimizado (WebP/AVIF)
- [ ] Responsive (srcset correcto)
- [ ] Alt text presente
- [ ] Loading state visible
- [ ] No hay layout shift (CLS)

### Bundle
- [ ] No hay bundle demasiado grande
- [ ] Code splitting funciona
- [ ] Lazy loading implementado
- [ ] Caching headers correctos

### Rendering
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 3s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s

## ✅ Fase 6: Browser Compatibility

### Desktop Browsers
- [ ] Chrome 90+ ✅
- [ ] Firefox 88+ ✅
- [ ] Safari 14+ ✅
- [ ] Edge 90+ ✅

### Mobile Browsers
- [ ] iOS Safari 14+ ✅
- [ ] Chrome Android ✅
- [ ] Firefox Android ✅
- [ ] Samsung Internet ✅

### Features Testeadas
- [ ] Responsive viewport meta tag
- [ ] Smooth scrolling
- [ ] Animations (CSS + JS)
- [ ] Event listeners funcionan

## ✅ Fase 7: Security

- [ ] No hay hardcoded secrets
- [ ] Environment variables protegidas
- [ ] HTTPS enforced
- [ ] Headers de seguridad presentes
- [ ] CSP headers configurado
- [ ] XSS prevention
- [ ] CSRF protection (si aplica)
- [ ] Input sanitization en forms
- [ ] No hay console logs con datos sensibles

## ✅ Fase 8: SEO

### Meta Tags
- [ ] Title tag descriptivo
- [ ] Meta description presente
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Favicon presente

### Estructura
- [ ] H1 único por página
- [ ] Headings en orden jerárquico (h2 → h3)
- [ ] URLs semánticas
- [ ] Structured data (schema.org)
- [ ] Sitemap.xml presente
- [ ] robots.txt presente

### Performance SEO
- [ ] Mobile-friendly
- [ ] Page speed > 90 (Lighthouse)
- [ ] No core web vitals issues
- [ ] Crawlable (no rel="nofollow" innecesarios)

## ✅ Fase 9: Content Quality

- [ ] Texto sin typos o errores gramaticales
- [ ] Contenido actualizado
- [ ] Links funcionan (no 404s)
- [ ] Imágenes tienen buen tamaño
- [ ] Vídeos cargan correctamente (si aplica)
- [ ] Consistencia de branding

## ✅ Fase 10: Edge Cases

### Network
- [ ] Funciona en slow 3G (Lighthouse)
- [ ] Offline graceful degradation
- [ ] Timeout handling

### Datos
- [ ] Campos vacíos manejados
- [ ] Strings muy largos (sin cortar)
- [ ] Caracteres especiales (acentos, emojis)
- [ ] Números grandes formateados

### Tamaño
- [ ] Pantalla muy pequeña (320px)
- [ ] Pantalla muy grande (4K)
- [ ] Zoom 200%
- [ ] Text scale 1.5x

## ✅ Deployment Checklist

- [ ] `.env.local` configurado
- [ ] Build local: `npm run build` sin errores
- [ ] Start local: `npm start` funciona
- [ ] No hay console errors
- [ ] Ambiente de producción verificado
- [ ] CDN/Cache invalidado
- [ ] Redirects/rewrites funcionan
- [ ] Error pages (404, 500) configuradas

## ✅ Post-Deployment

- [ ] URL en vivo accesible
- [ ] SSL válido
- [ ] Redirección HTTP → HTTPS
- [ ] DNS resolviendo correctamente
- [ ] Analytics funcionan
- [ ] Error tracking activo
- [ ] Backups configurados
- [ ] Monitoreo activo

## Resultado Final

- [ ] Todos los checks completados
- [ ] No hay issues abiertos críticos
- [ ] Documentación actualizada
- [ ] Team informado de cambios
- [ ] Ready para producción ✅

---

**Fecha de checklist**: ________________  
**QA Engineer**: ________________  
**Resultado**: ☐ APROBADO ☐ REQUIERE CAMBIOS
