var paths = document.querySelectorAll("svg path");
var nextTxt = document.querySelector(".next-text path");
var heartIcon = document.getElementById("heart");
const pathHeart = document.querySelector("#heart path");
const bottomLine = document.querySelector(".bottom-line path");
const plantRight = document.querySelector(".light-plant");



// heart icon clicking animations
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

console.log(bottomLine.getTotalLength())


// heart icon on click next text animatiobn
heartIcon.addEventListener('click', addAnimationNext);

function addAnimationNext() {

    if (pathHeart.classList.contains("liked")) {
        setInterval(() => {
            nextTxt.classList.remove('next-text-animation-reverse');
            nextTxt.classList.add('next-txt-animate');
            bottomLine.classList.add('bottom-line-animate')

            setInterval(() => {
                plantRight.classList.add('light-plant-animated')
            }, 5000)

        }, 2000)
    } else if (!pathHeart.classList.contains("unliked")) {

        nextTxt.classList.add('next-text-animation-reverse');
        nextTxt.classList.remove('next-txt-animate');
    }

}

// heart icon onclick bottom line animation