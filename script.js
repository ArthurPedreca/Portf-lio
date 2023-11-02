window.sr = ScrollReveal({ reset: true });

sr.reveal(".apresentacao", {
  duration: 1000,
  delay: 500,
  origin: "left",
  distance: "600px",
});

sr.reveal(".skills", {
  duration: 1000,
  delay: 500,
  origin: "right",
  distance: "600px",
});

sr.reveal("#sobre", {
  duration: 1000,
  rotate: {
    x: 0,
    y: 80,
    z: 0,
  },
});

// Para os cards
var cardConfig = {
  duration: 1000,
  origin: "left",
  distance: "200px",
};

var fillConfig = {
  duration: 1000,
  origin: "left",
  distance: "600px",
};

for (let i = 0; i < 10; i++) {
  sr.reveal(`.fill${i}`, {
    ...fillConfig,
    delay: 700 + (i - 1) * 70,
  });
}

for (let i = 1; i <= 10; i++) {
  sr.reveal(`#card_${i}`, {
    ...cardConfig,
    delay: 200 + (i - 1) * 50,
  });
}


const galerias = document.querySelectorAll(".galeria");

galerias.forEach(galeria => {
  galeria.addEventListener("mouseenter", function () {
    let texto = galeria.querySelector(".texto");
    let ver_site = galeria.querySelector(".ver_site");

    texto.style.opacity = "1";
    texto.style.transform = "translateY(0px)";

    ver_site.style.opacity = "1";
    ver_site.style.transform = "translateY(0px)";
  });

  galeria.addEventListener("mouseleave", function () {
    let texto = galeria.querySelector(".texto");
    let ver_site = galeria.querySelector(".ver_site");

    texto.style.opacity = "0";
    texto.style.transform = "translateY(-300px)";

    ver_site.style.opacity = "0";
    ver_site.style.transform = "translateY(300px)";
  });
});

sr.reveal('.trabalhos', {
  duration: 1000,
  delay: 500,
  distance: '100px',
  rotate: {
    x: 0,
    y: 50,
    z: 0
  }
})

sr.reveal('.custom-form', {
  duration: 1000,
  scale: 0.3
})

sr.reveal('.pergunta', {
  duration: 1000,
  origin: 'right',
  distance: '500px'
})

sr.reveal('.fab', {
  duration: 500,
  distance: '300px',
  origin: 'top'
})




