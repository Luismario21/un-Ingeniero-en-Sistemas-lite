document.addEventListener("scroll", () => {
    const fases = document.querySelectorAll('.fase');
    fases.forEach(fase => {
      const position = fase.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 50) {
        fase.classList.add('visible');
      }
    });
  });