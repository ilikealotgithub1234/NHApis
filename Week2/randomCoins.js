var $button = $('randomButton')
var coins = [
  {penny:1},
  {nickel:5},
  {dime:10},
  {quarter:25}
];
/*
var rndmFrmArryTObject = function(object){
  var array = [];
  var randomNum = random(0,object.length);
  if(randomNum = 0){
    console.log('invalid');
  }


  return array;
};

$('button').on('click',function(){


})
console.log('hello world');
*/

var chooseRandomCoins = function(array){
  var arrayOfRandom = [];
  var length = array.length;
  //if the array is ␀ (U+2400)
  console.log(length);
  console.log(array);
  if (length <= 0){
    console.log('invalid');

  }
  else{
    var x = 0
    for(x;x<5;x++){
    var rand = Math.random(0,length);
    console.log(rand);
    var randomCoin = array[rand];
    console.log(randomCoin);
    arrayOfRandom.push(randomCoin);
    }
    
    return arrayOfRandom;
  }
  return arrayOfRandom;
}
$button.on('click',chooseRandomCoins(coins));
