require 'rails_helper'

RSpec.describe Fruit, type: :model do
  describe 'An apple' do
    before do
      @apple = Apple.new :name => 'Granny Smith'
    end

    it 'should not be squishy' do
      expect(@apple.squishy?).to eq false
      expect(@apple.squishy?).to be false
    end
  end

  describe 'A pear' do
    before do
      @pear = Pear.new :name => 'Comice'
    end

    it 'should be squishy' do
      expect(@pear.squishy?).to eq true
      expect(@pear.squishy?).to be true
    end
  end
end
