# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"

# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "What is the current temperature: "
current_temperature = gets.to_f

print "Is the A/C functional (y/n): "
functional_ac = gets.downcase[0] == 'y' # Extract just the first character in lower case

print "What is the desired temperature: "
desired_temperature = gets.to_f

if functional_ac
  if current_temperature > desired_temperature
    puts "Turn on the A/C Please"
  end
else
  if current_temperature > desired_temperature
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end
