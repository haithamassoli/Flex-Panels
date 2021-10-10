let panels = document.querySelectorAll(".panel");

function addOpen() {
  this.classList.toggle("open");
}

function anim(e) {
  e.propertyName.includes("flex") ? this.classList.toggle("open-active") : "";
}

panels.forEach((e) => e.addEventListener("click", addOpen));
panels.forEach((e) => e.addEventListener("transitionend", anim));
