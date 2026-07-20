// ================= NAVBAR =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


// ================= FADE ANIMATION =================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }else{

            entry.target.classList.remove("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach((element)=>{

    observer.observe(element);

});



// ================= HERO SLIDER =================

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let currentSlide = 0;



function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}



next.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

});



prev.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    showSlide(currentSlide);

});



// Auto Slide

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},5000);



// Dot Click

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

    });

});

const menu = document.getElementById("fullscreenMenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {

    menu.classList.add("active");

    menuBtn.classList.add("active");

    document.body.style.overflow="hidden";

    navbar.style.opacity="0";

});

closeBtn.addEventListener("click", () => {

    menu.classList.remove("active");

    menuBtn.classList.remove("active");

    document.body.style.overflow="";

    navbar.style.opacity="1";

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        document.body.style.overflow="";

        navbar.style.opacity="1";

    }

});

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

// ===== Navbar blur on scroll =====

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }

});