function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.body.classList.add("menu-open"); 
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.body.classList.remove("menu-open"); 
}


document.addEventListener('DOMContentLoaded', () => {
    const piles = {
        pile1: document.querySelectorAll('.pile1 .pile-img'),
        pile2: document.querySelectorAll('.pile2 .pile-img'),
        pile3: document.querySelectorAll('.pile3 .pile-img')
    };

    const modal = document.getElementById('photo-modal'); 
    const modalImg = document.getElementById('modal-img');
    const caption = modal.querySelector('.caption');
    const closeModal = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    let currentPile = null; 

    function openModal(pile, index) {
        modal.style.display = 'block';
        currentIndex = index;
        currentPile = pile;
        updateModal();
    }

    function closeModalFunc() {
        modal.style.display = 'none';
    }

    function updateModal() {
        modalImg.src = currentPile[currentIndex].src;
        caption.innerText = currentPile[currentIndex].alt;
    }

    function navigateSlides(direction) {
        const pileLength = currentPile.length;
        currentIndex = currentIndex + direction;

        if (currentIndex < 0) {
            currentIndex = 0; 
        } else if (currentIndex >= pileLength) {
            closeModalFunc(); 
        } else {
            updateModal(); 
        }
    }

    Object.keys(piles).forEach((pileName) => {
        const pileImages = piles[pileName];

        pileImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openModal(pileImages, index); 
            });
        });
    });

    closeModal.addEventListener('click', closeModalFunc);

    prevBtn.addEventListener('click', () => navigateSlides(-1));
    nextBtn.addEventListener('click', () => navigateSlides(1));

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});










