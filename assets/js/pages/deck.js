// ## GIVEN ##

function  initDeckbuildingPage(){
    changeBackground() // TODO: Added navigation Page
    const deckBuildingBtn = document.getElementById("deckBuildingBtn");
    const cardDetail = document.querySelector(".card-detail");

    const showStatsButton = document.getElementById("show-stats-btn");

    deckBuildingBtn.addEventListener('click', function () {
        let attribute = deckBuildingBtn.getAttribute("data-target");
        let boosters = document.getElementById("boosters");

        cardDetail.classList.toggle("hidden")

        let deckBuilding = document.getElementById(attribute);
        if(deckBuilding) {
            deckBuilding.classList.toggle("hidden");
            boosters.classList.toggle("hidden");

        }
        renderCardPool();
        emptyDeck();
    });


    showStatsButton.addEventListener('click', function () {
        document.getElementById("deck-building").classList.toggle("hidden");
        initStatsPage();
    })


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

    cardPool.addEventListener('mouseover', function (event) {
        const targetCard = event.target.closest('.card');
        if (targetCard) {
            showCardDetail(targetCard);
        }
    });

    cardPool.addEventListener('click', function (event) {
        const targetCard = event.target.closest('.card');
        if (targetCard) {
            moveCardFromPoolToDeck(targetCard.getAttribute("data-id"));
            renderDeck();
        }
    });



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




    let decks = getDeck();




    for(let deck of decks) {
        let cardsHtml = "";
        let id = 0;
        let cmc = 0;


        for(let card of deck) {
            cardsHtml += `<li><img class="card"
                                   src="${card.image}"
                                   alt="${card.name}" title="${card.name}"
                                   data-id="${card.id}"
                                  data-sequence-id="${id}"></li>`
            id ++;
            cmc = card.cmc;
        }




        let cardsHtmlForUl = `<h4>${cmc}</h4> <ul>${cardsHtml}</ul>`;
        let liElementsWithSpecificCmc = document.querySelector(`ol li[data-cmc="${cmc}"]`);
        liElementsWithSpecificCmc.innerHTML = cardsHtmlForUl;
    }

    let liElementsWithSpecificCmc = document.querySelector(`ol li[data-cmc="0"]`);
    let cardsHtml = "";
    let id = 0;
    let cmc = 0;
    for(let card of decks[0]) {
        cardsHtml += `<li><img class="card"
                                   src="${card.image}"
                                   alt="${card.name}" title="${card.name}"
                                   data-id="${card.id}"
                                  data-sequence-id="${id}"></li>`
        id ++;
    }
    liElementsWithSpecificCmc.innerHTML = `<h4>${cmc}</h4> <ul>${cardsHtml}</ul>`;





}

function showCardDetail(e){
    e.addEventListener('mouseover', function () {
        let cardDetail = document.querySelector(".card-detail .detail");
        let src = e.getAttribute("src");
        let alt = e.getAttribute("alt");
        let title = e.getAttribute("title");
        cardDetail.innerHTML = `<img src="${src}" alt="${alt}" title="${title}">`;
    });

}

function moveCardToDeck(e){
    e.addEventListener('click', function (){
        moveCardFromPoolToDeck(e.getAttribute("data-id"));
        console.log("Hello World");
    });

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


function emptyDeck() {
    const deckElement = document.querySelectorAll(".deck ol li ul")

    deckElement.forEach(ul => ul.innerHTML = "");
}

