


// var openButton = document.querySelector(".menubtn");
// var mainArea = document.querySelector("#dim");


var menuIsOpen;

function changeMenuButton(x) {
  x.classList.toggle("change");
  if (menuIsOpen == true){
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu(){
	menuIsOpen = true;
  document.getElementById("sidebar").style.transitionDuration = "0.5s";
	document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("sidebar").style.paddingTop = "230px";
  document.getElementById("sidebar").style.zIndex = "1000";
  document.body.style.overflowY = "hidden";
  // document.getElementById("dim").style.zIndex = "74";
  // document.getElementById("dim").style.opacity = "0.75";
}

function closeMenu(){
  if (menuIsOpen == true){
    menuIsOpen = false;
    document.getElementById("sidebar").style.transitionDuration = "0.5s";
    document.getElementById("sidebar").style.opacity = "0";
    document.getElementById("sidebar").style.paddingTop = "250px";
    document.getElementById("sidebar").style.zIndex = "0";
    document.body.style.overflowY = "auto";
  }
}


// mainArea.addEventListener("click", function(e) {
//   if (menuIsOpen == true) {
//     document.getElementById("sidebar").style.transitionDuration = "0.5s";
//   	document.getElementById("sidebar").style.width = "0";
//   	document.getElementById("dim").style.opacity = "0";
//     setTimeout(changeZIndex, 500);
//   }
// });

// function changeZIndex(){
//   document.getElementById("dim").style.zIndex = "15";
// }



var screenSizeLessThan770;
var screenSizeMoreThan950;

function checkScreenSizeX(x) {
  if (x.matches) { // If media query matches
    screenSizeLessThan770 = true;
    // areCardsOpen();
  } else {
    screenSizeLessThan770 = false;
  }
}

function checkScreenSizeY(y) {
  if (y.matches) { // If media query matches
    screenSizeMoreThan950 = true;
  } else {
    screenSizeMoreThan950 = false;
  }
  // areCardsOpen();
}

var x = window.matchMedia("(max-width: 770px)")
var y = window.matchMedia("(min-width: 950px)")


checkScreenSizeX(x)
checkScreenSizeY(y)  // Call listener function at run time
x.addListener(checkScreenSizeX)
y.addListener(checkScreenSizeY) // Attach listener function on state changes


var cardsAreOpen;
var addaNewCardsAreOpen;
var fuchkaCardsAreOpen;
var iftarCardsAreOpen;
var adda2CardsAreOpen;
var choloCardsAreOpen;
var iftar24CardsAreOpen;

// function areCardsOpen(){
//   if(cardsAreOpen == true){
//     changeCardView();
//   }
// }
 

function openCards(){
  if (screenSizeLessThan770 == true){
    document.getElementById("card-container").style.transitionDuration = "0.5s";
    document.getElementById("card-container").style.transitionTimingFunction = "ease";
    document.getElementById("adda-night").style.transitionDuration = "0.5s";
    document.getElementById("adda-night").style.transitionTimingFunction = "ease";
    document.getElementById("adda-group").style.transitionDuration = "0.5s";
    document.getElementById("adda-group").style.transitionTimingFunction = "ease";
    document.getElementById("adda-food").style.transitionDuration = "0.5s";
    document.getElementById("adda-food").style.transitionTimingFunction = "ease";
    document.getElementById("introduction2").style.transitionProperty = "top, padding-top";
    document.getElementById("introduction2").style.transitionDuration = "0.5s";
    document.getElementById("introduction2").style.transitionTimingFunction = "ease";
    document.getElementById("card-container").style.width = "320px";
    document.getElementById("adda-night").style.width = "100%";
    document.getElementById("adda-group").style.width = "100%";
    document.getElementById("adda-food").style.width = "100%";
    document.getElementById("adda-night").style.transform = "rotate(0deg)";
    document.getElementById("adda-food").style.transform = "rotate(0deg)";
    document.getElementById("adda-night").style.left = "0px";
    document.getElementById("adda-food").style.right = "0px";
    document.getElementById("adda-group").style.bottom = "-525px";
    document.getElementById("adda-food").style.bottom = "-1045px";
    document.getElementById("introduction2").style.paddingTop = "1150px";
    document.getElementById("adda-night").style.cursor = "default";
    document.getElementById("adda-food").style.cursor = "default";
    document.getElementById("adda-group").style.cursor = "default";
  } else if(screenSizeMoreThan950 == true){
    document.getElementById("card-container").style.transitionDuration = "0.5s";
    document.getElementById("card-container").style.transitionTimingFunction = "ease";
    document.getElementById("adda-night").style.transitionDuration = "0.5s";
    document.getElementById("adda-night").style.transitionTimingFunction = "ease";
    document.getElementById("adda-group").style.transitionDuration = "0.5s";
    document.getElementById("adda-group").style.transitionTimingFunction = "ease";
    document.getElementById("adda-food").style.transitionDuration = "0.5s";
    document.getElementById("adda-food").style.transitionTimingFunction = "ease";
    document.getElementById("introduction2").style.transitionProperty = "top, padding-top";
    document.getElementById("introduction2").style.transitionDuration = "0.5s";
    document.getElementById("introduction2").style.transitionTimingFunction = "ease";
    document.getElementById("card-container").style.width = "100%";
    document.getElementById("adda-night").style.transform = "rotate(0deg)";
    document.getElementById("adda-food").style.transform = "rotate(0deg)";
    document.getElementById("adda-group").style.bottom = "20px";
    document.getElementById("adda-food").style.bottom = "20px";
    document.getElementById("introduction2").style.top = "-40px";
    document.getElementById("adda-night").style.cursor = "default";
    document.getElementById("adda-food").style.cursor = "default";
    document.getElementById("adda-group").style.cursor = "default";
  } else {
    document.getElementById("card-container").style.transitionDuration = "0.5s";
    document.getElementById("card-container").style.transitionTimingFunction = "ease";
    document.getElementById("adda-night").style.transitionDuration = "0.5s";
    document.getElementById("adda-night").style.transitionTimingFunction = "ease";
    document.getElementById("adda-group").style.transitionDuration = "0.5s";
    document.getElementById("adda-group").style.transitionTimingFunction = "ease";
    document.getElementById("adda-food").style.transitionDuration = "0.5s";
    document.getElementById("adda-food").style.transitionTimingFunction = "ease";
    document.getElementById("introduction2").style.transitionProperty = "top, padding-top";
    document.getElementById("introduction2").style.transitionDuration = "0.5s";
    document.getElementById("introduction2").style.transitionTimingFunction = "ease";
    document.getElementById("card-container").style.width = "289px";
    document.getElementById("adda-night").style.width = "100%";
    document.getElementById("adda-group").style.width = "100%";
    document.getElementById("adda-food").style.width = "100%";
    document.getElementById("adda-night").style.transform = "rotate(0deg)";
    document.getElementById("adda-food").style.transform = "rotate(0deg)";
    document.getElementById("adda-night").style.left = "0px";
    document.getElementById("adda-food").style.right = "0px";
    document.getElementById("adda-group").style.bottom = "-445px";
    document.getElementById("adda-food").style.bottom = "-920px";
    document.getElementById("introduction2").style.paddingTop = "835px";
    document.getElementById("adda-night").style.cursor = "default";
    document.getElementById("adda-food").style.cursor = "default";
    document.getElementById("adda-group").style.cursor = "default";
  }

  cardsAreOpen = true;
}

function changeCardView(){
  if (cardsAreOpen == true){
    if(screenSizeLessThan770 == true){
      // document.getElementById("green").style.backgroundColor = "red";

      document.getElementById("card-container").style.transitionProperty = "none";
      document.getElementById("adda-night").style.transitionProperty = "none";
      document.getElementById("adda-group").style.transitionProperty = "none";
      document.getElementById("adda-food").style.transitionProperty = "none";
      document.getElementById("introduction2").style.transitionProperty = "none";

      document.getElementById("card-container").style.width = "320px";
      document.getElementById("adda-night").style.width = "100%";
      document.getElementById("adda-group").style.width = "100%";
      document.getElementById("adda-food").style.width = "100%";
      document.getElementById("adda-night").style.transform = "rotate(0deg)";
      document.getElementById("adda-food").style.transform = "rotate(0deg)";
      document.getElementById("adda-night").style.left = "0px";
      document.getElementById("adda-food").style.right = "0px";
      document.getElementById("adda-group").style.bottom = "-525px";
      document.getElementById("adda-food").style.bottom = "-1045px";
      document.getElementById("introduction2").style.paddingTop = "1150px";
      document.getElementById("introduction2").style.top = "-132px";

    } else if (screenSizeMoreThan950 == true){
      // document.getElementById("green").style.backgroundColor = "yellow";

      document.getElementById("card-container").style.transitionProperty = "none";
      document.getElementById("adda-night").style.transitionProperty = "none";
      document.getElementById("adda-group").style.transitionProperty = "none";
      document.getElementById("adda-food").style.transitionProperty = "none";
      document.getElementById("introduction2").style.transitionProperty = "none";

      document.getElementById("card-container").style.width = "100%";
      document.getElementById("adda-night").style.transform = "rotate(0deg)";
      document.getElementById("adda-food").style.transform = "rotate(0deg)";
      document.getElementById("adda-night").style.width = "289px";
      document.getElementById("adda-group").style.width = "289px";
      document.getElementById("adda-food").style.width = "289px";
      document.getElementById("adda-group").style.bottom = "20px";
      document.getElementById("adda-food").style.bottom = "20px";
      document.getElementById("introduction2").style.top = "-40px";
      document.getElementById("introduction2").style.paddingTop = "10px";
    } else {
      // document.getElementById("green").style.backgroundColor = "blue";

      document.getElementById("card-container").style.transitionProperty = "none";
      document.getElementById("adda-night").style.transitionProperty = "none";
      document.getElementById("adda-group").style.transitionProperty = "none";
      document.getElementById("adda-food").style.transitionProperty = "none";
      document.getElementById("introduction2").style.transitionProperty = "none";
      
      document.getElementById("card-container").style.width = "289px";
      document.getElementById("adda-night").style.width = "100%";
      document.getElementById("adda-group").style.width = "100%";
      document.getElementById("adda-food").style.width = "100%";
      document.getElementById("adda-night").style.transform = "rotate(0deg)";
      document.getElementById("adda-food").style.transform = "rotate(0deg)";
      document.getElementById("adda-night").style.left = "0px";
      document.getElementById("adda-food").style.right = "0px";
      document.getElementById("adda-group").style.bottom = "-445px";
      document.getElementById("adda-food").style.bottom = "-920px";
      document.getElementById("introduction2").style.paddingTop = "835px";
      document.getElementById("introduction2").style.top = "65px";
    } 
  }
}

changeCardView();
window.addEventListener("resize", changeCardView);
window.addEventListener("resize", changeAddaNewCardView);
window.addEventListener("resize", changeFuchkaCardView);
window.addEventListener("resize", changeIftarCardView);
window.addEventListener("resize", changeAdda2CardView);
window.addEventListener("resize", changeCholoCardView);
window.addEventListener("resize", changeIftar24CardView);

function openAddaNewCards(){
  if (screenSizeLessThan770 == true){
    document.getElementById("adda-new-container").style.transitionDuration = "0.5s";
    document.getElementById("adda-night-new").style.transitionDuration = "0.5s";
    document.getElementById("adda-group-new").style.transitionDuration = "0.5s";
    document.getElementById("adda-new-container").style.height = "1050px";
    document.getElementById("adda-night-new").style.width = "320px";
    document.getElementById("adda-group-new").style.bottom = "-60px";
    document.getElementById("adda-group-new").style.left = "0";
    document.getElementById("adda-group-new").style.width = "320px";
    document.getElementById("adda-night-new").style.cursor = "default";
    document.getElementById("adda-group-new").style.cursor = "default";
  // } else {
  //   document.getElementById("fuchka-container").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-group").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-title").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-container").style.marginLeft = "50%";
  //   document.getElementById("fuchka-container").style.transform = "translateX(-50%)";
  //   document.getElementById("fuchka-group").style.right = "-40px";
  //   document.getElementById("fuchka-group").style.bottom = "-10px";
  //   document.getElementById("fuchka-title").style.opacity = "0";
  //   document.getElementById("fuchka-night").style.cursor = "default";
  //   document.getElementById("fuchka-group").style.cursor = "default";
  // }

  }

  addaNewCardsAreOpen = true;
}

function openFuchkaCards(){
  if (screenSizeLessThan770 == true){
    document.getElementById("fuchka-container").style.transitionDuration = "0.5s";
    document.getElementById("fuchka-night").style.transitionDuration = "0.5s";
    document.getElementById("fuchka-group").style.transitionDuration = "0.5s";
    document.getElementById("fuchka-container").style.height = "1050px";
    document.getElementById("fuchka-night").style.width = "320px";
    document.getElementById("fuchka-group").style.bottom = "-60px";
    document.getElementById("fuchka-group").style.left = "0";
    document.getElementById("fuchka-group").style.width = "320px";
    document.getElementById("fuchka-night").style.cursor = "default";
    document.getElementById("fuchka-group").style.cursor = "default";
  // } else {
  //   document.getElementById("fuchka-container").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-group").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-title").style.transitionDuration = "0.5s";
  //   document.getElementById("fuchka-container").style.marginLeft = "50%";
  //   document.getElementById("fuchka-container").style.transform = "translateX(-50%)";
  //   document.getElementById("fuchka-group").style.right = "-40px";
  //   document.getElementById("fuchka-group").style.bottom = "-10px";
  //   document.getElementById("fuchka-title").style.opacity = "0";
  //   document.getElementById("fuchka-night").style.cursor = "default";
  //   document.getElementById("fuchka-group").style.cursor = "default";
  // }

  }

  fuchkaCardsAreOpen = true;
}

function openIftarCards(){
  if (screenSizeLessThan770 == true){
    document.getElementById("iftar-container").style.transitionDuration = "0.5s";
    document.getElementById("iftar-night").style.transitionDuration = "0.5s";
    document.getElementById("iftar-vid").style.transitionDuration = "0.5s";
    document.getElementById("iftar-container").style.height = "1050px";
    document.getElementById("iftar-night").style.width = "320px";
    document.getElementById("iftar-vid").style.bottom = "-60px";
    document.getElementById("iftar-vid").style.left = "0";
    document.getElementById("iftar-vid").style.width = "320px";
    document.getElementById("iftar-night").style.cursor = "default";
    document.getElementById("iftar-vid").style.cursor = "default";
  // } else {
  //   document.getElementById("iftar-container").style.transitionDuration = "0.5s";
  //   document.getElementById("iftar-vid").style.transitionDuration = "0.5s";
  //   document.getElementById("iftar-title").style.transitionDuration = "0.5s";
  //   document.getElementById("iftar-container").style.marginLeft = "50%";
  //   document.getElementById("iftar-container").style.transform = "translateX(-50%)";
  //   document.getElementById("iftar-vid").style.right = "-40px";
  //   document.getElementById("iftar-vid").style.bottom = "-70px";
  //   document.getElementById("iftar-title").style.opacity = "0";
  //   document.getElementById("iftar-night").style.cursor = "default";
  //   document.getElementById("iftar-vid").style.cursor = "default";
  // }
  }

  iftarCardsAreOpen = true;
}

var adda2ContainerHeight;
var adda2CardHeight;
var adda2CardHeightMultipliedByTwo; 
var moveComputedHeight;
var moveHeight;
var test;

function openAdda2Cards(){
  if (screenSizeLessThan770 == true && adda2CardsAreOpen != true){
    document.getElementById("adda2-container").style.transitionDuration = "0.5s";
    document.getElementById("adda2-crowd-container").style.transitionDuration = "0.5s";
    document.getElementById("adda2-food-container").style.transitionDuration = "0.5s";
    document.getElementById("adda2-board-container").style.transitionDuration = "0.5s";
    document.getElementById("adda2-crowd").style.transitionDuration = "0.5s";
    document.getElementById("adda2-food").style.transitionDuration = "0.5s";
    document.getElementById("adda2-board").style.transitionDuration = "0.5s";
    document.getElementById("move").style.transitionDuration = "0.5s";



    document.getElementById("adda2-crowd").style.width = "100%";

    adda2CardHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + 60;

    adda2CardHeightMultipliedByTwo = adda2CardHeight*2 - 30;

    document.getElementById("adda2-food-container").style.top = adda2CardHeight + "px";
    document.getElementById("adda2-food").style.width = "100%";

    document.getElementById("adda2-board-container").style.top = adda2CardHeightMultipliedByTwo + "px";
    document.getElementById("adda2-board").style.width = "100%";

    adda2ContainerHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + document.getElementById("adda2-crowd").offsetHeight * 1.11 + document.getElementById("adda2-crowd").offsetHeight * 1.11 - 10;

    test = document.getElementById("adda2-container").offsetHeight * 1.11;

  
    moveHeight = adda2ContainerHeight - test;
    
    document.getElementById("move").style.height = moveHeight + "px";
    
  }

  adda2CardsAreOpen = true;
}

function openCholoCards(){
  if (screenSizeLessThan770 == true && choloCardsAreOpen != true){
    document.getElementById("cholo-container").style.transitionDuration = "0.5s";
    document.getElementById("cholo1-container").style.transitionDuration = "0.5s";
    document.getElementById("cholo2-container").style.transitionDuration = "0.5s";
    document.getElementById("cholo3-container").style.transitionDuration = "0.5s";
    document.getElementById("cholo1").style.transitionDuration = "0.5s";
    document.getElementById("cholo2").style.transitionDuration = "0.5s";
    document.getElementById("cholo3").style.transitionDuration = "0.5s";
    document.getElementById("move2").style.transitionDuration = "0.5s";



    document.getElementById("cholo1").style.width = "100%";

    choloCardHeight = document.getElementById("cholo1").offsetHeight * 1.11 + 60;

    choloCardHeightMultipliedByTwo = choloCardHeight*2 - 30;

    document.getElementById("cholo2-container").style.top = choloCardHeight + "px";
    document.getElementById("cholo2").style.width = "100%";

    document.getElementById("cholo3-container").style.top = choloCardHeightMultipliedByTwo + "px";
    document.getElementById("cholo3").style.width = "100%";

    choloContainerHeight = document.getElementById("cholo1").offsetHeight * 1.11 + document.getElementById("cholo1").offsetHeight * 1.11 + document.getElementById("cholo1").offsetHeight * 1.11 - 10;

    test = document.getElementById("cholo-container").offsetHeight * 1.11;

  
    moveHeight = choloContainerHeight - test;
    
    document.getElementById("move2").style.height = moveHeight + "px";
  }

  choloCardsAreOpen = true;
}

function openIftar24Cards(){
  if (screenSizeLessThan770 == true && iftar24CardsAreOpen != true){
    document.getElementById("iftar24-container").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-1-container").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-2-container").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-3-container").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-1").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-2").style.transitionDuration = "0.5s";
    document.getElementById("iftar24-3").style.transitionDuration = "0.5s";
    document.getElementById("move3").style.transitionDuration = "0.5s";



    document.getElementById("iftar24-1").style.width = "100%";

    iftar24CardHeight = document.getElementById("iftar24-1").offsetHeight * 1.11 + 60;

    iftar24CardHeightMultipliedByTwo = iftar24CardHeight*2 - 30;

    document.getElementById("iftar24-2-container").style.top = iftar24CardHeight + "px";
    document.getElementById("iftar24-2").style.width = "100%";

    document.getElementById("iftar24-3-container").style.top = iftar24CardHeightMultipliedByTwo + "px";
    document.getElementById("iftar24-3").style.width = "100%";

    iftar24ContainerHeight = document.getElementById("iftar24-1").offsetHeight * 1.11 + document.getElementById("iftar24-1").offsetHeight * 1.11 + document.getElementById("iftar24-1").offsetHeight * 1.11 - 10;

    test = document.getElementById("iftar24-container").offsetHeight * 1.11;

  
    moveHeight = iftar24ContainerHeight - test;
    
    document.getElementById("move3").style.height = moveHeight + "px";
  }

  iftar24CardsAreOpen = true;
}

