// Huang YiWei Attorney Website

document.addEventListener("DOMContentLoaded", () => {

    console.log("Huang YiWei Attorney Website Loaded");

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            const navbar = document.querySelector(".navbar");

            if(window.innerWidth < 768){

                navbar.classList.remove("open");

            }

        });

    });

});

// Smooth Fade In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.consult-card,.profile-image")
.forEach(el => {

    observer.observe(el);

});
