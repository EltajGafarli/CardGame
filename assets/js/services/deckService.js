// important: never use the variable directly in other javascript files!!!!
let _cardPool = [];

// important: never use the variable directly in other javascript files!!!!
let _deck = [];


// Retrieves a sorted list of cards from the card pool, filtered by a search string and types.
function getFilteredCardPool(search, types){


    _cardPool = getOpenedBoosters();

    let cards = []

    for(let card of _cardPool) {
        if(card.name.includes(search) || card.rarity.includes(search) || card.card_face.oracle_text.includes(search)) {
            cards.push(card);
        }
    }


    return cards;
}

// Retrieves a sorted list of cards from the deck, filtered by a search string and types.
function getFilteredDeck(search, types){
    
}

// Retrieves the complete deck.
function getDeck(){
    return _deck
}

// Retrieves the complete CardPool.
function getCardPool(){
    return _cardPool
}

 

function defaultSort(cards){
    
}

function addCardsToCardPool(cards){
    
}

function getBiggestManaCostFromCardPool(){    
    
}

function getCardFromPool(cardId){
    
}

function getCardFromDeck(cardId){
    
}

function moveCardFromPoolToDeck(cardId){
    
    
}

function moveCardFromDeckToPool(cardId){
    
}

function getCreatureCount(){
    
}

function getLandCount(){
    
}

function getNoneCreatureNoneLandCount(){
    
}

// Counts the occurrence of each mana type in the deck.
function getManasCount(){
    
}

function filterCards(cards, search, types){
    
}

function filterCardsByType(cards, types){

}

function filterCardsBySearch(cards, search){

}


// ## YOUR ADDED FUNCTIONS ##