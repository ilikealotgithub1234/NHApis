/*
var getName$ = function(){$.ajax({
    url: 'https://randomuser.me/api/',
    resultsType: 'json',
    success: function(results){
      console.log(results);
      var x = results;
    }
  })
    return results;
  return results;
}
$("#getNames").click(function(){
    getName$();
    $("ol").append(`<li>${results}</li>`);
});
(

var getName$ = function(url){
  var results = $.ajax({url: `${url}`});
  return results;
}

$("#getNames").click(function(){
    getName$(`https://randomuser.me/api/`).then(function(result) {
	    $("ol").append(`<li>${results}</li>`);
	});
});
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var findnames = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(results){
      var foo = results.user;
      console.log(results);
      var title = capitalizeFirstLetter(results.results[0].name.title)+'.';
      var fn = capitalizeFirstLetter(results.results[0].name.first);
      var ln = capitalizeFirstLetter(results.results[0].name.last);
      console.log(title,fn,ln)
      var fullname = title + fn + ln;
      return results.results;

  }
});
var names = findnames
var myFunction = () =>{
  var fullname = findnames.fullname;
  console.log(findnames);

}
