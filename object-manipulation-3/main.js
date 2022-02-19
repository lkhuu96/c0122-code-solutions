console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
create card container
create player container
make function to create deck
create cards for each suit (make function)
use for loop, loop 13 times (one for each card, ace through king)
take suit as argument and add to card container
make function that takes a list of players
each player is an object
  player name
  player hand (the cards that they are given)
  player total (the value of their hand)
make random card function that deals x cards and takes them out of deck
make it so it can deal x cards to every person
then need to take value of each hand, calculate both card values
  if card is an ace, value is set to 11
  if there is a string value, make that equal 10, every other card rank is
  their base value
add each total value to the player
take each total value from each player and find the max
find the player(s) whose hand matches the max value
add those players to 'winner' variable
if more than one player has the max value, start game over with just those players
  keep repeating until only one player is left
  need array to keep 'winners' and if array length is > 1, keep repeating
when starting game over, need to emptty hand for each player
recreate deck, shuffle, and deal
console.log final winner name
*/

var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var faceCards = ['Jack', 'Queen', 'King', 'Ace'];
var playerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
var numberOfCards = 2;
var cards = [];
var players = [];
var winner = [];

if ((numberOfCards * playerNames.length) > 52) {
  console.log('Not enough cards to play');
} else {
  _.map(playerNames, makePlayers);
  startGame(players, numberOfCards);
  while (winner.length > 1) {
    console.log('Tie! Dealing again');
    players = winner;
    startGame(players, numberOfCards);
  }
  console.log('Winner!', winner[0].name);
}

function startGame(playerList, cardAmount) {
  winner = [];
  _.map(suits, makeDeck);
  _.map(playerList, dealCards);
  _.map(playerList, calculateHandValue);
  var maxValue = _.max(_.map(players, 'total'));
  winner = _.filter(playerList, function (n) {
    return n.total === maxValue;
  });
}

function makePlayers(playerList) {
  players.push({ name: playerList });
}

function makeDeck(cardSuit) {
  cards = [];
  for (var card = 2; card <= 10; card++) {
    cards.push({ rank: card, suit: cardSuit });
  }
  for (var face = 0; face < faceCards.length; face++) {
    cards.push({ rank: faceCards[face], suit: cardSuit });
  }
  cards = _.shuffle(cards);
}

function dealCards(player) {
  player.hand = [];
  for (var i = 0; i < numberOfCards; i++) {
    player.hand.push(cards[i]);
  }
  cards = _.drop(cards, numberOfCards);
}

function calculateHandValue(player) {
  var total = 0;
  for (var i = 0; i < player.hand.length; i++) {
    if (player.hand[i].rank === 'Ace') {
      total += 11;
    } else if (typeof player.hand[i].rank === 'string') {
      total += 10;
    } else {
      total += player.hand[i].rank;
    }
  }
  player.total = total;
}
