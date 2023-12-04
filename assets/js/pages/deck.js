// ## GIVEN ##

function  initDeckbuildingPage(){
    const deckBuildingBtn = document.getElementById("deckBuildingBtn");
    deckBuildingBtn.addEventListener('click', function () {
        let attribute = deckBuildingBtn.getAttribute("data-target");
        let boosters = document.getElementById("boosters");

        let deckBuilding = document.getElementById(attribute);
        if(deckBuilding) {
            deckBuilding.classList.toggle("hidden");
            boosters.classList.toggle("hidden");

        }

    });

    renderCardPool()
}

function renderCardPool(){
    cards = _allCards

}

function renderDeck(){

}

function renderDeckZones(){

}

function showCardDetail(e){

}

function moveCardToDeck(e){

}

function moveCardToPool(e){
    
}


// ## YOUR ADDED FUNCTIONS ##
