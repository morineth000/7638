//refrence from youtube changed 20%
var i = 0,
img = [],
time = 1000;

img [0] = '../media/wide-computer-screen/milkyway.jpg';
img [1] = '../media/wide-computer-screen/mountains.jpg';
img [2] = '../media/wide-computer-screen/foliage.jpg';

function changeImg(){
    document.slide.src = img[i];

    if (i > img.length) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;