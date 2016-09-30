require 'pry'

class Person
  attr_accessor :eye_color, :date_of_birth

  def mood
    "I am happy"
  end
end

class MarxBrother < Person # Inheritance
  attr_accessor :vice, :instrument # Define getters and setters for these properties

  def initialize(instrument='singing', vice='burning down churches')
    @instrument = instrument
    @vice = vice
  end

  def bio
    "I play the #{ @instrument } and I adore #{ @vice }."
  end
end

groucho = MarxBrother.new

harpo = MarxBrother.new
harpo.vice = 'mutism'
harpo.instrument = 'harp'

binding.pry
