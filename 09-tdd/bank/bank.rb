class Bank
  attr_reader :name, :accounts
  def initialize(name)
    @name = name
    @accounts = Hash.new 0 # Default value so our mathematics doesn't break
  end

  def create_account(name, deposit)
    @accounts[name] = deposit
  end

  def deposit(name, deposit)
    @accounts[name] += deposit
  end

  def withdraw(name, amount)
    @accounts[name] -= amount if balance(name) >= amount
  end

  def balance(name)
    @accounts[name]
  end
end
