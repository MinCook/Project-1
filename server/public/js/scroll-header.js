window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.window.scrollY > 0) header.classList.add("animated");
    else header.classList.remove("animated");
  });
