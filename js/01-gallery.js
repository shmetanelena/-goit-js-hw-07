import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
    .map(
        item =>
            `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
</div>`
    )
    .join('');

const closeOnEscape = e => {
    e.preventDefault();
    if (e.key === 'Escape') {
        instance.close();
    }
};

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
    onShow: () => {
        document.addEventListener('keydown', closeOnEscape);
    },
    onClose: () => {
        document.removeEventListener('keydown', closeOnEscape);
    },
});

const instanceImageEl = instance.element().querySelector('img');

galleryEl.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    instanceImageEl.src = e.target.dataset.source;
    instance.show();
});
