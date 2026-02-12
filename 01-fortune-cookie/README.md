# Exercise 01: Fortune Cookie

Create a first interactive page that displays a random fortune when a button is clicked.

## Instructions

Open `main.js` and follow the steps in the comments:

1.  **Select Elements:**
    -   Use `document.querySelector` to select the display element (`#fortune-display`).
    -   Use `document.querySelector` to select the button (`#cookie-btn`).

2.  **Add Event Listener:**
    -   Add a `"click"` event listener to the button.
    -   Inside the function:
        -   Calculate a random index based on the length of the `fortunes` array. (Hint: `Math.random()` and `Math.floor()`).
        -   Retrieve the fortune string from the array using this index.
        -   Update the `innerText` of the display element with the new fortune.
