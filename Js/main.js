// Dynaimc Nav
let sections = Array.from(document.querySelectorAll("body > section")).map(ele=> ele.id)
let navUl = document.querySelector('nav ul');
let toggler = document.querySelector('nav .toggler')

for (section of sections) {
let navElements = document.createElement("li")
let navlinks = document.createElement("a")
navlinks.href = `#${section}`
navElements.onclick = ()=>navlinks.click()
navlinks.innerText = section.split("-").join(" ")
navElements.style.width = navUl.clientWidth / sections.length
navElements.append(navlinks)
document.querySelector('nav ul').appendChild(navElements)
}
let nav = navUl.parentNode
let navElements = document.querySelectorAll('nav ul li')

onscroll = ()=>{
if(scrollY > 50){
    nav.style.backgroundColor = "var(--secColor)"
    nav.style.color = "var(--mainColor)"
    Array.from(toggler.children).forEach(ele=> ele.style.backgroundColor = "var(--mainColor)")
    navElements.forEach(ele=>ele.classList.add('scrolled'))
}else{
    navElements.forEach(ele=>ele.classList.remove('scrolled'))
    nav.style.backgroundColor = "transparent"
    nav.style.color = "var(--secColor)"
    Array.from(toggler.children).forEach(ele=> ele.style.backgroundColor = "var(--secColor)")

}
}
toggler.onclick = ()=>{
    navUl.classList.toggle('active')
    toggler.classList.toggle('active')
}
// End Dynamic Nav



