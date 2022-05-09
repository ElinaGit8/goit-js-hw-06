// const counterValue = document.getElementById('value');
// const butDecr = document.querySelector('[data-action="decrement"]');
// const butIncr = document.querySelector('[data-action="increment"]');

// butDecr.addEventListener('click', () =>{
//     --counterValue.textContent;
// })

// butIncr.addEventListener('click', () =>{
//     ++counterValue.textContent;
// })

const counterRef = document.querySelector('#counter');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

const spanRef = document.querySelector('#value');
let counterValue = 0;

const changeValue = function (step) {
    counterValue = counterValue + step;
    spanRef.textContent = counterValue;
};


btnDecrementRef.addEventListener('click', () => 
        changeValue(-1));
btnIncrementRef.addEventListener('click', () => 
        changeValue(+1));