let buttons = Array.from(document.querySelectorAll('.abc  li a'))
let images = Array.from(document.querySelectorAll('div img'))
let scrollY = null



// console.log(buttons)
// console.log(images)

buttons.forEach(function(button) {
    button.addEventListener('click', setScroll)
})

function setScroll() {
    let index = buttons.indexOf(this)
    let target = images[index]
    console.dir(target)
    scrollY = target.offsetTop - window.innerHeight / 2 + target.height / 2

}

function start() {
    if (scrollY != null) {
        let move = (scrollY - window.scrollY) * 0.1
        window.scrollTo(0, window.scrollY + move)
        if (Math.abs(scrollY - window.scrollY) < 50) scrollY = null
    }
    requestAnimationFrame(start)
}
start()

window.addEventListener('scroll', checkScroll)

function checkScroll() {
    let top = window.scrollY
    let bottom = top + window.innerHeight

    images.forEach(function(img) {
        let imagetop = img.offsetTop + img.height / 2
        if (imagetop = top && imagetop < bottom) {
            img.classList.add('go')
        } else {
            img.classList.remove('go')
        }
    })

}