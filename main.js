let ul = document.querySelector('.bullts')
let content = Array.from(document.querySelectorAll(".container .content"))
create()
let li = (document.querySelectorAll(".bullts li"))
let nBtn = document.querySelector(".nex")
let preBtn = document.querySelector(".pre")
let liact = document.querySelector(".activeli")
cheack()

li.forEach((e) => {
  e.addEventListener("click", () => {
    deleteAct()
    e.classList.add("activeli")
    content[e.getAttribute("data-order")].classList.add("active")
    cheack()
  })
});
nBtn.addEventListener("click", () => {
  liact = document.querySelector(".activeli")
  if (liact.nextElementSibling !== null) {
    li.forEach((e) => {
      if (e.classList.contains("activeli")) {
        deleteAct()
      }
    })
    liact.nextElementSibling.classList.add("activeli")
    content[liact.nextElementSibling.getAttribute("data-order")].classList.add("active")
  }
  cheack()
})
preBtn.addEventListener("click", () => {
  liact = document.querySelector(".activeli")
  if (liact.previousElementSibling !== null) {
    li.forEach((e) => {
      if (e.classList.contains("activeli")) {
        deleteAct()
      }
    })
    liact.previousElementSibling.classList.add("activeli")
    content[liact.previousElementSibling.getAttribute("data-order")].classList.add("active")
  }
  cheack()
})
function cheack() {
  li = Array.from(document.querySelectorAll(".bullts li"))
  if (document.querySelector('.activeli') !== li[li.length-1]) {
    nBtn.style = `opacity: 1;`
  } 
  if (document.querySelector('.activeli') !== li[0]) {
    preBtn.style = `opacity: 1;`
  }
  if (document.querySelector('.activeli') === li[li.length-1]) {
      nBtn.style = `opacity: 0;`
  } 
  if (document.querySelector('.activeli') !== li[0]) {
    preBtn.style = `opacity: 1;`
  }
  if (document.querySelector('.activeli') === li[li.length-1]) {
    nBtn.style = `opacity: 0;`
  } 
  if (document.querySelector('.activeli') === li[0]) {
    preBtn.style = `opacity: 0;`
  } 
}
function deleteAct() {
  li.forEach(e => {
    e.classList.remove("activeli")
  })
  content.forEach(e => {
    e.classList.remove("active")
  })
}
function create() {
  for (let i = 1; i < content.length; i++) {
    let lis = document.createElement("li")
    lis.setAttribute("data-order", i )
    ul.appendChild(lis)
  }
}
let qaa = Array.from(document.querySelectorAll(".qaa"))
qaa.forEach((e) => { 
  e.addEventListener("click", () => {
    e.classList.toggle("active")
  })
})

console.log(qaa)