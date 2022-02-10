var paths = document.querySelectorAll("svg path");
var nextTxt = document.querySelector(".next-text path");
var heartIcon = document.getElementById("heart");
const pathHeart = document.querySelector("#heart path");

i = 0;

paths.forEach(function(item, index) {
    i++;

    var pathlength = item.getTotalLength();

    item.setAttribute("stroke-dasharray", pathlength);
    item.setAttribute("stroke-dashoffset", pathlength);

    //console.log(pathlength, index);
})

window.addEventListener('DOMContentLoaded', () => {

    const likeUnlikePost = () => {
        if (pathHeart.classList.contains("liked")) {
            pathHeart.classList.remove("liked");
            pathHeart.classList.add("unliked");
        } else {
            pathHeart.classList.remove("unliked");
            pathHeart.classList.add("liked");
        }
    }

    pathHeart.addEventListener('click', likeUnlikePost);
})

console.log(nextTxt.getTotalLength())


heartIcon.addEventListener('click', addAnimationNext);

function addAnimationNext() {

    if (pathHeart.classList.contains("liked")) {
        setInterval(() => {
            nextTxt.classList.add('next-txt-animate');
            nextTxt.classList.re4move('next-text-animation-reverse');
        }, 2000)
    } else if (pathHeart.classList.contains("unliked")) {
        nextTxt.classList.remove('next-txt-animate');
        nextTxt.classList.add('next-text-animation-reverse');
    }



}