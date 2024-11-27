$(document).ready(function () {
    let slides = $(".container-slideshow .slide");
    let currentIndex = 0;

    // Function to show the current slide and hide others
    function showSlide(index) {
        slides.hide(); // Hide all slides
        slides.eq(index).fadeIn(); // Show the current slide
    }

    // Function to handle next and previous slide changes
    function plusSlides(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length; // Ensure index wraps around
        showSlide(currentIndex);
    }

    // Initial call to show the first slide
    showSlide(currentIndex);

    // Event listeners for buttons
    $(".next").on("click", function () {
        plusSlides(1); // Move to the next slide
    });

    $(".prev").on("click", function () {
        plusSlides(-1); // Move to the previous slide
    });

    // this is for the clicking on the list elements
     // Event listener for list items
     $("#list-images a").on("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        let slideIndex = $(this).data("slide"); // Get the slide index from the data-slide attribute
        showSlide(slideIndex); // Show the corresponding slide
    });
});
