//previous version

/*
var sorted = function(array){
  for(var i = 0;i < array.length;i++){
    if(array[i]>array[i+1]){
      return false;
    };
    if(array[i]<array[i=1]){
      return true;
    }
  };
};
var sort = function(array){
  if(sorted(array)){
    for (var i = 0; i < array.length;i++){
//declaring placeholders
      arrayi = array[i];
      arrayadd1 = array[i+1]
// doing the transitions
      array[i] = arrayadd1;
      array[i+1] = arrayi;
    };
  };

}
$('#Submit').on('click', function(event){
  event.preventDefault();
  var $name = $('#name').val();
  var $score = $('#score').val();
  nameScore = {
    name : $name,
    score : $score
  };
  //$('table').append($name + ':' + $score );

  var allScores = [];
  allScores.push(nameScore);
  console.log(allScores);

});
sort([2,5,3,7,3,8]);


*/

//create array with scores
var scores = [];

var names = [];
var x=1;
var i=0;
// runs when clicked
$("button").click(function(){

  var name = $("#name").val();
	var score = Number($("#score").val());
// if score is too low :(
	if (score<50){
		alert(">50 is required to add to leaderboard");
	}
// if the score is high enough
  else {
		var a=1;
    //adds to the array
		scores.push(score);
		names.push(name);
    // length of the array
		var len = scores.length;
		x = len-1;
    //  runs when x > 0; len > 1
		while (x>0){
			i=0;
			while (i<x){
        // placeholders for the array
				first = scores[i];
				second = scores[i+1];
        //if it is unsorted
				if (first < second){
					var z = scores[i];
					var y = names[i];
					scores[i] = scores[i+1];
					names[i] = names[i+1];
					names[i+1] = y;
					scores[i+1] = z;
				}//reiteration
				i=i+1
			}
			x=x-1
		}
    //append to the table
		$("table").html("<tr><td><b>"+names[0]+": "+scores[0]+"</b></td></tr>");
		while (a<len){
			$("table").append("<tr><td>"+names[a]+": "+scores[a]+"</td></tr>");
			a = a+1;
		}
	}
})
