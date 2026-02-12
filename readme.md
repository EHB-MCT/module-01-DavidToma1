This module contains 2 exercises to introduce you DOM manipulation. 
Don't wait to commit until you've finished the entire module. 

## Exercise 01: Fortune Cookie

Create a first interactive page that displays a random fortune when a button is clicked.

### Instructions

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



## Exercise 02: Minipedia

Load content dynamicly from variables in JavaScript.
When clicking the buttons, the content should change to the corresponding language and the state of the buttons should update.

### Instructions

Open `main.js` and follow the steps in the comments:

1.  **Select Elements:**
    -   Use `document.querySelector` to select the text elements by their id's.
    -   Select the article container using a class.
    -   Select the buttons by their id's.

2.  **Set Initial Content:**
    -   Write logic to set the `innerText` of the text elements to the Dutch variables (`titleNL`, etc.) when the page loads.
    -   Disable the Dutch button (`btnNL.disabled = true;`) to show it is active.

3.  **Create Image:**
    -   Use the `createElement` to create an image.
    -   Set its `src` to `"./appel.jpg"` and add an `alt` text.
    -   Use the correct function to add it to the `.article` container (placing it above the subtitle).

4.  **Add Event Listeners:**
    -   Add `"click"` listeners to both buttons
    -   When clicked the content should update (for each button)
    -   When clicked the clicked button should be disabled (use the provided class).
