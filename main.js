var paths = document.querySelectorAll("svg path");

i = 0;

paths.forEach(function(item, index) {
    i++;

    var pathlength = item.getTotalLength();

    item.setAttribute("stroke-dasharray", pathlength);
    item.setAttribute("stroke-dashoffset", pathlength);

    //console.log(pathlength, index);
})

window.addEventListener('DOMContentLoaded', () => {
    const pathHeart = document.querySelector("#heart path");
    console.log(pathHeart.getTotalLength());
})