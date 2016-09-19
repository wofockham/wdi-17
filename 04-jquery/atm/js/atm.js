$(document).ready(function () {
  var updateUI = function () {
    // Update balances
    $('#checking-balance').text('$' + accounts.checking.balance);
    $('#savings-balance').text('$' + accounts.savings.balance);

    // Add or remove the `zero` classes
    if (accounts.checking.balance === 0) {
      $('#checking-balance').addClass('zero');
    } else {
      $('#checking-balance').removeClass('zero');
    }

    if (accounts.savings.balance === 0) {
      $('#savings-balance').addClass('zero');
    } else {
      $('#savings-balance').removeClass('zero');
    }
  };

  // Checking deposit and withdrawal UI
  var getCheckingAmount = function () {
    var amount = $('#checking-amount').val();
    $('#checking-amount').val('');
    return amount;
  }

  $('#checking-deposit').on('click', function () {
    var amount = getCheckingAmount();
    accounts.checking.deposit( amount );
    updateUI();
  });

  $('#checking-withdraw').on('click', function () {
    var amount = getCheckingAmount();
    accounts.checking.withdraw( amount );
    updateUI();
  });

  // Savings deposit and withdrawal UI
  var getSavingsAmount = function () {
    var amount = $('#savings-amount').val();
    $('#savings-amount').val('');
    return amount;
  }

  $('#savings-deposit').on('click', function () {
    var amount = getSavingsAmount();
    accounts.savings.deposit( amount );
    updateUI();
  });

  $('#savings-withdraw').on('click', function () {
    var amount = getSavingsAmount();
    accounts.savings.withdraw( amount );
    updateUI();
  });

  updateUI();
});
