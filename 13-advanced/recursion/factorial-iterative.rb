def factorial(n)
  result = 1

  while n > 1 # Base case
    result = result * n
    n -= 1
  end

  result
end

puts factorial(1000)
