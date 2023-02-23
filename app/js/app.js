console.log('hello world');


let slideIndex =1;
showSlides(slideIndex);
showSlides1(slideIndex);

function plusSlides1(n){
    showSlides1(slideIndex += n);
}
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex =n);
}
function currentSlide1(n){
    showSlides1(slideIndex =n);
}

function showSlides1(n){

    let i; 
    let slides = document.getElementsByClassName("slide__mySlides");
    let dots = document.getElementsByClassName('dots');
    
    // console.log(dots);
    console.log(slides);
    if(n>slides.length) {slideIndex =1}
    if(n<1){slideIndex= slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i=0; i<dots.length; i++){
        dots[i].classList.remove('active');

    }

    slides[slideIndex -1].style.display = "block";
    console.log(slides[slideIndex -1].style.display)
    console.log("dfsklajkdldfksjldskjl")
    dots[slideIndex -1].classList.add('active');
    // console.log(dots[slideIndex -1].style)
    // console.log(slideIndex -1)
}



function showSlides(n){

    let i; 
    let slides = document.getElementsByClassName("carousel__mySlides");
    let dots = document.getElementsByClassName('dots');
    
    // console.log(dots);
    console.log(slides);
    if(n>slides.length) {slideIndex =1}
    if(n<1){slideIndex= slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i=0; i<dots.length; i++){
        dots[i].classList.remove('active');

    }

    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].classList.add('active');
    console.log(dots[slideIndex -1].style)
    console.log(slideIndex -1)
}


//sibebar

const humbtn = document.getElementById("humbtn");
const overlay = document.querySelector('#overlay');
const sidebar = document.querySelector('.sidebar');
const colsebtn = document.querySelector('#closebtn')
humbtn.addEventListener('click', function(){
    
    if(overlay.classList.contains('overlay')){
        overlay.classList.remove('overlay');
    }else{
        overlay.classList.add('overlay');
        sidebar.style.width = "60%";
    }
})


closebtn.addEventListener('click', function(){
    sidebar.style.width = "0";
    
    overlay.classList.remove('overlay');

})



//cart

const cartbtn = document.querySelector("#cartbtn");
const cart = document.querySelector("#cart");

cartbtn.addEventListener("click", function(){
    
    if(cart.classList.contains("hidden")){
        
        cart.classList.remove("hidden");
    }else{
        
        cart.classList.add("hidden");
    }

})




const showSlideBtn = document.querySelector("#showSlideBtn");
const slide = document.querySelector(".slide");
showSlideBtn.addEventListener("click", function(){
  
        
        overlay.classList.add('overlay');
        slide.style.visibility = "visible";

})

overlay.addEventListener("click", function(){
    overlay.classList.remove('overlay');
    
    slide.style.visibility = "hidden";

})