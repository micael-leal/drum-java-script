var numberOfButtons = document.querySelectorAll(".button").length;
for (var j = 0; j< numberOfButtons;j++){
    document.querySelectorAll(".button")[j]
      .addEventListener("click",function(){
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        Animation(buttonStyle);
      });
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
});

function sound(key){
    switch (key){
        case "q":
           var rideCymbal = new Audio ('sounds/rideCymbal.mp3')
           rideCymbal.play();
           break;
        case "w":
           var crashCymbal = new Audio ('sounds/crashCymbal.mp3')
           crashCymbal.play();
           break;
        case "e":
           var hiHats = new Audio ('sounds/hihats.mp3')
           hiHats.play();
           break;
        case "y":
           var midTom = new Audio ('sounds/midtom.mp3')
           midTom.play();
           break;
        case "u":
           var hightom = new Audio ('sounds/highTom.mp3')
           hightom.play();
           break;
        case "i":
           var floorTom = new Audio ('sounds/floortom.mp3')
           floorTom.play();
           break;
        case "f":
           var snare = new Audio ('sounds/snare.mp3')
           snare.play();
           break;
        case "g":
           var bassDrum = new Audio ('sounds/bassdrum.mp3')
           bassDrum.play();
           break;
    }
}






