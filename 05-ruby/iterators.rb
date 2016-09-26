# i = 0
# while i < 5
#   puts i
#   i += 1 # Ruby doesn't have a `++` method
# end

5.times do |i|
  puts i
end

5.downto(0) do |i|
  puts i
end