function changeAddaNewCardView(){
  if (addaNewCardsAreOpen == true){
    if (screenSizeLessThan770 == true){
      document.getElementById("adda-new-container").style.transitionProperty = "none";
      document.getElementById("adda-night-new").style.transitionProperty = "none";
      document.getElementById("adda-group-new").style.transitionProperty = "none";
      document.getElementById("adda-new-container").style.height = "1050px";
      document.getElementById("adda-new-container").style.margin = "auto";
      document.getElementById("adda-new-container").style.transform = "none";
      document.getElementById("adda-night-new").style.width = "320px";
      document.getElementById("adda-group-new").style.bottom = "-60px";
      document.getElementById("adda-group-new").style.left = "0";
      document.getElementById("adda-group-new").style.right = "revert";
      document.getElementById("adda-group-new").style.width = "320px";
    } else {
      document.getElementById("adda-new-container").style.transitionProperty = "none";
      document.getElementById("adda-night-new").style.transitionProperty = "none";
      document.getElementById("adda-group-new").style.transitionProperty = "none";
      document.getElementById("adda-new-container").style.height = "530px";
      document.getElementById("adda-night-new").style.width = "345px";
      document.getElementById("adda-group-new").style.width = "345px";
      document.getElementById("adda-group-new").style.left = "revert";
      document.getElementById("adda-group-new").style.right = "-40px";
      document.getElementById("adda-group-new").style.bottom = "0px";
      
    } 
  }
}



