// getting the reference from html page
let btn_hover = document.querySelectorAll('.purchase_btn');
let price_style = document.querySelectorAll('.text_style');
let primary_heading = document.querySelectorAll('.pm');

// looping
for (let index = 0; index < btn_hover.length; index++) {

    // when mouse enter in the button area
    btn_hover[index].addEventListener("mouseenter", () => {
            if (index == 0) {
                price_style[index].style.color = " rgb(92, 181, 117)";
                primary_heading[index].style.color = " rgb(92, 181, 117)";
            } else if (index == 1) {
                price_style[index].style.color = " rgb(92, 181, 117)";
                primary_heading[index].style.color = " rgb(92, 181, 117)";
            } else {
                price_style[index].style.color = " rgb(92, 181, 117)";
                primary_heading[index].style.color = " rgb(92, 181, 117)";
            }
        })
        // when mouse leave in the button area

    btn_hover[index].addEventListener("mouseleave", () => {
        if (index == 0) {
            price_style[index].style.color = "black";
            primary_heading[index].style.color = "black";
        } else if (index == 1) {
            price_style[index].style.color = "black";
            primary_heading[index].style.color = "black";
        } else {
            price_style[index].style.color = "black";
            primary_heading[index].style.color = "black";
        }
    })
}

// slider
let slider_cards = document.getElementsByClassName('mySlides');


for (let index = 0; index < slider_cards.length; index++) {
    slider_cards[index].addEventListener("mouseenter", () => {
        slider_cards[index].style.backgroundColor = " rgba(70, 156, 236, 0.74)";
        slider_cards[index].getElementsByTagName('p')[0].style.color = "#fff";
        slider_cards[index].getElementsByTagName('p')[1].style.color = "#fff";
    })
    slider_cards[index].addEventListener("mouseleave", () => {
        slider_cards[index].style.backgroundColor = "white";
        slider_cards[index].getElementsByTagName('p')[0].style.color = "black";
        slider_cards[index].getElementsByTagName('p')[1].style.color = "black";

    })

};

// slider javascript

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-container");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("active");
}
// adding functionality in next and previous buttons
let prev = document.querySelector('.prev');
prev.addEventListener("click", () => {
    showSlides(slideIndex = slideIndex - 1);
});
document.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex = slideIndex + 1);
});

//javscript for three dots
let dot = document.getElementsByClassName('dot');
for (let index = 0; index < dot.length; index++) {
    dot[index].addEventListener("click", () => {
        if (index == 0) {
            currentSlide(1);
        } else if (index == 1) {
            currentSlide(2);
        } else {
            currentSlide(3);
        }
    })
};

// scroll button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// when user click on button
mybutton.addEventListener("click", topFunction);

// dealing with the hamburger menu
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener("click", () => {
    let header = document.getElementsByTagName('header');
    if (document.getElementsByClassName('left')[0].style.visibility == "visible") {
        document.getElementsByClassName('left')[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName('left')[0].style.visibility = "visible";
    }

    if (document.getElementsByClassName('menu')[0].style.visibility == "visible") {
        document.getElementsByClassName('menu')[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName('menu')[0].style.visibility = "visible";
    }
    header[0].classList.toggle('hamburger_head');
})