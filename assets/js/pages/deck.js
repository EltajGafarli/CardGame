// ## GIVEN ##

function  initDeckbuildingPage(){
    changeBackground() // TODO: Added navigation Page
    const deckBuildingBtn = document.getElementById("deckBuildingBtn");
    const cardDetail = document.querySelector(".card-detail")

    deckBuildingBtn.addEventListener('click', function () {
        let attribute = deckBuildingBtn.getAttribute("data-target");
        let boosters = document.getElementById("boosters");

        cardDetail.classList.toggle("hidden")

        let deckBuilding = document.getElementById(attribute);
        if(deckBuilding) {
            deckBuilding.classList.toggle("hidden");
            boosters.classList.toggle("hidden");

        }
        renderCardPool()
        renderDeck();
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

            // renderDeckZones();
        });
    });

    let deckBuildingCardPoolForm = document.querySelector("#deck-building .popup .container .builder .card-pool header .filter input")
    deckBuildingCardPoolForm.addEventListener('keyup', function (){

        let deckBuilding = document.querySelector("#deck-building .popup .container .scrollable");

        cards = getFilteredCardPool(this.value, types);
        cardsToHTML(cards);


    });


    let cardPool = document.querySelector(".card-pool");
    cardPool.addEventListener('mouseover', function () {
        let cardsElement = document.querySelectorAll(".card-pool ul li .card");
        cardsElement.forEach(card => {
            card.addEventListener('mouseover', function () {
                showCardDetail(card);
            });

            moveCardToDeck(card);
        });
    })

    // renderDeck();


}

function renderDeck(){



    let deckCardZone = document.querySelector(".deck ol");

    deckCardZone.addEventListener('mouseover', function (){
        const cardsFromDeck = document.querySelectorAll(".deck ol li ul li .card");
        cardsFromDeck.forEach(card => {
            moveCardToPool(card);
        })
    });

    renderDeckZones();



}

function renderDeckZones(){


    const deckElement = document.querySelectorAll(".deck ol li ul")

    deckElement.forEach(ul => ul.innerHTML = "");

    let decks = getDeck();

    // let cardId = e.getAttribute("data-id");
    // let cardById = getCardFromPool(cardId);
    //
    // let cmc = Number.parseInt(cardById.cmc)


    // let cards = deck[cmc];
    // let id = 0;




    for(let i = 0; i < decks.length; i ++) {
        let cardsHtml = "";
        let id = 0;
        let cmc = 0;

        for(let card of decks[i]) {
            cardsHtml += `<li><img class="card"
                                   src="${card.image}"
                                   alt="${card.name}" title="${card.name}"
                                   data-id="${card.id}"
                                  data-sequence-id="${id}"></li>`
            id ++;
            cmc = card.cmc;
        }

        cardsHtml = `<h4>${cmc}</h4> <ul>${cardsHtml}</ul>`;
        const liElementsWithSpecificCmc = document.querySelector(`ol.cards.container.scrollable li[data-cmc="${cmc}"]`);
        liElementsWithSpecificCmc.innerHTML = cardsHtml;

    }





}

function showCardDetail(e){
    let cardDetail = document.querySelector(".card-detail .detail");
    let src = e.getAttribute("src");
    let alt = e.getAttribute("alt");
    let title = e.getAttribute("title");
    cardDetail.innerHTML = `<img src="${src}" alt="${alt}" title="${title}">`;

}

function moveCardToDeck(e){
    e.addEventListener('click', function (){

        moveCardFromPoolToDeck(e.getAttribute("data-id"));


    })



}

function moveCardToPool(e){
    // let card = document.querySelectorAll(".deck ol li ul li .card");
    e.addEventListener('click', function () {
       moveCardFromDeckToPool(e.getAttribute("data-id"));
       e.classList.add("hidden");
    });
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

    defaultSort(cards);

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


