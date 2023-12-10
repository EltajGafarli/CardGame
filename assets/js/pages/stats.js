// ## GIVEN ##

function initStatsPage(){
    const stats = document.getElementById("stats")


    stats.classList.toggle("hidden");
    typeStats();
    manaStats();




    // stats.classList.remove("hidden")
}


// ## YOUR ADDED FUNCTIONS ##

function typeStats() {
    let typeStats = document.getElementById("type-stats");
    let creaturesCount = getCreatureCount();
    let nonCreature = getNoneCreatureNoneLandCount();
    let landCount = getLandCount();
    let total = creaturesCount + nonCreature + landCount;

    let creatureLi = `<li>
                        <p><span>Creatures:</span> ${creaturesCount}</p>
                    </li>`

    let nonCreatureLi = `<li>
                        <p><span>None creatures:</span> ${nonCreature}</p>
                    </li>`

    let landLi = `<li>
                        <p><span>Lands:</span> ${landCount}</p>
                    </li>`



    let totalLi = `<li class="total">
                        <p><span>Total:</span> ${total}</p>
                    </li>`

    typeStats.innerHTML = `${creatureLi} ${nonCreatureLi} ${landLi} ${totalLi}`;


}


function manaStats() {
    let manasCount = getManasCount();
    let allManasCount = findManaCount(manasCount);

    let manaStats = document.getElementById("mana-stats");
    manaStats.innerHTML = "";

    let white = `<li>
                        <div class="mana white" data-mana="W"></div>
                        <p>${getManaFromManas(manasCount, 'W')}<br>${findPercent(getManaFromManas(manasCount, 'W'), allManasCount)}%</p>
                    </li>`;


    let blue = `<li>
                        <div class="mana blue" data-mana="U"></div>
                        <p>${getManaFromManas(manasCount, 'U')}<br>${findPercent(getManaFromManas(manasCount, 'U'), allManasCount)}%</p>
                    </li>`;

    let black = `<li>
                        <div class="mana black" data-mana="B"></div>
                        <p>${getManaFromManas(manasCount, 'B')}<br>${findPercent(getManaFromManas(manasCount, 'B'), allManasCount)}%</p>
                    </li>`;

    let red = `<li>
                        <div class="mana red" data-mana="R"></div>
                        <p>${getManaFromManas(manasCount, 'R')}<br>${findPercent(getManaFromManas(manasCount, 'R'), allManasCount)}%</p>
                    </li>`;


    let green = `<li>
                        <div class="mana green" data-mana="G"></div>
                        <p>${getManaFromManas(manasCount, 'G')}<br>${findPercent(getManaFromManas(manasCount, 'G')
        , allManasCount)}%</p>
                    </li>`;


    let colorless = `<li>
                        <div class="mana colorless" data-mana="A"></div>
                        <p>${getManaFromManas(manasCount, 'colorless')}<br>${findPercent(getManaFromManas(manasCount, 'colorless'), allManasCount)}%</p>
                    </li>`;




    manaStats.innerHTML = `
        ${white} 
        ${blue}
        ${black}
        ${red}
        ${green}
        ${colorless}
    `

}

function findManaCount(manas) {

    let count = 0;
    for(let key in manas) {
        count += manas[key];
    }

    return count;
}


function findPercent(colorCount, allCount) {

    if(allCount === 0) return 0;
    colorCount = colorCount * 100;
    if(colorCount % allCount === 0) {
        return colorCount / allCount;
    }

    return Number.parseInt(`${colorCount / allCount}`) + 1;
}

function getManaFromManas(manasCount, mana) {
    return manasCount[mana] || 0;
}

function backButton() {

    const stats = document.getElementById("stats")

    let statsBackBtn = document.getElementById("stats-back-btn");
    let deckBuilding = document.getElementById("deck-building");

    statsBackBtn.addEventListener('click', function (){
       stats.classList.toggle("hidden");
       deckBuilding.classList.toggle("hidden");
    });


}

