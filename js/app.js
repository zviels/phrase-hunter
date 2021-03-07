// Elements

const resetButton = document.querySelector('#reset-btn');
const keyboard = document.querySelector('#keyboard');

// Variables

const game = new Game();

// Functions

// addListeners

const addListeners = () => {

    // Add An Event Listener To The Reset Button

    resetButton.addEventListener('click', () => game.startGame());

    // Add An Event Listener To The Onscreen Keyboard

    keyboard.addEventListener('click', (e) => {
        
        if (e.target.tagName === 'BUTTON')
            game.handleInteraction(e.target);
        
    });

    // Add An Event Listener To The Document Itself, And Listen For Events Of Type 'Key Up'

    document.addEventListener('keyup', (e) => {

        const letterPressed = /^[A-Z]$/i.test(e.key);

        if (letterPressed && (!(game.isOver))) {

            const keyPressed = keyboard.querySelector('.' + e.key);
            game.handleInteraction(keyPressed);

        }

    });

}

// Run

const run = () => {

    addListeners();

}

// Run The Script

run();