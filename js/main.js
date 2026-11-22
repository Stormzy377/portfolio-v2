// CARROSSEL DE PROJETOS
(function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".slide"));
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dotsBox = document.getElementById("dots");
  let current = 0;

  // Criar um ponto por slide
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `Ir para o projeto ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
    return dot;
  });

  function goTo(index) {
    // Ciclo: depois do último volta ao primeiro, e vice-versa
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
    });
    dots.forEach((dot, i) => {
      if (i === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  // Teclado: setas esquerda/direita quando o foco está dentro do carrossel
  const region = carousel.closest(".projects");
  region.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goTo(current - 1);
    }
    if (e.key === "ArrowRight") {
      goTo(current + 1);
    }
  });

  goTo(0);
})();
