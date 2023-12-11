// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    initSubscribePage();
    const deckBuildingBtn = document.getElementById("deckBuildingBtn");
    navigate(deckBuildingBtn);
}

function navigate(e){
    e.addEventListener('click', function (){
        e.classList.toggle("hidden");
        let dataTarget = e.getAttribute("data-target");
        navigateToPage(dataTarget);
    });
}

function navigateToPage(targetId){
    if(targetId === "deck-building") {
        initDeckbuildingPage();
    }
}


// ## YOUR ADDED FUNCTIONS ##


function changeBackground() {
    let body = document.querySelector("body");

    let bodyClasses = ["background-01", "background-02", "background-03"]

    let size = bodyClasses.length;

    let randomNumber = getRandomNumber(NR_OF_BACKGROUNDS - 1);

    let currentClass = body.classList.item(0);

    body.classList.replace(currentClass, bodyClasses[randomNumber]);
}