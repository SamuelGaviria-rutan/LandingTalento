# Ruta N — Sistema de diseño
### Landing de Talento y ecosistema de landings

Este archivo es la fuente de verdad. Toda generación en Figma Make debe cumplirlo sin que haga falta repetirlo en cada prompt. Si algo no está aquí, no se inventa: se pregunta.

Los colores salen del BrandBook 2025 de Ruta N. Las escalas tonales, los tokens semánticos y los ratios de contraste están derivados y verificados contra WCAG 2.1 AA.

---

## 1. Qué hace que esto se vea Ruta N

Cuatro reglas. Si una página las cumple, se ve de la corporación. Si no, se ve a plantilla.

**El color es superficie, no acento.** Ruta N no es una página blanca con botones de colores. Es bloques grandes de color plano que se alternan por sección. Una landing donde el turquesa solo aparece en iconitos y bordes está mal construida.

**Cero profundidad falsa.** Sin sombras, sin glassmorphism, sin blur, sin gradientes, sin bordes redondeados tipo píldora. La separación entre elementos viene de tres cosas: cambio de color de fondo, una línea de 1px, o espacio en blanco. Nada más.

**Tipografía con contraste de escala.** Titulares muy grandes y muy apretados (tracking -2% a -3%) contra cuerpo tranquilo a 18px. El salto entre un H1 de 88px y un párrafo de 18px es lo que da carácter. Titulares de 32px con cuerpo de 16px se ven tibios.

**Una sola acción primaria por bloque.** Dos botones del mismo peso compitiendo no enrutan a nadie. El segundo camino es un link con flecha, no un botón.

---

## 2. Superficies

Esta es la decisión estructural. Cada sección de la página elige una superficie, y el texto encima queda determinado por esa elección.

| Superficie | Hex | Texto encima | Para qué |
|---|---|---|---|
| `base` | `#ffffff` | `#253d36` | Lectura larga, listas de ofertas, formularios |
| `sutil` | `#f2f7f5` | `#253d36` | Alternar con base para separar secciones sin dibujar línea |
| `marca` | `#006152` | `#ffffff` | Hero, CTA de cierre, bloque de identidad |
| `ink` | `#253d36` | `#ffffff` | Footer, bloque corporativo, franja de datos |
| `acento` | `#0068ff` | `#ffffff` | Franja de acción puntual. Máximo una por página |

**Ritmo obligatorio de una landing:** `base → marca → base → sutil → ink`

Nunca dos superficies de color fuerte seguidas. Nunca más de tres bloques blancos seguidos.

---

## 3. Tokens

Usar siempre el token. Nunca escribir un hex suelto en un componente.

```css
:root {
  /* Superficies */
  --rn-surface-base:        #ffffff;
  --rn-surface-subtle:      #f2f7f5;
  --rn-surface-brand:       #006152;
  --rn-surface-ink:         #253d36;
  --rn-surface-accent:      #0068ff;

  /* Texto */
  --rn-text-primary:        #253d36;
  --rn-text-secondary:      #515b58;
  --rn-text-muted:          #68736f;
  --rn-text-brand:          #007c6b;
  --rn-text-link:           #0050e0;
  --rn-text-link-hover:     #0039bf;
  --rn-text-on-dark:        #ffffff;
  --rn-text-on-dark-secondary:  #b0c1bb;
  --rn-text-on-brand:       #ffffff;
  --rn-text-on-brand-secondary: #c0fffb;

  /* Bordes */
  --rn-border-subtle:       #d3d8d6;
  --rn-border-control:      #838b88;
  --rn-border-strong:       #68736f;
  --rn-border-brand:        #007c6b;
  --rn-border-on-dark:      #586e67;

  /* Acciones */
  --rn-action-primary-bg:       #0068ff;
  --rn-action-primary-bg-hover: #0050e0;
  --rn-action-primary-text:     #ffffff;
  --rn-action-secondary-border: #253d36;
  --rn-action-secondary-text:   #253d36;
  --rn-action-on-dark-bg:       #c0d400;
  --rn-action-on-dark-text:     #253d36;
  --rn-action-on-brand-bg:      #ffffff;
  --rn-action-on-brand-text:    #006152;

  /* Estados de oferta */
  --rn-state-open-bg:     #e1fffb;  --rn-state-open-text:   #006152;
  --rn-state-closed-bg:   #e7ecea;  --rn-state-closed-text: #515b58;
  --rn-state-cat-bg:      #bed8ff;  --rn-state-cat-text:    #0039bf;

  /* Foco */
  --rn-focus-ring:         #0068ff;
  --rn-focus-ring-on-dark: #c0d400;

  /* Forma */
  --rn-radius-sm: 4px;   /* inputs, tags, botones */
  --rn-radius-md: 8px;   /* cards */
  --rn-radius-lg: 16px;  /* imágenes de portada, modales */
  --rn-border-1: 1px;
  --rn-container: 1200px;
  --rn-gutter: 24px;
  --rn-control-h: 48px;
}
```

