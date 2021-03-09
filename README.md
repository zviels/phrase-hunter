# Phrase Hunter

"Phrase Hunter" is the name of a browser-based word guessing game. I used JavaScript and Object-Oriented Programming to select a random, hidden phrase, which a player tries to guess by clicking letters on an onscreen keyboard.

## Style Changes

### The Overlay Section

- Removed the border radius of the overlay section.
- Changed the background color of the section from dark grey to orange.
- Changed the color of the 'Start Game' button from light grey to red.
- Modified the padding of the 'Start Game' button.
- Added custom styles when the user focuses on the 'Start Game' button or hovers over it with the mouse. In those cases a shadow is being applied to the button, and its background color is being changed.
- Made the font size of the 'Start Game' button a little bit bigger.
- Increased the font size of the headline a bit.
- Added animations. The overlay section goes up when the game starts, and then back down when the game ends.

## The Main Game Screen

- Replaced the blue hearts with red hearts.
- Changed the background color of buttons with the class '.wrong' from orange to red.
- Changed the background color of buttons with the class '.chosen' from black to green.
- Changed the value of the 'margin-right' property from 2px to 3.5px for HTML elements with the class '.letter'.
- Changed the width of HTML elements with the class '.space' from 15px to 17.5px.
- Animations indicate how many hearts a player has at the beginning of the game, and each time the player loses a heart.
- Changed the color of the headline to white.
- Modified a bit the background color of the hidden and visible letters.
- Changed the background color of the keys to dark grey.
- Changed the text color of the keys to white.
- Added custom styles when the user focuses on a specific key or hovers over it with the mouse. In those cases a grey shadow is being applied to the key, and its background color is being slightly changed.

## The "Game Over" Screen

- Modified the background colors of the overlay section when the player wins and loses.
- Increased the space between the 'Game Over' message and the 'Play Again' button.