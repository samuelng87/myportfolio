var i = 0; // start point 
var images = []
var time = 5000;


// Image List 

images [0] = 'cosmo-pic1.jpg';
images [1] = 'cosmo-pic2.jpg';
images [2] = 'cosmopic3.jpg';
images [3] = 'cosmo-pic4.webp';


// change img 

function changeImg() {
    document.slide.src = images[i];

if ( i < images.length - 1){
i++ ;  
} else {
    i = 0; 
}

setTimeout("changeImg()", time);   
}


window.onload = changeImg; 

