def legal_age?(age)
  age >= 18
end

def test_valid_legal_age?
  result = legal_age?(27)
  if result == true
    puts "legal_age? passed"
  else
    puts "legal_age? failed"
  end
end

def test_invalid_legal_age?
  result = legal_age?(13)
  if result == true
    puts "legal_age? failed"
  else
    puts "legal_age? passed"
  end
end

def test_edge_case_legal_age?
  result = legal_age?(18)
  if result == true
    puts "legal_age? passed"
  else
    puts "legal_age? failed"
  end
end

test_valid_legal_age?
test_invalid_legal_age?
test_edge_case_legal_age?

# require 'pry'
# binding.pry
