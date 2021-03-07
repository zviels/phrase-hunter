// Elements

const resetButton = document.querySelector('#reset-btn');
const keyboard = document.querySelector('#keyboard');

// Variables

const game = new Game();

// Functions

// addListeners

const addListeners = () => {

    resetButton.addEventListener('click', () => game.startGame());

    keyboard.addEventListener('click', (e) => {
        
        if (e.target.tagName === 'BUTTON')
            game.handleInteraction(e.target);
        
    });

}

// Run

const run = () => {

    addListeners();

}

// Run The Script

run();