import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
for (const item of galleryItems) {
    const image = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    gallery.insertAdjacentHTML('beforeend', image);

}
let lightboxInstance;
function openLightbox(source) {
    lightboxInstance = basicLightbox.create(`<img src = "${source}" alt = "Original image">`);
    lightboxInstance.show();
}

function handleClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const source = event.target.dataset.source;
        openLightbox(source);
    }
}
gallery.addEventListener('click', handleClick);
// Chodziło o to że ten listener musi być przy tej funkcii kturą wywoła? 
// Czyli dla większej czytelności kody, tak ? Z góry dziękuję za odpowiedż:)
function closeLigthbox() {
    const visibility = lightboxInstance.visible();
    if (visibility === true) {
        lightboxInstance.close();
        }
    }

document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        closeLigthbox();
    }
})
console.log(basicLightbox.visible);

