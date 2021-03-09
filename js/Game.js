class Game {

    // C'tor

    constructor() {

        this.missed = 0;
        this.phrases = data;
        this.activePhrase = null;

    }

    // Setters

    set isOver(isOver) {

        this._isOver = isOver;

    }

    set numOfHearts(numOfHearts) {

        this._numOfHearts = numOfHearts;

    }

    // Getters

    get overlay() {

        return document.querySelector('#overlay');

    }

    get tries() {

        return document.querySelectorAll('.tries');

    }

    get h1() {

        return document.querySelector('h1');

    }

    get resetButton() {

        return document.querySelector('#reset-btn');

    }

    get isOver() {

        return this._isOver;

    }

    get numOfHearts() {

        return this._numOfHearts;

    }

    // Methods

    // getRandomPhrase

    getRandomPhrase() {

        return this.phrases [ Math.floor(Math.random() * this.phrases.length) ];

    }

    // startGame

    startGame() {

        this.numOfHearts = 5;

        if (this.activePhrase)
            this.resetGame();

        this.overlay.classList.add('animate__animated', 'animate__slideOutUp');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        this.tries.forEach(li => li.firstElementChild.classList.add('animate__animated', 'animate__heartBeat', 'animate__slow', 'animate__delay-1s'));

    }

    // checkForWin

    checkForWin() {

        const numOfSpaces = this.activePhrase.phrase.split(" ").length - 1;
        return document.querySelectorAll('.show').length === this.activePhrase.phrase.length - numOfSpaces;

    }

    // removeLife

    removeLife() {
        
        this.tries[-- this.numOfHearts].innerHTML = '<img src="images/lostHeart.png" alt="Lost Heart Icon">';
        this.tries[this.numOfHearts].firstElementChild.classList.add('animate__animated', 'animate__bounceIn');

        if (++ this.missed === 5)
            this.gameOver();

    }

    // resetGame

    resetGame() {

        // resetKeyboard

        const resetKeyboard = () => {

            // resetKey

            const resetKey = (key) => {

                key.disabled = false;
                key.classList.remove('chosen', 'wrong');

            }

            // Reset All The Keys

            const keys = document.querySelectorAll('.key');
            keys.forEach(key => resetKey(key));
        
        }
        
        // resetHearts

        const resetHearts = () => this.tries.forEach(li => li.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon">');

        // resetOverlay

        const resetOverlay = () => {

            this.overlay.classList.remove('lose', 'win', 'animate__animated', 'animate__slideInDown');
            this.overlay.classList.add('start', 'animate__delay-1s');
            this.h1.textContent = 'Loading...';

        }

        // Reset The Gameboard    

        this.activePhrase.clearPhraseFromDisplay();
        resetKeyboard();
        resetHearts();
        resetOverlay();

        this.missed = 0;
        this.isOver = false;

    }

    // gameOver

    gameOver() {

        this.isOver = true;

        if (this.missed === 5) {

            this.h1.textContent = 'You Lost The Game!';
            this.overlay.classList.replace('start', 'lose');

        }

        else {

            this.h1.textContent = 'You Won The Game!';
            this.overlay.classList.replace('start', 'win');

        }

        this.overlay.classList.remove('animate__delay-1s');
        this.overlay.classList.replace('animate__slideOutUp', 'animate__slideInDown');
        this.resetButton.textContent = 'Play Again';

    }

    // handleInteraction

    handleInteraction(button) {
        
        button.disabled = true;
        const letter = button.textContent;

        if (this.activePhrase.checkLetter(letter)) {

            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin())
                this.gameOver();

        }
            
        else {

            button.classList.add('wrong');
            this.removeLife();

        }

    }

}