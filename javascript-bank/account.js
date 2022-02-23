/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposit = 0;
  var withdraw = 0;
  var trans = this.transactions;
  if (trans.length === 0) {
    return 0;
  }
  for (var i = 0; i < trans.length; i++) {
    if (trans[i].type === 'withdrawal') {
      withdraw += trans[i].amount;
    } else {
      deposit += trans[i].amount;
    }
  }
  var dif = deposit - withdraw;
  return dif;
};
