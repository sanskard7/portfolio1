// Dark mode
function toggleMode(){
    document.body.classList.toggle("light");
}

// Typing
new Typed("#typing", {
    strings: ["Web Developer", "Programmer", "Tech Enthusiast"],
    typeSpeed:50,
    backSpeed:30,
    loop:true
});

// Scroll animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});

// EmailJS setup
(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // ✏️
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
    .then(() => {
        alert("Message Sent ✅");
    }, (error) => {
        alert("Error ❌");
    });
});