// ## GIVEN ##

function initSubscribePage() {
    const form = document.querySelector("form");

    const $nameInput = document.querySelector("#name");
    const $birthdateInput = document.querySelector("#birthdate");
    const $emailInput = document.querySelector("#email");
    const $boostersInput = document.querySelector("#boostersBtn");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            localStorage.setItem('name', $nameInput.value);
            localStorage.setItem('birthdate', $birthdateInput.value);
            localStorage.setItem('email', $emailInput.value);
            localStorage.setItem('set', form.elements["expansion"].value);
            localStorage.setItem('boosters', $boostersInput.value);

            document.querySelector("#subscribe").hidden = true;
            document.querySelector("#boosters").classList.remove("hidden");
            initBoostersPage();
        }
    });

    function validateForm() {
        const name = $nameInput.value.trim();
        const birthdate = $birthdateInput.value.trim();
        const email = $emailInput.value.trim();
        const boosters = $boostersInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !birthdate || !email || !boosters) {
            alert("Please fill in all fields.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!birthdateRegex.test(birthdate)) {
            alert("Please enter a valid birthdate (YYYY-MM-DD).");
            return false;
        }

        return true;
    }
}

// ## YOUR ADDED FUNCTIONS ##




