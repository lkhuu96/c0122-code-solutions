console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
create card container
create player container
make function to create deck
create cards for each suit (make function)
use for loop, loop 13 times (one for each card, ace through king)
take suit as argument and add to card container
make random card function that deals 2 cards and takes them out of deck
make it so it can deal to every person
then need to take value of each hand, calculate both card values
  if there is a string value, make that equal 10, every other card rank is
  their base value
add each total value to the player
take each total value
*/

var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var cards = [];
var playerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
var players = [];
var numberOfPlayerCards = 3;
var handTotal = [];

if ((numberOfPlayerCards * playerNames.length) > 52) {
  console.log('Not enough cards to play');
} else {
  makePlayers(playerNames);
  startGame(players);
  if (players.length > 1) {
    handTotal = [];
    startGame(players);
  }
  console.log('Winner!', players[0].name);
}

function startGame(playerList) {
  loopThrough(suits, makeCard);
  cards = _.shuffle(cards);
  loopThrough(playerList, dealCards);
  loopThrough(playerList, calculateHandValue);
  var maxValue = _.max(handTotal);
  _.remove(playerList, function (n) {
    return n.total !== maxValue;
  });
}

function loopThrough(array, callback) {
  for (var index = 0; index < array.length; index++) {
    callback(array[index]);
  }
}

function makePlayers(playerList) {
  for (var i = 0; i < playerList.length; i++) {
    players.push({ name: playerList[i], hand: [] });
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

function dealCards(player) {
  for (var i = 0; i < numberOfPlayerCards; i++) {
    player.hand.push(cards[i]);
  }
  cards = _.drop(cards, numberOfPlayerCards);
}

function calculateHandValue(player) {
  var playerHand = player.hand;
  var total = 0;
  for (var i = 0; i < playerHand.length; i++) {
    if (typeof playerHand[i].rank === 'string') {
      total += 10;
    } else {
      total += playerHand[i].rank;
    }
  }
  handTotal.push(total);
  player.total = total;
}
