# Borges frontend assessment

## Overview

This is a simple score calculator app for a popular board game [Ticket to Ride](https://en.wikipedia.org/wiki/Ticket_to_Ride_(board_game)). The main point of the game is to build railroad routes of varying length to earn points, and the player with the most points wins. Unfortunately, maths is hard, and this app is designed to help players with counting their final score.

The app displays eight buttons that represent routes with lengths from 1 to 8, and a score counter that starts at 0. Pressing a button increments the score counter according to the length of the route. Refreshing the page resets the counter. The app is intended to be viewed on modern mobile phones.

## Scoring

Players get points depending on the length of the route:

* Length 1, 1 point
* Length 2, 2 points
* Length 3, 4 points
* Length 4, 7 points
* Length 5, 10 points
* Length 6, 15 points
* Length 7, 18 points
* Length 8, 21 points

For example, a player who has built routes of lengths 1, 1, 2, 5, 2 and 4 will have the final score of 1 + 1 + 2 + 10 + 2 + 7 = 23.

## Technical stuff

The app is a simple create-react-app with some minor adjustments.

* `$ yarn start` to start a development server
* `$ yarn test` to run tests and check code coverage
* `$ yarn build` to build the project

## Your task

1. New edition of the game has extra long routes. Add a ninth route option: length 9, 27 points.
1. User feedback: our users want the app to keep track of the routes they've already counted. Add an indicator that displays routes in the order as they are entered: if a user presses 1, then 1 again, then 4, the indicator should display "1, 1, 4".
1. User feedback: some of our users want to use the app on their desktop browsers and want to use the keyboard instead of the mouse for input. Add support for keypresses so that pressing a button "3" on a keyboard would be the same as clicking button "3" in the browser.
1. Write a short note with your thoughts on the technology choices made in this project. What could be improved? How would you do it if it was your own project?

Please submit your improvements **as a PR** to this repository. All tests must pass. Note: there are no design guidelines to follow. Please update the UI of the app as you see fit, using your own judgement.

Good luck!
