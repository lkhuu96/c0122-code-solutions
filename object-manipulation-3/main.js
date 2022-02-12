console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
create card container
create player container
make function to create deck

*/

var cards = [];
// {rank: number, suit: cardsuit}
var players = [];
// { name: player, hand: [{rank: number, suit: cardsuit}, {rank: number, suit: cardsuit}]}
makePlayers(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
makeCard('Clubs');
makeCard('Diamonds');
makeCard('Hearts');
makeCard('Spades');

shuffleAndDeal(players[2]);
console.log(players[2]);

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
  console.log('cardlength1', cards.length);
  console.log('card1', card1);
  console.log('randomCard1', randomCard1);

  var randomCard2 = Math.floor(Math.random() * cards.length);
  var card2 = cards[randomCard2];
  cards.splice(randomCard2, 1);
  console.log('cardlength2', cards.length);
  console.log('card2', card2);
  console.log('randomCard2', randomCard2);

  player.hand.push(card1);
  player.hand.push(card2);
}

/*
made random card function that deals 2 cards and takes them out of deck
make it so it can deal to every person
then need to take value of each hand, calculate, and then console log winner
 */
