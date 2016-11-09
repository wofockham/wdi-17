class Fruit < ActiveRecord::Base
  validates :name, :presence => true
  def squishy?
    nil
  end
end
