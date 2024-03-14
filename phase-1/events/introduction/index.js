/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated March 13, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
// the target (what element the event will fire on, eg. #today), the event (the user action, "click"), and the handler (log)
document.querySelector("#today").addEventListener("click", event => {
    console.log("The user clicked on 'Today!")
});
//second parameter is what you want to happen, or callback function

// ~ the "submit" event
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    console.log("The form was submitted");
    console.log(document.querySelector("form").date)
    const submittedDate = document.querySelector("form").date.value
    console.log(submittedDate);
})
//submit happens on the form, not the input

// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!


document.querySelector("#tomorrow").addEventListener("mouseover", event => {
    console.log("I am a mouseover message!");
})