function changeFuchkaCardView(){
  if (fuchkaCardsAreOpen == true){
    if (screenSizeLessThan770 == true){
      document.getElementById("fuchka-container").style.transitionProperty = "none";
      document.getElementById("fuchka-night").style.transitionProperty = "none";
      document.getElementById("fuchka-group").style.transitionProperty = "none";
      document.getElementById("fuchka-container").style.height = "1050px";
      document.getElementById("fuchka-container").style.margin = "auto";
      document.getElementById("fuchka-container").style.transform = "none";
      document.getElementById("fuchka-night").style.width = "320px";
      document.getElementById("fuchka-group").style.bottom = "-60px";
      document.getElementById("fuchka-group").style.left = "0";
      document.getElementById("fuchka-group").style.right = "revert";
      document.getElementById("fuchka-group").style.width = "320px";
    } else {
      document.getElementById("fuchka-container").style.transitionProperty = "none";
      document.getElementById("fuchka-night").style.transitionProperty = "none";
      document.getElementById("fuchka-group").style.transitionProperty = "none";
      document.getElementById("fuchka-container").style.height = "530px";
      document.getElementById("fuchka-night").style.width = "345px";
      document.getElementById("fuchka-group").style.width = "345px";
      document.getElementById("fuchka-group").style.left = "revert";
      document.getElementById("fuchka-group").style.right = "-40px";
      document.getElementById("fuchka-group").style.bottom = "-85px";
      
    } 
  }
}

