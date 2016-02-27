**For your homework assignment, I want you to finish the high score problem we started in class. A user should be able to input high scores through a form and they should appear in sorted order.**


### Objects
Think of `objects` as a variable that can hold multiple variables. Objects in javascript are also known as `dictionaries` and `hashes` in other languages.

Reference: http://www.w3schools.com/js/js_objects.asp

```javascript
var name = "Ricky";
var score = 28;
var highscore = { "name": name, "score", score }; 
console.log("Name: " + highscore.name);
```


### Tasks
Once you can input highscores that are sorted, you have a few more tasks.

* It should only allow a limit of 10 scores.
* The top three scores should be distinct from the rest of the scores and each other. So the three of them can be different colors, they can be bold, italic, underlined, etc. You get to design this.
* Create another button that adds random highscores and names to the table
* Add another field to the object called `time`. This time should be the length of time the user has been on the webpage from when they hit `submit`. So if the user has been on the website for 10 seconds when they hit submit, the score should be `{ name: "Ricky", score: 23, time: 10 }`.

### Sorting Psudeo Code
Loop through a single array and compare the numbers to see if they are grader than or less than each other. If the first number is greater than the second number, swap the numbers. Keep doing this until you've looped through the array N by N times. N being the total length of the array. This is a basic sorting algorithm.


### Grading Policy

* Feature Completion
* Indentation!!!
* Code Quality
* Submit the homework to your personal GitHub