# while true
#   puts "That is true"
# end

i = 0
while i < 5
  puts i
  i += 1 # Ruby doesn't have a `++` method
end

i = 0
until i == 5
  puts i
  i += 1
end

# # For loops YOU WILL NEVER USE THESE
# for i in 0..5
#   puts "#{ i }!!!"
# end