function changeIftarCardView(){
  if (iftarCardsAreOpen == true){
    if (screenSizeLessThan770 == true){
      document.getElementById("iftar-container").style.transitionProperty = "none";
      document.getElementById("iftar-night").style.transitionProperty = "none";
      document.getElementById("iftar-vid").style.transitionProperty = "none";
      document.getElementById("iftar-container").style.height = "1050px";
      document.getElementById("iftar-container").style.margin = "auto";
      document.getElementById("iftar-container").style.transform = "none";
      document.getElementById("iftar-night").style.width = "320px";
      document.getElementById("iftar-vid").style.bottom = "-60px";
      document.getElementById("iftar-vid").style.left = "0";
      document.getElementById("iftar-vid").style.right = "revert";
      document.getElementById("iftar-vid").style.width = "320px";
    } else {
      document.getElementById("iftar-container").style.transitionProperty = "none";
      document.getElementById("iftar-night").style.transitionProperty = "none";
      document.getElementById("iftar-vid").style.transitionProperty = "none";
      document.getElementById("iftar-container").style.height = "530px";
      document.getElementById("iftar-night").style.width = "345px";
      document.getElementById("iftar-vid").style.width = "345px";
      document.getElementById("iftar-vid").style.left = "revert";
      document.getElementById("iftar-vid").style.right = "-40px";
      document.getElementById("iftar-vid").style.bottom = "-172px";
    } 
  }
}

