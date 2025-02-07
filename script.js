document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector('.carousel');
    let index = 0;
  
    function nextSlide() {
      index++;
      if (index >= carousel.children.length) {
        index = 0;
      }
      updateCarousel();
    }
  
    function updateCarousel() {

      const offset = -index * 320; 
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    setInterval(nextSlide, 3000);
  });
  