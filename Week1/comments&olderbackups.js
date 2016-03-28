$('#Submit').on('click', function(event){
  event.preventDefault();
  var $name = $('#name').val();
  var $score = $('#score').val();

  //$('table').append($name + ':' + $score );

  var allScores;
  allScores.push($score);

  /*var sortX = function(array) {
    for(var i = 0;i < array.length; i++)
    var array0 = array[0];
    var array1 = array[1];

    if(array[i-1]>array[i]){
      array[0] = array1;
      array1 = array0;
      return array0;
      return array1;
    }
  }
  var test = function() {
    var myTestArray = [2,1];
    var sortedTestArray = sortX(myTestArray);
    console.log(myTestArray);
    console.log(sortedTestArray);
  }
  */
  /*
  var sort = function(array){
    var swap;
    var swapCount = 0;

    do{
        for (var i = 1, swapCount = 0; i < array.length; i++){
            if(array[i - 1]>array[i]){
                swap = array[i - 1];
                array[i - 1] = array[i];
                array[i] = swap;
                swapCount +=1;
            }
        }
    }while(k>0 );
    return array;
  }
});
array = [1,6,3,5,2,8,5];
sort(array);
wd2fd2f32f2323f
/*


/*$('#Submit').on('click', function(event){
  event.preventDefault();
  var $name = $('#name').val();
  var $score = $('#score').val();

  //$('table').append($name + ':' + $score );

  var allScores;
  allScores.push($score);

  /*var sortX = function(array) {
    for(var i = 0;i < array.length; i++)
    var array0 = array[0];
    var array1 = array[1];

    if(array[i-1]>array[i]){
      array[0] = array1;
      array1 = array0;
      return array0;
      return array1;
    }
  }
  var test = function() {
    var myTestArray = [2,1];
    var sortedTestArray = sortX(myTestArray);
    console.log(myTestArray);
    console.log(sortedTestArray);
  }
  *//*
})

    var k;
    var sort = function(array){
      var swap;
      var swapCount = 0;

      do{
          for (var i = 1, swapCount = 0; i < array.length; i++){
              if(array[i - 1]>array[i]){
                  swap = array[i - 1];
                  array[i - 1] = array[i];
                  array[i] = swap;
                  swapCount +=1;
              }
          }
        while(k>0 ){
            return array;
        }
      }
      //var array = [1,6,3,5,2,8,5];
      sort([1,6,3,5,2,8,5]);
    /*
    var scores = [];
    var names = [];
    var x=1;
    var i=0;
    $("button").click(function(){
      var name = $("#name").val();
      var $score = Number($("#score").val());
      if ($score<67){
        alert("You need a score of 67 or higher to get onto the leaderboard! You're terrible at this game");
      } else {
        var n=1;
        scores.push($score);
        names.push(name);
        var len = scores.length;
        x = len-1;
        while (x>0){
          i=0;
          while (i<x){
            first= scores[i];
            second= scores[i++];
            if (first<second){
              var z = scores[i];
              var y = names[i];
              scores[i] = scores[i++];
              names[i] = names[i++];
              names[i++] = y;
              scores[i++] = z;
            }
            i++;
          }
          x++;
        }
        $("table").html("<tr id = ''><td>"+names[0]+": "+scores[0]+"</td></tr>");
        for (n;n<len;n = n ++){
          $("table").append("<tr><td>"+names[a]+": "+scores[a]+"</td></tr>");

        }
      }
    })

*/
