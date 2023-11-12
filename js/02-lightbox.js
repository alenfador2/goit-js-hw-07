
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
for (const item of galleryItems) {
    const image = `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`;
    gallery.insertAdjacentHTML('beforeend', image);

}
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

function handleClick(event) {
    event.preventDefault();
    lightbox.open();
}
gallery.addEventListener('click', handleClick);


function closeLigthbox() {
    const visibility = lightbox.visible();
    if (visibility === true) {
        lightbox.close();
        }
}
    
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        closeLigthbox();
    }
})
console.log(lightbox.visible);


