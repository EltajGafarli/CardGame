// ## GIVEN ##

function initSubscribePage(){
    const form = document.querySelector("form");

    const $nameInput = document.querySelector("#name");
    const $birthdateInput = document.querySelector("#birthdate");
    const $emailInput = document.querySelector("#email");
    const $boostersInput = document.querySelector("#boostersBtn");



    form.addEventListener('submit', function(event) {
        event.preventDefault();

        localStorage.setItem('name', $nameInput.value);
        localStorage.setItem('birthdate', $birthdateInput.value);
        localStorage.setItem('email', $emailInput.value);
        localStorage.setItem('set', form.elements["expansion"].value);
        localStorage.setItem('boosters', $boostersInput.value);

        document.querySelector("#subscribe").hidden = true;
        document.querySelector("#boosters").classList.remove("hidden");
        initBoostersPage();
    });
}

// ## YOUR ADDED FUNCTIONS ##

