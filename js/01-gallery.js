import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const div = document.querySelector('.gallery')

const cardsMarkup = creatImageCards(galleryItems);
div.insertAdjacentHTML('beforeend', cardsMarkup);
div.addEventListener('click', onDivClick);


function creatImageCards(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
       <li>
       <img
       class="gallery__image"
       href="${original}"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
       >
       </li>
        `;
    }).join('');
}


function onDivClick(e) {
    e.preventDefault();

    const imageBigSize = e.target.classList.contains('gallery__image');

    if (!imageBigSize) {
        return;
    }
const instance = basicLightbox.create(`
    <h1 class="word">${e.target.alt}</h1>
	<img src="${e.target.dataset.source}">
`).show();
   
};







// function offDivClick() { 
// window.addEventListener('keydown', onEscKeyPress);
// };

// function onEscKeyPress(event) {
//     console.log(event);
// }
