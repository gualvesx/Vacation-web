let currentIndex = 0;
let isPlaying = true;
let carouselInterval;

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const pausePlayButton = document.getElementById('pause-play');

function openModal(index) {
    currentIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[currentIndex].src;
    startCarousel();
}

function closeModal() {
    modal.style.display = 'none';
    stopCarousel();
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
}

function startCarousel() {
    carouselInterval = setInterval(() => {
        changeImage(1);
    }, 3000); // Altere o intervalo conforme necessário
    isPlaying = true;
    pausePlayButton.textContent = 'Pausar';
}

function stopCarousel() {
    clearInterval(carouselInterval);
    isPlaying = false;
    pausePlayButton.textContent = 'Reproduzir';
}

function toggleCarousel() {
    if (isPlaying) {
        stopCarousel();
    } else {
        startCarousel();
    }
}

// Adicione event listeners às imagens da galeria
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Adicione event listener para fechar o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalImg) {
        closeModal();
    }
});
