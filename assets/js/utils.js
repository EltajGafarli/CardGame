// ## GIVEN ##

function getRandomNumber(max, min = 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomListItem(list){
    return list[getRandomNumber(list.length)]
}

// ## YOUR ADDED FUNCTIONS ##
