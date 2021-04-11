# Phrase Hunter

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). In this project I created a browser-based, word guessing game. I used JavaScript and Object-Oriented Programming to select a random, hidden phrase, which a player tries to guess by clicking letters on an onscreen keyboard.

Using JavaScript, I created two JS classes with specific properties and methods - a `Game` class for managing the game, and a `Phrase` class, which helps creating an array of Phrase objects.

The script chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

Players can guess a letter only once. After they have guessed a letter, that letter becomes disabled on the onscreen keyboard.

## Table of Contents

- [Preview](https://github.com/zviels/phrase-hunter#preview)
- [Quick Start](https://github.com/zviels/phrase-hunter#quick-start)
- [Overview](https://github.com/zviels/phrase-hunter#overview)
- [Built With](https://github.com/zviels/phrase-hunter#built-with)
- [Thanks](https://github.com/zviels/phrase-hunter#thanks)

## Preview

<a href="https://zviels.github.io/phrase-hunter">
  <img src="https://i.imgur.com/pPslBnF.gif" alt="App Preview" width="100%">
</a>

## Quick Start

To view the app -

- You can [download the ZIP file](https://github.com/zviels/phrase-hunter/archive/refs/heads/main.zip), extract it and open `index.html`.
- Alternatively, you can watch the app online [here](https://zviels.github.io/phrase-hunter).

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- Additional features I chose to implement for the app.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- Object-Oriented JavaScript <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- Callback Functions in JavaScript <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- JavaScript Array Iteration Methods <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

### Project Requirements

You can view the project requirements [here](https://i.imgur.com/WqFwmt1.jpg).

Please note - changes have been made to the app since receiving the project review.

The purpose of these changes was to enhance the app, resolve issues and support additional features.

### Additional Features

These are features I chose to implement for the project, even though I didn't have to. The additional features may extend the functionality of the app, improve the user experience or beautify the user interface.

As of this moment I have implemented three additional features for the app.

First, I have added several animations to the app -

- The overlay section goes up when the game starts, and then back down when the game ends.
- Animations also indicate how many hearts a player has at the beginning of the game, and each time the player loses a heart.

Secondly, I have enhanced the accessibility of the app. You can play the game without a mouse, using only the keyboard. Use `Tab`, `Shift + Tab` and `Space` or `Enter` to give it a try.

Last but not least, when I tested the project - I noticed that it is quite common to get the same phrase twice in a row. I fixed that. Now the phrases will start repeating themselves only after each phrase has already been displayed on the screen once.

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

This project received the **"Exceeds Expectations"** rating.

See the full project review [here](https://i.imgur.com/b4KQc1M.jpg).

:100:

## Built With

- HTML
- CSS
- JavaScript

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://static.teamtreehouse.com/assets/marketing/opengraph/logo_twitter-cd0ecb90408499f45a2191805f54362981da5a69ddcfaa6ec93556d64e289036.png" alt="Treehouse Logo" width="100%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter files for this project -

- `index.html`
- `styles.css`

In addition, a huge thank you to everyone who reviewed the project! :grinning: