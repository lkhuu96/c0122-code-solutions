/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var acc = this.accounts;
  for (var i = 0; i < acc.length; i++) {
    if (acc[i].number === number) {
      return acc[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var acc = this.accounts;
  var total = 0;
  if (acc.length < 1) {
    return 0;
  }
  for (var i = 0; i < acc.length; i++) {
    total += acc[i].getBalance();
  }
  return total;
};