Espaciado: escala de 8 — `4 8 12 16 24 32 40 48 64 80 96 128 160`. Nada fuera de esa lista.

### Escalas tonales completas

```
turquesa  50 #e1fffb · 100 #d2fffc · 200 #c0fffb · 300 #91f1df · 400 #5bd4c0
          500 #00b8a3 (BrandBook) · 600 #009a87 · 700 #007c6b · 800 #006152
          900 #00463a · 950 #003328

azul      50 #bed8ff · 100 #a5ceff · 200 #85bbff · 300 #60a2ff · 400 #3885ff
          500 #0068ff (BrandBook) · 600 #0050e0 · 700 #0039bf · 800 #00239f
          900 #00097f · 950 #000065

verde     400 #b0c1bb · 500 #91a49e · 600 #748882 · 700 #586e67 · 800 #3e554e
          900 #253d36 (BrandBook) · 950 #142b25

lima      300 #e1f560 · 400 #c0d400 (BrandBook) · 500 #a2b400 · 600 #859500
          700 #6a7700 · 800 #505b00 · 900 #384100

neutro    50 #f2f7f5 · 100 #e7ecea · 200 #d3d8d6 · 300 #b8c0bd · 400 #9ca4a1
          500 #838b88 · 600 #68736f · 700 #515b58 · 800 #3c4542 · 900 #27312e
          950 #18221f
```

Los neutros están matizados hacia el verde de marca. Nunca usar grises puros tipo `#888` o `#ccc`.

---

## 4. Contraste — pares permitidos

Todo lo de esta tabla está medido y pasa. Lo que no está aquí, no se usa.

| Combinación | Ratio | Nivel |
|---|---|---|
| `#253d36` sobre blanco | 11.67 | AAA |
| `#515b58` sobre blanco | 7.03 | AAA |
| `#68736f` sobre blanco | 4.92 | AA |
| `#007c6b` sobre blanco | 5.13 | AA |
| `#0050e0` sobre blanco | 6.51 | AA |
| `#0050e0` sobre `#f2f7f5` | 6.02 | AA |
| blanco sobre `#006152` | 7.42 | AAA |
| blanco sobre `#253d36` | 11.67 | AAA |
| blanco sobre `#0068ff` | 4.75 | AA |
| `#253d36` sobre `#c0d400` | 7.03 | AAA |
| `#006152` sobre `#e1fffb` | 7.03 | AAA |
| `#0039bf` sobre `#bed8ff` | 6.18 | AA |

### Prohibido

- **`#00b8a3` como texto sobre claro** — 2.50, falla todo. Para texto turquesa usar `#007c6b`.
- **`#c0d400` como texto sobre claro** — 1.66, falla todo. El lima solo existe como fondo, o como texto sobre verde oscuro.
- **`#0068ff` como texto sobre `#f2f7f5`** — 4.38, se queda corto. Sobre fondo sutil el link usa `#0050e0`.
- Quitar el `outline` de foco sin reemplazarlo por un anillo visible.

---

## 5. Tipografía

**Titulares:** Neue Haas Grotesk Display, tracking -2% (a -3% en 72px o más), peso 700–900.
**Cuerpo:** Neue Haas Grotesk Text, peso 400, line-height 150–155%.
**Fallback libre:** Source Sans 3. Nunca Inter, Roboto ni la fuente por defecto del sistema.

| Rol | Tamaño | Peso | Tracking |
|---|---|---|---|
| Hero | 88–96 | Black | -3% |
| Título de sección | 56 | Bold | -2% |
| Subsección | 40 | Bold | -2% |
| Título de card | 26–32 | Bold | -1 a -2% |
| Cuerpo desktop | 18 | Regular | 0 |
| Cuerpo mínimo móvil | 16 | Regular | 0 |
| Eyebrow / etiqueta | 14 | Bold | +8%, MAYÚSCULAS |

