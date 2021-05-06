var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for(var i = 0;i < numberOfDrumButtons;i ++){

  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    var  buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    makeAnimation(buttonInnerHtml);
        });

    }
    document.addEventListener('keypress',function(event){
      makesound(event.key);
      makeAnimation(event.key);

    });

  function makesound(buttonInnerHtml){
    switch (buttonInnerHtml) {
      case "a":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case "s":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
        case "d":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        case "f":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;
        case "g":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
        case "h":
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;
        case "j":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;

      default: console.log(buttonInnerHtml);

    }
}
function makeAnimation(currentKey){
  var activebutton = document.querySelector('.' + currentKey);
  activebutton.classList.toggle("pressed");
  setTimeout(function(){
    activebutton.classList.toggle("pressed");
  }, 100);
}
/*
var sound = new Audio('sounds/tom-1.mp3');
sound.play();
*/
