class Game {

    // C'tor

    constructor() {

        this.missed = 0;
        this.phrases = data;
        this.activePhrase = null;
        this.isOver = false;

    }

    // Getters

    get overlay() {

        return document.querySelector('#overlay');

    }

    get tries() {

        return document.querySelectorAll('.tries');

    }

    // Methods

    // getRandomPhrase

    getRandomPhrase() {

        return this.phrases [ Math.floor(Math.random() * this.phrases.length) ];

    }

    // startGame

    startGame() {

        if (this.activePhrase)
            this.resetGame();

        this.overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    // checkForWin

    checkForWin() {

        const numOfSpaces = this.activePhrase.phrase.split(" ").length - 1;
        return document.querySelectorAll('.show').length === this.activePhrase.phrase.length - numOfSpaces;

    }

    // removeLife

    removeLife() {

        this.tries[this.missed ++].innerHTML = '<img src="images/lostHeart.png" alt="Lost Heart Icon">';

        if (this.missed === 5)
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

            this.overlay.classList.remove('lose', 'win');
            this.overlay.classList.add('start');

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
        const h1 = document.querySelector('h1');

        if (this.missed === 5) {

            h1.textContent = 'You Lost The Game!';
            this.overlay.classList.replace('start', 'lose');

        }

        else {

            h1.textContent = 'You Won The Game!';
            this.overlay.classList.replace('start', 'win');

        }

        this.overlay.style.display = '';

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