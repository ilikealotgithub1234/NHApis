// make a new deck
var newDeckId = function(){$.ajax({
         url: `http://deckofcardsapi.com/api/deck/new/`,
         method: "GET",
         success: (response) => {
           console.log(response);
           var id = response.deck_id
           return id;
         }
return id;
});
return id;
}
// shuffle the deck
var shuffle = function()
