puts "What is your first name?"
first_name = gets.chomp # gets is short for `get string` which reads user input

puts "Your name is allegedly #{ first_name }."

puts "What is your surname?"
surname = gets.chomp

puts "Your surname is allegedly #{ surname }."

puts "Your full name is #{ first_name } #{ surname }."
