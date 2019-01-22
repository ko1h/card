var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
var deck = [];
suits.forEach(function(suit){
  numbers.forEach(function(card){
    deck.push(card + " of " + suit);
  });
});
$(document).ready(function() {
  deck.forEach(function(card){
    $("ul").append("<li>" + card + "</li>");
  });
});