function changeAdda2CardView(){
  if (adda2CardsAreOpen == true){
    document.getElementById("adda2-crowd").onclick = null;
    document.getElementById("adda2-food").onclick = null;
    document.getElementById("adda2-board").onclick = null;


    if (screenSizeLessThan770 == true){
      document.getElementById("move").style.transitionProperty = "none";
      document.getElementById("adda2-food-container").style.transitionProperty = "none";
      document.getElementById("adda2-board-container").style.transitionProperty = "none";
      document.getElementById("adda2-container").style.transitionProperty = "none";
      adda2CardHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + 30 - 5.5;
      adda2CardHeightMultipliedByTwo = adda2CardHeight*2 - 30;
      // adda2ContainerHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + 30 + document.getElementById("adda2-crowd").offsetHeight * 1.11  + document.getElementById("adda2-crowd").offsetHeight * 1.11;
      // test = document.getElementById("adda2-container").offsetHeight * 1.11;
      
      moveComputedHeight = document.getElementById("move").offsetHeight;

      adda2ContainerHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + document.getElementById("adda2-crowd").offsetHeight * 1.11 + document.getElementById("adda2-crowd").offsetHeight * 1.11 - 10;

      test = document.getElementById("adda2-container").offsetHeight * 1.11;

      moveHeight = adda2ContainerHeight - test - 60;

      adda2ContainerHeight = test + moveComputedHeight;



      document.getElementById("adda2-food-container").style.top = adda2CardHeight + "px";
      document.getElementById("adda2-board-container").style.top = adda2CardHeightMultipliedByTwo + "px";
      // document.getElementById("move").style.height = moveHeight + "px";

      
      // document.getElementById("gallery-green").style.backgroundColor = "blue";
      
    } else {
      document.getElementById("gallery-container").style.transitionProperty = "none";
      document.getElementById("adda2-crowd-container").style.transitionProperty = "none";
      document.getElementById("adda2-food-container").style.transitionProperty = "none";
      document.getElementById("adda2-board-container").style.transitionProperty = "none";

      

    } 
  }
}

