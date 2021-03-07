class Phrase {

    // C'tor

    constructor(phrase) {

        this.phrase = phrase.toLowerCase();

    }

    // Getters

    // phraseDiv
    // This Getter Returns The Div Element That Represents The Phrase

    get phraseDiv() {

        return document.querySelector('#phrase');

    }

    // phraseLetters
    // This Getter Returns The UL Element That Contains All The Letters Of The Phrase

    get phraseLetters() {

        return this.phraseDiv.firstElementChild;

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

        const ul = this.phraseLetters;

        const letters = this.phrase.split('');

        letters.forEach(letter => {

            const li = createLI(letter);
            ul.appendChild(li);
            
        });

    }

    // clearPhraseFromDisplay

    clearPhraseFromDisplay() {

        this.phraseLetters.innerHTML = '';

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