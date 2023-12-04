
// ## GIVEN ##

function initThankYouPage(){
    const thanks = document.getElementById("thanks");

    const thanksp = document.querySelector("#thanks div p")

    let name = localStorage.getItem("name");
//Good luck and have fun Dim with Shards of Alara!

    thanksp.innerHTML = `Good luck and have fun ${name} with Shards of Alara!`
    thanks.classList.remove("hidden");


}

// ## YOUR ADDED FUNCTIONS ##