function changeCholoCardView(){
  if (choloCardsAreOpen == true){
    document.getElementById("cholo1").onclick = null;
    document.getElementById("cholo2").onclick = null;
    document.getElementById("cholo3").onclick = null;


    if (screenSizeLessThan770 == true){
      document.getElementById("move2").style.transitionProperty = "none";
      document.getElementById("cholo2-container").style.transitionProperty = "none";
      document.getElementById("cholo3-container").style.transitionProperty = "none";
      document.getElementById("cholo-container").style.transitionProperty = "none";
      adda2CardHeight = document.getElementById("cholo1").offsetHeight * 1.11 + 24.5;
      adda2CardHeightMultipliedByTwo = adda2CardHeight*2 - 30;
      // adda2ContainerHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + 30 + document.getElementById("adda2-crowd").offsetHeight * 1.11  + document.getElementById("adda2-crowd").offsetHeight * 1.11;
      // test = document.getElementById("adda2-container").offsetHeight * 1.11;
      
      moveComputedHeight = document.getElementById("move2").offsetHeight;

      adda2ContainerHeight = document.getElementById("cholo1").offsetHeight * 1.11 + document.getElementById("cholo1").offsetHeight * 1.11 + document.getElementById("cholo1").offsetHeight * 1.11 - 10;

      test = document.getElementById("adda2-container").offsetHeight * 1.11;

      moveHeight = adda2ContainerHeight - test - 35.5 - 71 + 32;

      adda2ContainerHeight = test + moveComputedHeight;



      document.getElementById("cholo2-container").style.top = adda2CardHeight + "px";
      document.getElementById("cholo3-container").style.top = adda2CardHeightMultipliedByTwo + "px";
      document.getElementById("move2").style.height = moveHeight + "px";
      
      // document.getElementById("gallery-green").style.backgroundColor = "blue";
      
    } else {
      document.getElementById("gallery-container").style.transitionProperty = "none";
      document.getElementById("cholo1-container").style.transitionProperty = "none";
      document.getElementById("cholo2-container").style.transitionProperty = "none";
      document.getElementById("cholo3-container").style.transitionProperty = "none";

      document.getElementById("cholo2-container").style.top = "1475px";
      document.getElementById("cholo3-container").style.top = "2010px"


    } 
  }
}

