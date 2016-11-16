def fib(n)
  counter = 2
  a = 1
  b = 1
  while (counter < n)
    a, b = b, a + b # Parallel assignment
    counter += 1
  end
  b
end

puts fib(50)
