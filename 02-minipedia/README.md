# Exercise 02: Minipedia

Load content dynamicly from variables in JavaScript.
When clicking the buttons, the content should change to the corresponding language and the state of the buttons should update.

## Instructions

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
