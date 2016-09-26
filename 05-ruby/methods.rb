# def hello
#   puts "Hello world"
# end

def hello(name="World") # Default parameter
  puts "Hello #{ name }"
end

hello "Chucky"

def add(a, b)
  a + b # Implicit return
end
