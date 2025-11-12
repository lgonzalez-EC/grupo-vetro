# Arreglar Carrusel de Marcas

## Información Recopilada
- El carrusel de marcas en el footer usa una animación CSS pura con @keyframes scroll.
- En js/main.js hay un script Swiper que usa clase '.brand-swiper' (incorrecta), debería ser '.brand-carousel'.
- La estructura HTML actual no es compatible con Swiper (usa .brand-carousel-inner con .brand-box).

## Plan
- [ ] Editar index.html: Cambiar estructura del carrusel para usar swiper-wrapper y swiper-slide.
- [ ] Editar js/main.js: Cambiar clase de '.brand-swiper' a '.brand-carousel' y ajustar configuración Swiper.
- [ ] Editar css/style.css: Quitar animación CSS de .brand-carousel y .brand-carousel-inner.

## Archivos Dependientes
- index.html (estructura del carrusel)
- js/main.js (script Swiper)
- css/style.css (estilos del carrusel)

## Seguimiento de Progreso
- [ ] Paso 1: Editar HTML
- [ ] Paso 2: Editar JS
- [ ] Paso 3: Editar CSS
- [ ] Paso 4: Probar funcionalidad
