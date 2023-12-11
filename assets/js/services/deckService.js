// important: never use the variable directly in other javascript files!!!!
let _cardPool = [];

// important: never use the variable directly in other javascript files!!!!
let _deck = [];


// Retrieves a sorted list of cards from the card pool, filtered by a search string and types.
function getFilteredCardPool(search, types){


    _cardPool = getOpenedBoosters();
    return filterCards(_cardPool, search, types);
}

// Retrieves a sorted list of cards from the deck, filtered by a search string and types.
function getFilteredDeck(search, types){

    let filteredDeck = []

    for(let i = 0; i < _deck.length; i ++) {
        let cards = _deck[i];
        let filteredCards = filterCards(cards, search, types);

        filteredDeck.push(filteredCards);
    }

    return filteredDeck;
    
}

// Retrieves the complete deck.
function getDeck(){
    if(_deck.length === 0) {
        for(let i = 0; i < 9; i ++) {
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

    let cards = _cardPool;

    let maxCMC = 0;

    for(let card of cards) {
        maxCMC = Math.max(maxCMC, card.cmc)
    }

    return maxCMC;
}

function getCardFromPool(cardId){
    return getCardPool().find(card => card.id === cardId) || null
}

function getCardFromDeck(cardId){
    for(let deck of getDeck()) {
        for(let card of deck) {
            if(card.id === cardId){
                return card;
            }
        }
    }

    return null;
}

function moveCardFromPoolToDeck(cardId){


    let card = getCardFromPool(cardId) || null;
    if(card == null) {
        return;
    }

    console.log(card.cmc)

    getDeck()[card.cmc].push(card);


    
}

function moveCardFromDeckToPool(cardId){
    let card = getCardFromDeck(cardId);
    if(card == null) {
        return;
    }

    let row = getDeck()[card.cmc];
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
    let count = 0;

    for(let deck of _deck) {
        for(let card of deck) {
            if(card.card_face.type_line.main.includes("Creature")) {
                count ++;
            }
        }
    }

    return count;
}

function getLandCount(){
    let count = 0;

    for(let deck of _deck) {
        for(let card of deck) {
            if(card.card_face.type_line.main.includes("Land")) {
                count ++;
            }
        }
    }

    return count;
}

function getNoneCreatureNoneLandCount(){
    let count = 0;

    for(let deck of _deck) {
        for(let card of deck) {
            if(!card.card_face.type_line.main.includes("Land") && !card.card_face.type_line.main.includes("Creature")) {
                count ++;
            }
        }
    }

    return count;
}

// Counts the occurrence of each mana type in the deck.
function getManasCount(){


    const manaCount = {}

    for(let deck of _deck) {
        for(let card of deck) {

            let colors = card.colors;

            if(colors.length === 0) {
                manaCount["colorless"] = (manaCount["colorless"] || 0) + 1;
                break;
            }

            for(let color of colors) {
                manaCount[color] = (manaCount[color] || 0) + 1;
            }
        }
    }

    return manaCount;
}

function filterCards(cards, search, types){

    let filteredCardsBySearch = filterCardsBySearch(cards, search);
    return filterCardsByType(filteredCardsBySearch, types);

}

function filterCardsByType(cards, types){
    let filteredCards = [];


    for(let card of cards) {

        if(types.length > 0 && card.colors.length > 0 ) {
            let colors = card.colors;

            for(let color of colors) {
                if(types.includes(color)) {
                    filteredCards.push(card);
                    break;
                }
            }


        } else if(types.length > 0 && card.colors.length === 0 && types.includes('')) {
            filteredCards.push(card);
        } else if(types.length === 0)  {
            filteredCards.push(card)
        }
    }

    return filteredCards;
}

function filterCardsBySearch(cards, search){

    let filteredCards = []


    for(let card of cards) {
        if(card.name.includes(search) || card.rarity.includes(search) || card.card_face.oracle_text.includes(search) || card.type_line.includes(search)) {
            filteredCards.push(card);
        }
    }


    return filteredCards;


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
        return "Unknown";
    }
}




