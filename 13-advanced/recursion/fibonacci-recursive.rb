def fib(n)
  if n <= 2
    1
  else
    fib(n - 1) + fib(n - 2)
  end
end

def fib_fast(n, a=1, b=1)
  if n <= 2 # Base case
    b
  else
    fib_fast(n-1, b, a + b) # We pass in our running totals
  end
end

# puts fib(7)
require 'pry'; binding.pry
