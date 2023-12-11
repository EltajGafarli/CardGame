// ## GIVEN ##

function initSubscribePage() {
    const form = document.querySelector("form");

    const $nameInput = document.querySelector("#name");
    const $birthdateInput = document.querySelector("#birthdate");
    const $emailInput = document.querySelector("#email");
    const $boostersInput = document.querySelector("#boostersBtn");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate input values before storing in localStorage
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
        // Simple validation example
        const name = $nameInput.value.trim();
        const birthdate = $birthdateInput.value.trim();
        const email = $emailInput.value.trim();
        const boosters = $boostersInput.value.trim();

        // Regular expression for a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !birthdate || !email || !boosters) {
            alert("Please fill in all fields.");
            return false;
        }

        // Check if the email format is valid
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Check if the birthdate is in a valid format (you can customize the regex as needed)
        const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!birthdateRegex.test(birthdate)) {
            alert("Please enter a valid birthdate (YYYY-MM-DD).");
            return false;
        }

        return true;
    }
}

// ## YOUR ADDED FUNCTIONS ##




