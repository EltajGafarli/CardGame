// important: never use the variable directly in other javascript files!!!!
let _cardPool = [];

// important: never use the variable directly in other javascript files!!!!
let _deck = [];


// Retrieves a sorted list of cards from the card pool, filtered by a search string and types.
function getFilteredCardPool(search, types){


    _cardPool = getOpenedBoosters();

    let cards = []


    for(let card of _cardPool) {
        if(card.name.includes(search) || card.rarity.includes(search) || card.card_face.oracle_text.includes(search) || card.type_line.includes(search)) {

            if(types.length > 0 && card.colors.length > 0 ) {
                let colors = card.colors;

                for(let color of colors) {
                    if(types.includes(color)) {
                        cards.push(card);
                        break;
                    }
                }



            } else if(types.length > 0 && card.colors.length === 0 && types.includes('')) {
                cards.push(card);
            }
            else if(types.length === 0)  {
                cards.push(card)
            }
        }
    }


    return cards;
}

// Retrieves a sorted list of cards from the deck, filtered by a search string and types.
function getFilteredDeck(search, types){
    
}

// Retrieves the complete deck.
function getDeck(){
    if(_deck.length === 0) {
        for(let i = 0; i < 8; i ++) {
            _deck.push([])
        }
    }

    return _deck
}

// Retrieves the complete CardPool.
function getCardPool(){
    return _cardPool
}

 

function defaultSort(cards){
    const sortOrder = {
        "Land": 1,
        "Colorless Artifact": 2,
        "B": 3,
        "G": 4,
        "R": 5,
        "U": 6,
        "W": 7,
        "Multicolor": 8
    };

    cards.sort((cardA, cardB) => {
        const orderA = sortOrder[getCategory(cardA)] || Infinity;
        const orderB = sortOrder[getCategory(cardB)] || Infinity;

        return orderA - orderB;
    });
}

function addCardsToCardPool(cards){
    getCardPool().push(...cards);
}

function getBiggestManaCostFromCardPool(){    

}

function getCardFromPool(cardId){
    return getCardPool().find(card => card.id === cardId) || null
}

function getCardFromDeck(cardId){
    for(let deck of _deck) {
        for(let card of deck) {
            if(card.id === cardId){
                return card;
            }
        }
    }

    return null;
}

function moveCardFromPoolToDeck(cardId){
    let card = _cardPool.find(card => card.id === cardId) || null;

    _deck[card.cmc - 1].push(card);
    
}

function moveCardFromDeckToPool(cardId){
    let card = getCardFromDeck(cardId);
    let row = _deck[card.cmc - 1];
    let index = -1;
    for(let i = 0; i < row.length; i ++) {
        if(row[i].id === card.id) {
            index = i;
            break;
        }
    }

    row.splice(index, 1)


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




function getCategory(card) {
    if (card.type_line.includes("Land")) {
        return "Land";
    } else if (card.type_line.includes("Artifact") && card.colors.length === 0) {
        return "Colorless Artifact";
    } else if (card.colors.length === 1) {
        return card.colors[0];
    } else if (card.colors.length > 1) {
        return "Multicolor";
    } else {
        return "Unknown"; // Adjust this as needed based on your data
    }
}


