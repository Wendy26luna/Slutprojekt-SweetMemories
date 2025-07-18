// active pictures
const slides = document.querySelectorAll(".slide");
let index = 0;
function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
setInterval(showNextSlide, 3000);
// show contact information
document.addEventListener('DOMContentLoaded', ()=>{
    const contactToggle = document.getElementById('contact-toggle');
    const contactMenu = document.getElementById('contact-menu');
    contactToggle.addEventListener('click', (e)=>{
        e.preventDefault();
        contactMenu.style.display = contactMenu.style.display === 'block' ? 'none' : 'block';
    });
    // closes the contact information when we do click out
    document.addEventListener('click', (e)=>{
        if (!contactToggle.contains(e.target) && !contactMenu.contains(e.target)) contactMenu.style.display = 'none';
    });
});

//# sourceMappingURL=Slutprojekt.672d4772.js.map
