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


Loop 1

| | | | | | | | | | | 
|------------------------|
|**9**|4|7|3|8|1|6|10|5|2|
|4|**9**|7|3|8|1|6|10|5|2|
|4|7|**9**|3|8|1|6|10|5|2|
|4|7|3|**9**|8|1|6|10|5|2|
|4|7|3|8|**9**|1|6|10|5|2|
|4|7|3|8|1|**9**|6|10|5|2|
|4|7|3|8|1|6|**9**|10|5|2|
|4|7|3|8|1|6|9|**10**|5|2|
|4|7|3|8|1|6|9|5|**10**|2|
|4|7|3|8|1|6|9|5|2|**10**|

```
**9** 4 7 3 8 1 6 10 5 2
4 **9** 7 3 8 1 6 10 5 2
4 7 **9** 3 8 1 6 10 5 2
4 7 3 **9** 8 1 6 10 5 2
4 7 3 8 **9** 1 6 10 5 2
4 7 3 8 1 **9** 6 10 5 2
4 7 3 8 1 6 **9** 10 5 2
4 7 3 8 1 6 9 **10** 5 2 # 9 is not great than 10, so we don't swap
4 7 3 8 1 6 9 5 **10** 2 # 10 is greater than 5 so we swap places
4 7 3 8 1 6 9 5 2 **10** # 10 is greater than 2, so we swap places, now the last index of the array is the largest number in the array
```

----
Loop 2

|||||||||| | 
|------------------------|
|**4**|7|3|8|1|6|9|5|2|10|
|4|**7**|3|8|1|6|9|5|2|10|
|4|3|**7**|8|1|6|9|5|2|10|
|4|3|7|**8**|1|6|9|5|2|10|
|4|3|7|1|**8**|6|9|5|2|10|
|4|3|7|1|6|**8**|9|5|2|10|
|4|3|7|1|6|8|**9**|5|2|10|
|4|3|7|1|6|8|5|**9**|2|10|
|4|3|7|1|6|8|5|2|**9**|10|

```
**4** 7 3 8 1 6 9 5 2 10
4 **7** 3 8 1 6 9 5 2 10
4 3 **7** 8 1 6 9 5 2 10
4 3 7 **8** 1 6 9 5 2 10
4 3 7 1 **8** 6 9 5 2 10
4 3 7 1 6 **8** 9 5 2 10
4 3 7 1 6 8 **9** 5 2 10
4 3 7 1 6 8 5 **9** 2 10
4 3 7 1 6 8 5 2 **9** 10 # We don't have to check the 9 against the 10 since we knew from the last sort it's already the largest number
```

Loop 8 more times and the array will be sorted.


### Grading Policy

* Feature Completion
* Indentation!!!
* Code Quality
* Submit the homework to your personal GitHub