import './less/index.less'

// Your code goes here!
console.log("Hello World")
//  (.1) load
window.onload = function (evt) {
    console.log(`event ${evt.type} ready`)
    const heading = document.querySelector('h1')
   heading.textContent = 'Welcome to Dom2'
// (.2) copy
   window.addEventListener('copy', () => {
    navigator.clipboard.readText()
     .then(text => {
       heading.textContent += text
     })
   })
   // (.3) click
   document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
   })
    
   //(.4)dblclick
   document.body.addEventListener('dblclick' , evt => {
    evt.target.outerHTML = ''
   })
   //(.5) key down
   window.addEventListener('keydown', evt => {
    if (evt.key == 9) {
        document.body.innerHTML = '<h1>ERROR DOM DESTROYED<h1>'
    }
   }) 
   //(.6) mouse x and y 
   document.body.addEventListener('mouseover', evt=> {
    const {clientX, clientY} = evt
   // console.log(`Mouse is at ${clientX}, ${clientY}`)
   })
   //(.7) Mouse enter
   //(.8) Mouse leave
   const destinations = document.querySelectorAll('.destination')
   for (let destination of destinations) {
destination.addEventListener('mouseenter', evt =>{
    destination.style.fontWeight = 'bold'
})
destination.addEventListener('mouseleave', () => {
    destination.style.fontWeight = 'initial'
})
   }
}
