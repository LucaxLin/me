window.addEventListener("mousemove", addEffetDebounce);
let timer = null;
function addEffetDebounce(e) {
  if (!timer) {
    addEffect(e);
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, 50);
  }
}
function addEffect(ev) {
  const allCard = document.querySelectorAll(".theCard");
  allCard.forEach((dom) => {
    const blob = dom.querySelector(".blob");
    const fblob = dom.querySelector(".fblob");
    const rec = fblob.getBoundingClientRect();
    blob.animate(
      [
        {
          transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${
            ev.clientY - rec.top - rec.height / 2
          }px)`,
        },
      ],
      {
        duration: 300,
        fill: "forwards",
      }
    );
  });
}
