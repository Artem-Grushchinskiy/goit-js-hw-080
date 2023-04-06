import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
  .map(image => {
    const { preview, original, description } = image;
    return `
            <li class="gallery__item">
                <a class="gallery__link" href='${original}'>
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
                </a>
            </li>`;
  })
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryMarkUp);
const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
lightBox.refresh();
// console.log(galleryItems);