function changeIftar24CardView(){
  if (iftar24CardsAreOpen == true){
    document.getElementById("iftar24-1").onclick = null;
    document.getElementById("iftar24-2").onclick = null;
    document.getElementById("iftar24-3").onclick = null;


    if (screenSizeLessThan770 == true){
      document.getElementById("move3").style.transitionProperty = "none";
      document.getElementById("iftar24-2-container").style.transitionProperty = "none";
      document.getElementById("iftar24-3-container").style.transitionProperty = "none";
      document.getElementById("iftar24-container").style.transitionProperty = "none";
      adda2CardHeight = document.getElementById("iftar24-1").offsetHeight * 1.11 + 24.5;
      adda2CardHeightMultipliedByTwo = adda2CardHeight*2 - 30;
      // adda2ContainerHeight = document.getElementById("adda2-crowd").offsetHeight * 1.11 + 30 + document.getElementById("adda2-crowd").offsetHeight * 1.11  + document.getElementById("adda2-crowd").offsetHeight * 1.11;
      // test = document.getElementById("adda2-container").offsetHeight * 1.11;
      
      moveComputedHeight = document.getElementById("move3").offsetHeight;

      adda2ContainerHeight = document.getElementById("iftar24-1").offsetHeight * 1.11 + document.getElementById("iftar24-1").offsetHeight * 1.11 + document.getElementById("iftar24-1").offsetHeight * 1.11 - 10;

      test = document.getElementById("iftar24-container").offsetHeight * 1.11;

      moveHeight = adda2ContainerHeight - test - 74.37;

      adda2ContainerHeight = test + moveComputedHeight;



      document.getElementById("iftar24-2-container").style.top = adda2CardHeight + "px";
      document.getElementById("iftar24-3-container").style.top = adda2CardHeightMultipliedByTwo + "px";
      document.getElementById("move3").style.height = moveHeight + "px";

      
      // document.getElementById("gallery-green").style.backgroundColor = "blue";
      
    } else {
      document.getElementById("gallery-container").style.transitionProperty = "none";
      document.getElementById("iftar24-1-container").style.transitionProperty = "none";
      document.getElementById("iftar24-2-container").style.transitionProperty = "none";
      document.getElementById("iftar24-3-container").style.transitionProperty = "none";

      document.getElementById("iftar24-2-container").style.top = "2340px";
      document.getElementById("iftar24-3-container").style.top = "2875px";


    } 
  }
}



