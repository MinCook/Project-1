let url = new URL(window.location.href);
const buttonPage = document.querySelectorAll("[page-number]");
buttonPage.forEach((button) => {
  button.addEventListener("click", (e) => {
    const page = button.getAttribute("page-number");
    page > 0
      ? url.searchParams.set("page", page)
      : url.searchParams.delete("page");
    window.location.href = url.href;
  });
});