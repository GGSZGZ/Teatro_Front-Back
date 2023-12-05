document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carrusel-slide");

    function showSlide(index) {
        slides.forEach((slide) => (slide.classList.remove("active")));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentIndex);

    // Event listeners para los botones de siguiente y anterior
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    setInterval(nextSlide, 3000);
});
