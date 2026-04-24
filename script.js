// Dark Mode
function toggleMode(){
    document.body.classList.toggle("light");
}

// Typing Effect
new Typed("#typing", {
    strings: ["Web Developer", "Programmer", "Tech Enthusiast"],
    typeSpeed:50,
    backSpeed:30,
    loop:true
});

// Scroll Animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
