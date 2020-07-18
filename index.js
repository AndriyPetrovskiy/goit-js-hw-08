import gallery from './gallery-items.js';
    
const lightbox = document.querySelector('.js-lightbox');
const ligthImage = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('[data-action="close-lightbox"]');
const listGalleryRef = document.querySelector('.js-gallery');



function getElementByGallery(array, place) {
    for(let item of array) {
        const liRef = document.createElement('li');
        const aRef = document.createElement('a');
        const imgRef = document.createElement('img');
        
        imgRef.setAttribute('src', item.preview);
        imgRef.setAttribute('data-source', item.original);
        imgRef.setAttribute('alt', item.description);

        liRef.append(aRef);
        aRef.append(imgRef);
        place.append(liRef);
    };
};

const getOpenModale = (event) => {
    if (event.target.nodeName === 'IMG') {
        lightbox.classList.add('is-open');
        ligthImage.src = event.target.getAttribute('data-source');
        window.addEventListener('keydown', onEscapePress);
    }
    return;
}

function getCloseModal () {
    lightbox.classList.remove('is-open');
    ligthImage.src = '';
    window.removeEventListener('keydown', onEscapePress);
}

function onEscapePress (event) {
    if(event.code === 'Escape') {
        getCloseModal();
    }
};


getElementByGallery(gallery, listGalleryRef);
closeModal.addEventListener('click', getCloseModal);
listGalleryRef.addEventListener('click', getOpenModale);
