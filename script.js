document.addEventListener("DOMContentLoaded", function() {

  // ---------- DETAIL PRODUK DENGAN FOTO SPESIFIK ----------
  const produkData = {
    sapi: [
      {name: "Cuberoll", img: "images/sapi-cuberoll.jpg"},
      {name: "Saikoro", img: "images/sapi-saikoro.jpg"},
      {name: "Tomahawk", img: "images/sapi-tomahawk.jpg"}
    ],
    ayam: [
      {name: "Dada", img: "images/ayam-dada.jpg"},
      {name: "Paha Atas", img: "images/ayam-pahaatas.jpg"},
      {name: "Sayap", img: "images/ayam-sayap.jpg"}
    ],
    kambing: [
      {name: "Kambing Iga", img: "images/kambing-iga.jpg"},
      {name: "Kambing Paha", img: "images/kambing-paha.jpg"}
    ]
  };

  const kategoriCards = document.querySelectorAll(".kategori-card");
  const detailProduk = document.getElementById("detail-produk");

  kategoriCards.forEach(card => {
    card.addEventListener("click", () => {
      const type = card.dataset.type;
      detailProduk.innerHTML = ""; // kosongkan dulu
      produkData[type].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("potongan-card");
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <p>${item.name}</p>
        `;
        detailProduk.appendChild(div);
      });
      detailProduk.scrollIntoView({behavior: "smooth"});
    });
  });

  // ---------- BACK TO TOP ----------
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 200) backToTop.style.display = "block";
    else backToTop.style.display = "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
  });

  // ---------- FADE-IN ----------
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
