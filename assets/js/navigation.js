// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    
}

function navigate(e){

}

function navigateToPage(targetId){

}


// ## YOUR ADDED FUNCTIONS ##


function changeBackground() {
    let body = document.querySelector("body");

    let bodyClasses = ["background-01", "background-02", "background-03"]

    let size = bodyClasses.length;

    let randomNumber = getRandomNumber(size - 1);

    let currentClass = body.classList.item(0);

    body.classList.replace(currentClass, bodyClasses[randomNumber]);
}