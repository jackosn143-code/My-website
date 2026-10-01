function checkScroll() {
 const elements = document.querySelectorAll('.links');

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);