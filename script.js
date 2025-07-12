const menuToggle = document.querySelector('#menu-toggle');
const navBar = document.querySelector('.nav-bar');
const icon = menuToggle.querySelector('i');
function toggleMenu(){
  navBar.classList.toggle('active');
if(icon.classList.contains('bx-menu')){
icon.classList.remove('bx-menu');
icon.classList.add('bx-x');
  }
  else{
    icon.classList.remove('bx-x');
    icon.classList.add('bx-menu');
  }
}
 menuToggle.addEventListener('click' , ()=>{
  toggleMenu();
 })
// Scroll animation trigger
const animatedElements = document.querySelectorAll('.anim');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Remove if you want repeat animations
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => observer.observe(el));
