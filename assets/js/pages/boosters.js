
// _unopendBoosters: contains the list of boosterpacks, opened and/or unopened
// for example: [0, 1, 2, 1, 3, 3]
// this means: first booster is open and has the version 0 image, second is not open and has the version image, third one is not open and has the version 2 image, ...
// if you have an better/other solution here, you may implent your own!!!

let _unopendBoosters = [];
let _openedBoosters = []

const _MAX_BOOSTER_VERSIONS = 3;


// ## GIVEN ##

function initBoostersPage(){
    const set = localStorage.getItem('set');
    const boosters = localStorage.getItem('boosters');

    let _unopendBoostersHTML = "";

    for(let i = 0; i < boosters; i++){

        let ranNum = getRandomNumber(3, 1);

        _unopendBoosters.push(ranNum);

        _unopendBoostersHTML += `<li><img src="images/${set}/booster_v${ranNum}.jpg" alt="booster" title="booster" data-booster="${i}" data-open="0"></li>`;
    }

    document.querySelector("#unopenedBoosters").innerHTML = _unopendBoostersHTML;
    loadSet(set);

    let openedBoostersElement = document.getElementById("openedBooster");
    openedBoostersElement.innerHTML = "";
    let unOpenedBoostersElement = document.querySelectorAll("#unopenedBoosters li");
    console.log(unOpenedBoostersElement)
    unOpenedBoostersElement.forEach(button => button.addEventListener('click', function (){
        button.innerHTML = `<img src="images/ala/booster_v0.jpg" alt="booster" title="booster"
                                                        data-booster="1" data-open="0">`

        openedBoosters()
    }));
}


// ## YOUR ADDED FUNCTIONS ##

function openedBoosters() {
    let booster = getBooster();
    _openedBoosters.push(...booster);


    let id = 0;

    let openedBoosterHTML = "";

    for(const card of booster) {
        openedBoosterHTML += `<li><img class="card"
                                      src="${card.image}"
                                      alt="${card.name}" title="${card.name}"
                                      data-id="${card.id}"
                                      data-sequence-id="${id}"></li>`

        id ++;
    }




    document.getElementById("openedBooster").innerHTML = openedBoosterHTML;
}


function getOpenedBoosters() {
    return _openedBoosters;
}