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

// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!