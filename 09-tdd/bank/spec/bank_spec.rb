require_relative '../bank'
describe Bank do
  describe '.new' do
    it 'creates a new bank object' do
      @bank = Bank.new 'TDD Bank' # Do something
      expect(@bank).to_not eq nil # Assert that it worked
    end

    it 'has a name' do
      expect(@bank.name).to eq 'TDD Bank'
    end
  end
end
