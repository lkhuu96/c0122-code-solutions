console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
create card container
create player container
make function to create deck
create cards for each suit (make function)
use for loop, loop 13 times (one for each card, ace through king)
take suit as argument and add to card container

*/

var cards = [];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
// var cardValues = [];
// {rank: number, suit: cardsuit}
var players = [];
// { name: player, hand: [{rank: number, suit: cardsuit}, {rank: number, suit: cardsuit}]}
makePlayers(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
  makeCard(suits[suitIndex]);
}

shuffleAndDeal(players[2]);
findHandValue(players[2]);

function makePlayers(playerList) {
  for (var x = 0; x < playerList.length; x++) {
    players.push({ name: playerList[x], hand: [] });
  }
}

function makeCard(cardSuit) {
  for (var card = 1; card <= 13; card++) {
    if (card === 1) {
      cards.push({ rank: 'Ace', suit: cardSuit });
    } else if (card === 11) {
      cards.push({ rank: 'Jack', suit: cardSuit });
    } else if (card === 12) {
      cards.push({ rank: 'Queen', suit: cardSuit });
    } else if (card === 13) {
      cards.push({ rank: 'King', suit: cardSuit });
    } else {
      cards.push({ rank: card, suit: cardSuit });
    }
  }
}

function shuffleAndDeal(player) {
  var randomCard1 = Math.floor(Math.random() * cards.length);
  var card1 = cards[randomCard1];
  cards.splice(randomCard1, 1);
  var randomCard2 = Math.floor(Math.random() * cards.length);
  var card2 = cards[randomCard2];
  cards.splice(randomCard2, 1);
  player.hand.push(card1);
  player.hand.push(card2);
}

function findHandValue(player) {
  var playerHand = player.hand;
  var total = 0;
  for (var i = 0; i < playerHand.length; i++) {
    if (typeof playerHand[i].rank === 'string') {
      total += 10;
    } else {
      total += playerHand[i].rank;
    }
  }
  console.log('total', total);
}

/*
made random card function that deals 2 cards and takes them out of deck
make it so it can deal to every person
then need to take value of each hand, calculate, and then console log winner
to calculate number for each player, make an array that holds their value
match each players index with the card value
for loop to create each value at players index
 */
