const images = document.querySelectorAll(".image");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    if (!images[i].classList.contains("active")) {
      document.querySelector(".active").classList.remove("active");
      images[i].classList.add("active");
    }
  });
}
