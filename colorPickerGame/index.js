
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
function RandomRgbGenerator(){
    
    return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`
}
function settingUpUi(){
  circlesContainer.innerHTML = "";
  
  for (var i = 0; i < 6; i++) {
    circlesContainer.insertAdjacentHTML(
            "beforeend",
        `<div class="circleWrapper flex">
         <div style="background:${RandomRgbGenerator()}" class="circle"></div></div>`)
}
circles = Array.from(document.querySelectorAll(".circle"));
ans = circles[randomNunerForAns].style.background ;
ansNode.textContent = ans;

}

var circlesContainer = document.querySelector(".circles");
var ans = null;
var circles = null;
var randomNunerForAns = getRandomInt(0,6);
var ansNode = document.querySelector(".answer");
settingUpUi();
var backgroundColor = document.querySelector('.container');
var score = document.querySelector('score');


circlesContainer.addEventListener("click",function(e){
  if(Array.from(e.target.classList).includes("circle")){
    var ansPicked = e.target.style.background;
    if( ansPicked === ans){
      circles.forEach(function(circle)  {
        if(circle.style.background !== ans){
          circle.style.opacity = 0;
        }
        backgroundColor.style.background = ans;
      });
     
    }
    else {
      e.target.style.opacity = 0;  
    }
  }
})
var resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click',function(){
  randomNunerForAns = getRandomInt(0,6);
  
  settingUpUi();  
backgroundColor.style.background = 'rgb(19, 21, 87)';

})