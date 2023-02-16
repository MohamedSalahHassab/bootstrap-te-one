let allLi1 = document.querySelectorAll(".group-0 li a");
allLi1.forEach((li) =>
  li.addEventListener("click", function (l) {
    allLi1.forEach((q) => q.classList.remove("active"));
    l.target.classList.add("active");
  })
);
let allLi2 = document.querySelectorAll(".group-1 li");
allLi2.forEach((li) =>
  li.addEventListener("click", function (l) {
    allLi2.forEach((q) => q.classList.remove("active-li"));
    l.target.classList.add("active-li");
  })
);
