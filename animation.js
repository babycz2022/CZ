function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

//About Section animation
scrollTrigger('.about-img')
scrollTrigger('.col-right')
scrollTrigger('.about-2')
scrollTrigger('.about-3')

//Roadmap Section animation
scrollTrigger('.box')

//Tokenomics Card animation
scrollTrigger('.card')

//Team Section Members animation
scrollTrigger('.team-member')

//Twitter Logo Hover animation
var image = document.getElementById("twt-hover");
image.onmouseover = function() {  image.src = "img/twt-ani.gif"; }
image.onmouseout = function() {  image.src = "img/twt-logo.png"; }

//Website Logo Hover animation
var image2 = document.getElementById("website-hover");
image2.onmouseover = function() {  image2.src = "img/website-ani.gif"; }
image2.onmouseout = function() {  image2.src = "img/website-logo.png"; }
