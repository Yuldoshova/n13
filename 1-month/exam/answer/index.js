let counter = document.querySelector('.value');
let minusElem = document.querySelector('.btn-minus');
let plusElem = document.querySelector('.btn-plus');
let resetElem = document.querySelector('.reset')

let count = 0;

updateCounter();

plusElem.addEventListener("click", () => {
    count++;
    updateCounter();
});

minusElem.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetElem.addEventListener("click", () => {
    count = 0;
    updateCounter();
})

function updateCounter() {
    counter.innerHTML = count;
};
