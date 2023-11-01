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

let galeria = document.getElementById("galeria");

galeria.addEventListener("mouseenter", () => {
  sr.reveal(".galeria", { duration: 1000 });
});
