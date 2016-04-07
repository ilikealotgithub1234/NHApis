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
*/
var getName$ = function(url){
  var results = $.ajax({url: `${url}`});
  return results;
}

$("#getNames").click(function(){
    getName$(`https://randomuser.me/api/`).then(function(result) {
	    $("ol").append(`<li>${results}</li>`);
	});
});
