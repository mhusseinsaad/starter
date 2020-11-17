// start to top btn 
let myBtn = document.querySelector('.to-top');
window.onscroll = function () {
    if(window.pageYOffset >= 500) {

        myBtn.style.right = '55px';
        myBtn.style.transform = 'rotate(0deg)';
        
    } else {
        myBtn.style.right = '-55px';
        myBtn.style.transform = 'rotate(90deg)';
    }
    
}

// onClick 
myBtn.onclick = function () {
    window.scrollTo(0,0);
}
// End to top btn 

//slider 

let myImgs = ['about-cover.jpg','about-cover-1.jpg', 'about-cover-2.jpg', 'about-cover-3.jpg'];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * myImgs.length );
    document.querySelector('.about-us').style.background = 'url(images/' + myImgs[randomNumber] + ')';
}, 2000);