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
/*

*/
