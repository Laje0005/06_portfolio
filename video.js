// Reference til begge mine videoelementer
var videoHomeHeroDesktop = document.getElementById("hero-video-home");
var videoHomeHeroMobile = document.getElementById("hero-video-home-mobil");

// Lytter efter hvornår videoen slutter
videoHomeHeroDesktop.addEventListener("timeupdate", function () {
  // Hvis afspilningstiden når 9.5 sekunder, skal videoen pauses
  if (this.currentTime >= 9.5) {
    this.pause();
  }
});

// Lyt efter tidspunktet, hvor videoen slutter
videoHomeHeroMobile.addEventListener("timeupdate", function () {
  // Hvis afspilningstiden når 9.5 sekunder, skal videoen pauses
  if (this.currentTime >= 9.5) {
    this.pause();
  }
});
