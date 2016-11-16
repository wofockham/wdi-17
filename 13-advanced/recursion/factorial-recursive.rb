def factorial(n)
  if n > 1
    n * factorial(n - 1) # Recursing and moving closer to the base case
  else
    1
  end
end

def factorial(n)
  n > 1 ? n * factorial(n - 1) : 1
end

puts factorial(7)
