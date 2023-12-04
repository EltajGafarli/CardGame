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
        renderCardPool()
    });


}

function renderCardPool(){

    let deckBuildingCardPoolForm = document.querySelector("#deck-building .popup .container .builder .card-pool header .filter input")
    deckBuildingCardPoolForm.addEventListener('keyup', function (){
        this.value
    });

    let cards = getOpenedBoosters();


    let deckBuilding = document.querySelector("#deck-building .popup .container .scrollable");

    let cardsHtml = "";
    let id = 0;
    for(let card of cards) {
        cardsHtml += `<li><img class="card"
                                      src="${card.image}"
                                      alt="${card.name}" title="${card.name}"
                                      data-id="${card.id}"
                                      data-sequence-id="${id}"></li>`
        id ++;
    }

    deckBuilding.innerHTML = cardsHtml;



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