// function changeCardView() {
//   if (screenSizeLessThan770 == true){
//     document.getElementById("green").style.backgroundColor = "red";
//   } else if(screenSizeMoreThan950 == true){
//     document.getElementById("card-container").style.width = "100%";
//     document.getElementById("adda-night").style.width = "289px";
//     document.getElementById("adda-group").style.width = "289px";
//     document.getElementById("adda-food").style.width = "289px";
//     document.getElementById("adda-group").style.bottom = "30px";
//     document.getElementById("adda-food").style.bottom = "30px";
//     document.getElementById("introduction2").style.paddingTop = "0px";
//     document.getElementById("introduction").style.paddingBottom = "80px";
//     document.getElementById("green").style.backgroundColor = "blue";
//   } else {
//     document.getElementById("green").style.backgroundColor = "yellow";
//     document.getElementById("card-container").style.width = "289px";
//     document.getElementById("adda-night").style.width = "100%";
//     document.getElementById("adda-group").style.width = "100%";
//     document.getElementById("adda-food").style.width = "100%";
//     document.getElementById("adda-group").style.bottom = "-445px";
//     document.getElementById("adda-food").style.bottom = "-920px";
//     document.getElementById("introduction2").style.paddingBottom = "0px";
//     document.getElementById("introduction2").style.paddingTop = "925px";
//     document.getElementById("introduction2").style.paddingBottom = "225px";
//   }
// }

var fallButton = document.getElementById("fall-btn");

if (fallButton != null){
  document.getElementById("fall-btn").addEventListener("click", changeViewToFall);
  document.getElementById("winter-btn").addEventListener("click", changeViewToWinter);
}

function changeViewToFall(){
  document.getElementById("fall-span").textContent = "Fall 2024 ⏴";
  document.getElementById("winter-span").textContent = "Winter 2024";
  document.getElementById("fall-events").style.opacity = "1";
  document.getElementById("winter-events").style.opacity = "0";
}

function changeViewToWinter(){
  if (screenSizeLessThan770 == true){
    document.getElementById("winter-events").style.top = "28px";
  } else {
  }
  document.getElementById("winter-span").textContent = "Winter 2024 ⏴";
  document.getElementById("fall-span").textContent = "Fall 2024";
  document.getElementById("fall-events").style.opacity = "0";
  document.getElementById("winter-events").style.opacity = "1";
}

var fallOldButton = document.getElementById("fall-old-btn");

if (fallOldButton != null){
  document.getElementById("fall-old-btn").addEventListener("click", changeViewToFallOld);
  document.getElementById("winter-old-btn").addEventListener("click", changeViewToWinterOld);
}

function changeViewToFallOld(){
  document.getElementById("fall-old-span").textContent = "Fall 2022 ⏴";
  document.getElementById("winter-old-span").textContent = "Winter 2022";
  document.getElementById("fall-events").style.opacity = "1";
  document.getElementById("winter-events").style.opacity = "0";
}

function changeViewToWinterOld(){
  if (screenSizeLessThan770 == true){
    document.getElementById("winter-old-events").style.top = "28px";
  } else {
  }
  document.getElementById("winter-old-span").textContent = "Winter 2022 ⏴";
  document.getElementById("fall-old-span").textContent = "Fall 2022";
  document.getElementById("fall-events").style.opacity = "0";
  document.getElementById("winter-events").style.opacity = "1";
}


function myFunction() {
  alert("Hello! I am an alert box!");
}

let vid = document.getElementById("iftar-vid");

function playVid() {
    vid.play();
}

function goToHome(){
  
}
