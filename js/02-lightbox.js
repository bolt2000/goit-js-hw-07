import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ul = document.querySelector('.gallery');
const cardsMarkup = creatImageCards(galleryItems);
ul.insertAdjacentHTML('beforeend', cardsMarkup);



function creatImageCards(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
       <a
       class="gallery__item"
       href="${original}"
       >
       <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
       >
       </a>
        `;
    }).join('');
}


// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });



const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});