Medida de línea: máximo 70 caracteres en cuerpo, máximo 3 líneas en hero.

---

## 6. Componentes

### Botón
Altura 48px, radio 4px, padding lateral 28px, flecha `→` a la derecha del texto.

- **Primario:** fondo `--rn-action-primary-bg`, texto blanco. Hover: `--rn-action-primary-bg-hover`.
- **Secundario:** sin fondo, borde 2px `#253d36`, texto `#253d36`. Hover: fondo `#f2f7f5`.
- **En superficie ink:** fondo lima `#c0d400`, texto `#253d36`.
- **En superficie marca:** fondo blanco, texto `#006152`.

Un solo primario por bloque. El área de toque nunca baja de 44px.

### Tag
Radio 4px, 14px Bold, tracking +2%.
Los tags de **estado** (Activo, Cerrado) llevan un punto de 8px. Los tags de **categoría** no lo llevan. Así se distingue estado de tema sin leer.

### Tab de filtro
El filtro activo es un bloque sólido `#253d36` con texto blanco. El inactivo es transparente con borde 1px `#d3d8d6`. Nunca un subrayado tenue: si no se ve de un vistazo qué filtro está puesto, el filtro no sirve.

### Campo de búsqueda
Borde 1px `#838b88` en reposo. En foco, anillo 2px `#0068ff`. Radio 4px, altura 48px.

### Card de oferta
Radio 8px, borde 1px `#d3d8d6`, **sin sombra**.
Portada de 170px en color plano de marca con el exponente `ⁿ` al 16% — no foto de stock.
Orden interno: tags → entidad aliada (eyebrow) → título → descripción → línea de 1px → fecha + acción.
Estado **Cerrado**: portada en `#f2f7f5`, tag cerrado, y el botón se reemplaza por un link "Ver resultados →". Nunca dejar un botón muerto.

### Card de empresa
Radio 8px, borde 1px. El logo va dentro de un cuadro de superficie sutil para que logos de distinto formato no descuadren la grilla. 4 por fila.

### KPI
Cifra en Black 44–56px con tracking -3%, etiqueta en 16px. Sin icono: el número ya es el icono.

---

## 7. Movimiento

Transiciones de 150–200ms, `ease-out`. Solo `opacity`, `background-color`, `border-color` y `transform: translateY()` de máximo 2px.

Prohibido: parallax, fade-in al hacer scroll en cada sección, contadores animados, carruseles automáticos.

---

## 8. Lista negra

Nada de esto entra en una página de Ruta N, sin importar cómo se pida:

- Glassmorphism, `backdrop-filter`, navegación flotante translúcida
- Sombras para dar profundidad (`box-shadow` de elevación)
- Gradientes como color de marca
- Botones tipo píldora (`border-radius: 999px`)
- Grises puros fuera de la escala de neutros
- Iconos rellenos o con degradado — solo lineales de 1.5px en grilla de 24px
- Emoji como icono
- Fotos de stock de gente en traje dándose la mano
- Morado, teal o cualquier color fuera de la paleta
- El logo de Ruta N recoloreado, condensado o con las proporciones cambiadas. Área de reserva: 100px en digital
- Texto sobre fotografía sin una capa de color que garantice el contraste

---

## 9. Accesibilidad — mínimos no negociables

- Contraste 4.5:1 en texto normal, 3:1 en texto de 24px o más y en bordes de controles
- Foco visible siempre, con el anillo de 2px
- Área de toque mínima 44×44px
- Un solo `<h1>` por página y jerarquía de encabezados sin saltos
- Todo filtro y modal operable con teclado; `Escape` cierra el modal y devuelve el foco al disparador
- `alt` descriptivo en imágenes con contenido; `alt=""` en decorativas
- Las imágenes llevan `width` y `height` explícitos — sin eso se dispara el CLS

---

## 10. Motivo de marca

La "N" de Ruta N es un exponente matemático: una ruta elevada al infinito. El superíndice `ⁿ` se puede usar como elemento gráfico suelto — detrás del hero como marca de agua grande, como marcador de sección, o en la portada de una card. Lo que no se puede es modificar el logo.