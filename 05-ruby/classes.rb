require 'pry'

class MarxBrother
  attr_accessor :vice, :instrument # Define getters and setters for these properties

  def bio
    "I play the #{ @instrument } and I adore #{ @vice }."
  end
end

groucho = MarxBrother.new
harpo = MarxBrother.new



# groucho = {
#   :instrument => 'guitar',
#   :vice => 'cigars'
# }
#
# harpo = {
#   :instrument => 'harp',
#   :vice => 'mutism'
# }

binding.pry
