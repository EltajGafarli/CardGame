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

    let cards = getOpenedBoosters();
    let types = [];
    let search = "";


    const manaButtons = document.querySelectorAll('#deck-building .popup .container .builder .card-pool header .filter .manas .mana');

    types = getTypes(manaButtons);

    cards = getFilteredCardPool(search, types);




    cardsToHTML(cards);

    manaButtons.forEach(button => {

        button.addEventListener('click', function() {
            // Toggle the 'selected' class on button click
            this.classList.toggle('selected');

            // Perform filtering based on the selected mana types

            types = Array.from(document.querySelectorAll('#deck-building .popup .container .builder .card-pool header .filter .manas .selected'))
                .map(selectedButton => selectedButton.getAttribute('data-mana'));

            cards = getFilteredCardPool(search, types);


            cardsToHTML(cards);
        });
    });

    let deckBuildingCardPoolForm = document.querySelector("#deck-building .popup .container .builder .card-pool header .filter input")
    deckBuildingCardPoolForm.addEventListener('keyup', function (){

        let deckBuilding = document.querySelector("#deck-building .popup .container .scrollable");

        cards = getFilteredCardPool(this.value, types);
        cardsToHTML(cards);


    });



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


function getTypes(manaButtons) {

    let types = [];
    manaButtons.forEach(button => {
        types = Array.from(document.querySelectorAll('#deck-building .popup .container .builder .card-pool header .filter .manas .selected'))
            .map(selectedButton => selectedButton.getAttribute('data-mana'));

    });

    return types;
}

function cardsToHTML(cards) {
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