/*
RULES FOR BLACKJACK
•hit = more cards
•stand = stay with your current cards
•call = add more chips
•fold = put no more chips in




*/





// make a new deck
var newDeck = function(){$.ajax({
         url: `http://deckofcardsapi.com/api/deck/new/`,
         method: "GET",
         success: (response) => {
           console.log(response);

           return response;
         }

}return response;);
return response;
}
// shuffle the deck
var shuffle = (id) => {
  $.ajax({
           url: `http://deckofcardsapi.com/api/deck/{id}/shuffle/`,
           method: "GET",
           success: (response) => {
             console.log(response);

             return response;
           }
return reponse;
};
var drawCard(id){
  var id = alert('What is your deck id? (  newDeck()  )')
  url: `http://deckofcardsapi.com/api/deck/{id}/draw/?count=2`,
  method: "GET",
  success: (response) => {
    console.log(response);

    return response;
  }

}
