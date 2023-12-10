
// ## GIVEN ##

function initThankYouPage(){
    const thanks = document.getElementById("thanks");

    const thanksp = document.querySelector("#thanks div p")

    let deckBuilding = document.getElementById("deck-building");




    let name = localStorage.getItem("name");
    let setName = localStorage.getItem("set");
    thanksp.innerHTML = `Good luck and have fun ${name} with ${getNameFromSet(setName)}!`;
    thanks.classList.toggle("hidden");

    deckBuilding.classList.toggle("hidden");

//Good luck and have fun Dim with Shards of Alara!

}

function getNameFromSet(setName) {
    const sets = config.sets;
    return sets[setName];
}

// ## YOUR ADDED FUNCTIONS ##