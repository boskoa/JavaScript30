const options = {
  root: null,
  rootMargin: "200px",
  threshold: 1,
};

const images = document.querySelectorAll(".image-container");

images.forEach((i) => {
  const observer = new IntersectionObserver((targets) => {
    const [target] = targets;
    const classes = Array.from(i.firstChild.classList);
    if (target.isIntersecting) {
      i.firstChild.classList.add("image-enter");
    } else {
      i.firstChild.classList.remove("image-enter");
    }
  }, options);
  observer.observe(i);
});
