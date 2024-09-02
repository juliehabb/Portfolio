//select all filter buttons and cards
const filterButtons = document.querySelectorAll(".filter-buttons div");
const filterableCards = document.querySelectorAll(".card-container .vertical-card");

const card = document.querySelector(".vertical-card");

//define filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name ){
            card.classList.remove("hide");

        }
    });
};


//add click event listener to each filter button
filterButtons.forEach(div => div.addEventListener("click", filterCards));

window.addEventListener("DOMContentLoaded", () => {
    const defaultButton = document.querySelector('.filter-buttons div[data-name="development"]');
    defaultButton.classList.add("active");
    filterCards( {target: defaultButton});

})