class Phrase {

    // C'tor

    constructor(phrase) {

        this.phrase = phrase;

    }

    // Methods

    // addPhraseToDisplay

    addPhraseToDisplay() {

        // createLI

        const createLI = (char) => {

            const li = document.createElement('li');

            if (char === ' ')
                li.className = 'space';

            else
                li.className = 'hide letter ' + char;
                
            li.textContent = char;
            return li;

        }

        // Add The Phrase To The Gameboard

        const phrase = document.querySelector('#phrase');
        const ul = phrase.firstElementChild;

        const letters = this.phrase.split('');

        letters.forEach(letter => {

            const li = createLI(letter);
            ul.appendChild(li);
            
        });

    }

    // checkLetter

    checkLetter(letter) {

        return this.phrase.includes(letter);

    }

    // showMatchedLetter

    showMatchedLetter(letter) {

        const matchingElements = document.querySelectorAll('.' + letter);
        matchingElements.forEach(element => element.classList.replace('hide', 'show'));

    }

}