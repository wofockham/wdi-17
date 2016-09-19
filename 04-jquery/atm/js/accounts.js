// TODO:
// Refactor the code to use some kind of account factory to create our savings and checking accounts
// Create helper function(s) to simplify the overdraft

var accounts = {
  total: function () {
    return this.checking.balance + this.savings.balance;
  },

  checking: {
    balance: 0,

    deposit: function (amount) {
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      this.balance += amount;
    },

    withdraw: function (amount) {
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      // Is there enough money in the account?
      if (this.balance < amount) {
        // Try to withdraw via overdraft
        var total = accounts.total();
        if (total >= amount) { // Sufficient funds?
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.savings.balance -= overdraft; // withdraw overdraft from other account
        }
        return;
      }
      this.balance -= amount;
    }
  },

  savings: {
    balance: 0,

    deposit: function (amount) {
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      this.balance += amount;
    },

    withdraw: function (amount) {
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      // Is there enough money in the account?
      if (this.balance < amount) {
        // Try to withdraw via overdraft
        var total = accounts.total();
        if (total >= amount) { // Sufficient funds?
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.checking.balance -= overdraft; // withdraw overdraft from other account
        }
        return;
      }
      this.balance -= amount;
    }
  }
};
