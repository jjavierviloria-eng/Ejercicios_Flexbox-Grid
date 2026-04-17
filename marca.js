// =========================================
//                  MARCA
// =========================================
const btnMarca = document.getElementById('btn-marca');
const textoMarca = document.getElementById('texto-marca');
const audioMarca = document.getElementById('audio-marca');

function activarMarca() {
  const yaActivo = btnMarca.classList.contains('activo');

  if (!yaActivo) {
    btnMarca.style.color = '#8b0000';
    btnMarca.classList.add('activo');

    textoMarca.innerText = '¡La Marca del Sacrificio ha sido activada! Los demonios te perseguirán esta noche...';
    textoMarca.style.color = '#8b0000';

    if (audioMarca) {
      audioMarca.currentTime = 0;
      audioMarca.play();
    }
  } else {
    btnMarca.style.color = '';
    btnMarca.classList.remove('activo');
    textoMarca.innerText = ""
    textoMarca.style.color = '';

    if (audioMarca) {
      audioMarca.pause();
      audioMarca.currentTime = 0;
    }
  }
}

btnMarca.addEventListener('click', activarMarca);


// =========================================
//  CARRUSEL DE GALERÍA
// =========================================
const slides = document.querySelectorAll('.carrusel-slide');
const btnPrev = document.getElementById('carrusel-prev');
const btnNext = document.getElementById('carrusel-next');
const descripcionBox = document.getElementById('carrusel-descripcion');
const tituloBox = document.getElementById('carrusel-titulo');
const contadorBox = document.getElementById('carrusel-contador');

let indiceActual = 0;

function mostrarSlide(nuevo) {
  slides[indiceActual].classList.remove('activo');

  indiceActual = (nuevo + slides.length) % slides.length;

  slides[indiceActual].classList.add('activo');

  const slide = slides[indiceActual];
  tituloBox.innerText    = slide.dataset.titulo;
  descripcionBox.innerText = slide.dataset.descripcion;
  contadorBox.innerText  = (indiceActual + 1) + ' / ' + slides.length;
}

if (slides.length > 0) {
  slides[0].classList.add('activo');
  tituloBox.innerText      = slides[0].dataset.titulo;
  descripcionBox.innerText = slides[0].dataset.descripcion;
  contadorBox.innerText    = '1 / ' + slides.length;
}

btnPrev.addEventListener('click', () => mostrarSlide(indiceActual - 1));
btnNext.addEventListener('click', () => mostrarSlide(indiceActual + 1));

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft')  mostrarSlide(indiceActual - 1);
  if (e.key === 'ArrowRight') mostrarSlide(indiceActual + 1);
});
