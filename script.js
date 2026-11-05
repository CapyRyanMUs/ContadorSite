let count = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    counterValue.value = count;
    counterValue.textContent = count;
    counterValue.classList.remove('positive', 'negative');
    
    if (count > 0) {
        counterValue.classList.add('positive');
    } else if (count < 0) {
        counterValue.classList.add('negative');
    }
    
    resetBtn.disabled = count === 0;
}

function bumpAnimation() {
    counterValue.classList.remove('bump');
    void counterValue.offsetWidth;
    counterValue.classList.add('bump');
}

function increment() {
    count++;
    updateDisplay();
    bumpAnimation();
}

function decrement() {
    count--;
    updateDisplay();
    bumpAnimation();
}

function reset() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

updateDisplay();
