

// ## GIVEN ##

// important: never use the variable directly in other javascript files!!!!
const _cards = [];

// important: never use the variable directly in other javascript files!!!!
let _rarityList;


// Loads a set of cards into the _cards array
function loadSet(set){

    if(set === "ala") {
        _cards.push(..._allCards.ala)
    } else if(set === "usg") {
        _cards.push(..._allCards.usg);
    } else {
        _cards.push(..._allCards.one);
    }

}

// Retrieves the current list of cards stored in _cards.
function getCards(){
    return _cards;
}

// Searches for a card by its ID in the _cards array. If found, returns the card object; otherwise, returns null.
function findCardById(id){
    for (let card of _cards) {
        if (card.id === id) {
            return card;
        }
    }

    return null;
}


// Generates a booster pack of cards based on a predefined structure from the config object. It selects unique and random cards based on rarity and adds them to the booster pack.
// An array of (unqiue and random) card objects representing a booster pack.
function getBooster(){
    let structure = config.booster.structure;
    const boosterPack = []



    for (let rarity in structure) {
        if (structure.hasOwnProperty(rarity)) {

            const numberOfCards = structure[rarity];
            let randomCards = getRandomBooster(rarity, numberOfCards);
            if(rarity === "wildcard") {
                let randomRarity = getRandomRarity();
                randomCards = getRandomBooster(randomRarity, numberOfCards);

            }
            boosterPack.push(...randomCards);
        }
    }

    return boosterPack;
}

// Selects a random set of cards based on rarity. It ensures that no duplicates or basic land  are included .
function getRandomCards(rarity, nrOfCards){
    // Filter cards based on rarity
    const cardsOfRarityObject = getCardListByRarity();
    const cardsOfRarity = cardsOfRarityObject[rarity] || [];


    // Exclude basic lands
    const nonBasicLandCards = cardsOfRarity.filter(card => !isBasicLand(card));

    // Shuffle the non-basic land cards
    const shuffledCards = shuffleArray(nonBasicLandCards);


    // Take the specified number of cards
    return shuffledCards.slice(0, nrOfCards);

}

// Organizes all cards from _cards by their rarity. If this has been done before, it returns the previously created list.
function getCardListByRarity() {
    if (_rarityList) {
        // If the rarity list has already been created, return it
        return _rarityList;
    }

    // If the rarity list doesn't exist, create and return it
    const rarityList = {};

    // Group cards by rarity
    _cards.forEach(card => {
        const rarity = card.rarity;
        if (!rarityList[rarity]) {
            rarityList[rarity] = [];
        }
        rarityList[rarity].push(card);
    });

    // Save the created rarity list for future use
    _rarityList = rarityList;

    return rarityList;
}

function isBasicLand(card){
    let color = card.colors
    return color.includes("G") || color.includes("R") || color.includes("U") || color.includes("W") || color.includes("B");
}

//  Retrieves all basic land cards from _cards.
function getBasicLands() {
    return _cards.filter(isBasicLand);
}


// ## YOUR ADDED FUNCTIONS ##


// Helper function to shuffle an array
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function getRandomRarity() {
    const rarities = ["common", "uncommon", "rare"];

    return rarities[getRandomNumber(rarities.length)];
}

function getRandomBooster(rarity, nrOfCards) {
    const cardsOfRarityObject = getCardListByRarity();
    const cardsOfRarity = cardsOfRarityObject[rarity] || [];


    // Exclude basic lands
    // Shuffle the non-basic land cards
    const shuffledCards = shuffleArray(cardsOfRarity);


    // Take the specified number of cards
    return shuffledCards.slice(0, nrOfCards);

}