// Troca o favicon consoante o modo (dark ou light)
function applyFavicon() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let favicon = document.querySelector("link[rel='icon']");

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    document.head.appendChild(favicon);
  }

  favicon.href = isDarkMode ? "img/Pyrus_favicon_darkMode.png" : "img/Pyrus_favicon_whiteMode.png";
}

// Corre na carga inicial
applyFavicon();

// Atualiza se o utilizador mudar o tema do sistema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyFavicon);

document.addEventListener("DOMContentLoaded", function() {
  const mainBlocks = document.querySelectorAll(".foco-main-block");
  const descriptions = document.querySelectorAll(".foco-descr");

  mainBlocks.forEach(block => {
    block.addEventListener("click", function() {
      const focoNumber = block.dataset.foco;
      const targetDesc = document.querySelector(`.foco-descr-${focoNumber}`);
      const arrowImg = block.querySelector(".down-arrow");

      // Se já estiver aberta, fecha e repõe a seta
      if (targetDesc.classList.contains("active")) {
        targetDesc.classList.remove("active");
        arrowImg.src = "img/Foco/Down Arrow.svg"; // ou arrowImg.classList.remove("rotate") se usares rotação
        return;
      }

      // Fecha todas as descrições e repõe todas as setas
      descriptions.forEach(desc => desc.classList.remove("active"));
      document.querySelectorAll(".down-arrow").forEach(img => {
        img.src = "img/Foco/Down Arrow.svg"; // ou img.classList.remove("rotate")
      });

      // Abre a selecionada e troca a seta
      targetDesc.classList.add("active");
      arrowImg.src = "img/Foco/Up Arrow.svg"; // ou arrowImg.classList.add("rotate")
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery1 = window.matchMedia("(max-width: 60.5em)");
  const mediaQuery2 = window.matchMedia("(max-width: 41.25em)");
  const mediaQuery3 = window.matchMedia("(max-width: 37.25em)");
  const mediaQuery4 = window.matchMedia("(max-width: 27.25em)");
  const sliderContent = document.querySelector(".missao-slider-content-inner");
  const slides = document.querySelectorAll(".missao-slider-content-inner > div");
  const prevBtn = document.querySelector(".slider-left-arrow");
  const nextBtn = document.querySelector(".slider-right-arrow");
  
  let slideWidth;
  let index = 0;

  function updateSlider() {
    sliderContent.style.transform = `translateX(-${index * slideWidth}rem)`;
  }

  function setSlideWidth() {
    if (mediaQuery4.matches){
      slideWidth = 13; // cada slide tem 13rem   
    }
    else if (mediaQuery3.matches){
      slideWidth = 16.7; // cada slide tem 16.7rem   
    }else if (mediaQuery2.matches) {
      slideWidth = 25; // cada slide tem 25rem 
    }else if (mediaQuery1.matches) {
      slideWidth = 30; // cada slide tem 30rem 
    }else{
      slideWidth = 16.7; // cada slide tem 16.7rem em desktop
    }
    updateSlider();
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault(); // impede o scroll
    index++;
    if (index >= slides.length) {
      index = 0; // volta ao início
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault(); // impede o scroll
    index--;
    if (index < 0) {
      index = slides.length - 1; // vai para o último
    }
    updateSlider();
  });

  // Inicializa e atualiza quando a media query muda
  setSlideWidth();
  if (mediaQuery4.matches){
    mediaQuery4.addEventListener("change", setSlideWidth);
  }
  else if (mediaQuery3.matches){
    mediaQuery3.addEventListener("change", setSlideWidth);
  }else if (mediaQuery2.matches){
    mediaQuery2.addEventListener("change", setSlideWidth);
  }
  else if (mediaQuery1.matches) {
    mediaQuery1.addEventListener("change", setSlideWidth);
  }

  // Auto-scroll functionality
  setInterval(() => {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    updateSlider();
  }, 5000); // scroll every 5 seconds
});

// Make mobile navigation

const body = document.querySelector("body");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-menu")

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
  body.classList.toggle("nav-open");
})


document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 51em)"); // mobile breakpoint
  const focoBlocks = document.querySelectorAll(".foco-main-block");
  const focoDescrs = document.querySelectorAll(".foco-descr");

  // Create placeholders to remember original positions
  const placeholders = new Map();
  focoDescrs.forEach(descr => {
    const placeholder = document.createComment("placeholder for " + descr.className);
    descr.parentNode.insertBefore(placeholder, descr);
    placeholders.set(descr, placeholder);
  });

  function moveDescrs(e) {
    if (e.matches) {
      // Mobile: move each descr after its block
      focoBlocks.forEach(block => {
        const focoNumber = block.dataset.foco;
        const descr = document.querySelector(`.foco-descr-${focoNumber}`);
        if (descr && descr.previousElementSibling !== block) {
          block.insertAdjacentElement("afterend", descr);
        }
      });
    } else {
      // Desktop: move them back to original position using placeholders
      focoDescrs.forEach(descr => {
        const placeholder = placeholders.get(descr);
        if (placeholder && placeholder.parentNode) {
          placeholder.parentNode.insertBefore(descr, placeholder.nextSibling);
        }
      });
    }
  }

  // Run once on load
  moveDescrs(mediaQuery);

  // Auto-refresh on resize
  mediaQuery.addEventListener("change", moveDescrs);
});

// Remove nav-open class when a nav link is clicked
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
    body.classList.remove("nav-open");
  });
});

// Abre e Fecha Política de Privacidade

const btnPrivacidade = document.getElementById("openPrivacidade");
const btnClosePrivacidade = document.querySelector("[name='priv-close-outline']")
btnPrivacidade.addEventListener('click', function(){
  headerEl.classList.toggle('open-privacidade');
  body.classList.toggle("open-privacidade");
})
btnClosePrivacidade.addEventListener('click', function(){
  headerEl.classList.toggle('open-privacidade');
  body.classList.toggle("open-privacidade");
})


// Form submission confirmation

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Stop default submit/reload

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Solicitação enviada com sucesso! Em breve será contactado pela equipa da PYRUS. ");
        form.reset(); // optional: clear form
      } else {
        alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("❌ Falha na ligação ao servidor.");
    }
  });
});

// Preloader fade out when page is fully loaded
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("fade-out");

  // remove preloader from DOM after fade
  setTimeout(() => {
    preloader.remove();
  }, 800); // match the CSS transition time
});
