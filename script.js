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
    }
    while(k>0 );
    return array;
  }

array = [1,6,3,5,2,8,5];
sort(array);
