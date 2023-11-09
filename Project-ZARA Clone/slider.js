let currentIndex = 0;
let slider = document.getElementById('slider-imgs');
let slides = document.getElementsByClassName('slider-img-btn');

    function showSlide(index) {
       

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        let translateValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }