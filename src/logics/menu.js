const toggleMenu = () => {
  const menu = document.querySelector(".menu-phone");
  const main = document.querySelector("main");
  const section = document.querySelectorAll("section");
  if (document.querySelector(".results")) {
    const results = document.querySelector(".results");
    results.classList.toggle("hidden");
  }
  const elements = [...section, main];
  menu.classList.toggle("hidden");
  elements.forEach((element) => element.classList.toggle("hidden"));
};

export { toggleMenu };
