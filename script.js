const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem = document.querySelector("#elem-container")
var fixedImg = document.querySelector("#fixed-img")
elem.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block"
})
elem.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none"
})

var elems = document.querySelectorAll("#elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var img = e.getAttribute("data-image")
        fixedImg.style.backgroundImage = `url(${img})`
    })
})

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation();


function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var fullScr = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            fullScr.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            fullScr.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }

    })
}
menuAnimation()

var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000)

var design = document.querySelector("#design")
var product = document.querySelector("#product")
var execution = document.querySelector("#execution")
var para1 = document.querySelector("#para1")
var para2 = document.querySelector("#para2")
var para3 = document.querySelector("#para3")
var element1 = document.querySelector('#page4-left #design');
var beforeStyle = window.getComputedStyle(element1, ':before');
var element2 = document.querySelector('#page4-left #product');
var beforeStyle = window.getComputedStyle(element2, ':before');
var element3 = document.querySelector('#page4-left #execution');
var beforeStyle = window.getComputedStyle(element3, ':before');
var i = 0

design.addEventListener("click", function () {
    if (i < 1) {

        design.style.color = "white"
        para1.style.display = "block"
        para2.style.display = "none"
        para3.style.display = "none"
        product.style.color = ""
        execution.style.color = ""
        element1.style.setProperty('--before-background-color', 'red');
        element2.style.setProperty('--before-background-color', '');
        element3.style.setProperty('--before-background-color', '');
        i++
    }
    else {
        
        i--
    }

});
product.addEventListener("click", function () {
    if (i < 1) {

        product.style.color = "white"
        para2.style.display = "block"
        para1.style.display = "none"
        para3.style.display = "none"
        design.style.color = ""
        execution.style.color = ""
        element2.style.setProperty('--before-background-color', 'red');
        element3.style.setProperty('--before-background-color', '');
        element1.style.setProperty('--before-background-color', '');
        i++
    } else {

        i--
    }

});
execution.addEventListener("click", function () {
    if (i < 1) {

        execution.style.color = "white"
        para3.style.display = "block"
        para2.style.display = "none"
        para1.style.display = "none"
        product.style.color = ""
        design.style.color = ""
        element3.style.setProperty('--before-background-color', 'red');
        element2.style.setProperty('--before-background-color', '');
        element1.style.setProperty('--before-background-color', '');
        i++
    } else {

        i--
    }

});