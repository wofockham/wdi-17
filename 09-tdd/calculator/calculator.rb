class Calculator
  def initialize
    @input = []
  end

  def <<(n)
    @input.push(n.to_f)
  end

  def add
    @input.map(&:to_f).inject(&:+)
  end
end
