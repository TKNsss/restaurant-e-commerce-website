export function activeHeaderMenu() {
  const checked = document.querySelector(".check");
  const nav = document.querySelector(".nav");

  checked.addEventListener("click", () => {
    nav.classList.toggle(["nav--visible"]);
  });
}

export function activeFooterContent() {
  const footerBtn = document.querySelectorAll(".btn-toggle");

  footerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const targetContent = document.getElementById(targetId);

      targetContent.classList.toggle("footer__content--visible");
    });
  });
}