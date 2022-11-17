// Dynaimc Nav
let sections = Array.from(document.querySelectorAll("body > section")).map(
  (ele) => ele.id
);
let navUl = document.querySelector("nav ul");
let toggler = document.querySelector("nav .toggler");


for (section of sections) {
  let navElements = document.createElement("li");
  let navlinks = document.createElement("a");
  navlinks.href = `#${section}`;
  navElements.classList = "link"
  navElements.onclick = () => navlinks.click();
  navlinks.innerText = section.split("-").join(" ");
  navElements.style.width = navUl.clientWidth / sections.length;
  navElements.append(navlinks);
  document.querySelector("nav ul").appendChild(navElements);
}

let nav = navUl.parentNode;
let navElements = document.querySelectorAll("nav ul li");



onscroll = () => {
  if (scrollY > 50) {
    nav.style.backgroundColor = "var(--secColor)";
    nav.style.color = "var(--mainColor)";
    Array.from(toggler.children).forEach(
      (ele) => (ele.style.backgroundColor = "var(--mainColor)")
    );
    navElements.forEach((ele) => ele.classList.add("scrolled"));
  } else {
    navElements.forEach((ele) => ele.classList.remove("scrolled"));
    nav.style.backgroundColor = "transparent";
    nav.style.color = "var(--secColor)";
    Array.from(toggler.children).forEach(
      (ele) => (ele.style.backgroundColor = "var(--secColor)")
    );
  }
};

toggler.onclick = () => {
  navUl.classList.toggle("active");
  toggler.classList.toggle("active");
};
// End Dynamic Nav

let slider = document.querySelector("section > article#gallary-slider"),
  items = Array.from(slider.children),
  cloned = Array.from(items.map((ele) => ele.cloneNode(true))),
  currtransform = 0,
  itemWidth = 0,
  nexts = 0,
  ccc = Math.floor(window.innerWidth / items[0].clientWidth);
  cloned.map((ele) => slider.append(ele));

function next() {
  if (nexts % (ccc - 2) == 0 && nexts !== 0) {
    cloned.map((ele) => slider.append(ele));
    cloned = Array.from(items.map((ele) => ele.cloneNode(true)));
  }
  nexts++;
  nexteles = Array.from(slider.children);

  for (let i = 0; i < nexteles.length; i++) {
    const ele = nexteles[i];
    itemWidth = ele.clientWidth;
    ele.style.transform = `translateX(-${itemWidth + currtransform}px)`;
  }
  currtransform += itemWidth;
}

let intt = setInterval(next, 1500);

slider.onmouseenter = ()=> clearInterval(intt)
slider.onmouseleave = ()=> intt = setInterval(next, 3000);

let link = document.querySelectorAll(".link")
let sectionzzz = document.querySelectorAll("section")

function activeMenu(){
  let len = sectionzzz.length;  
  while (--len && window.scrollY + 20 < sectionzzz[len].offsetTop) { }
  link.forEach(li => li.classList.remove("active"))
  link[len].classList.add("active")
}

activeMenu();
window.addEventListener("scroll", activeMenu)
