# Title: Guess The Number
# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.

# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

print "I'm thinking of a number between 0 and ... "
MAX_VALUE = gets.to_i

SECRET_NUMBER = Random.rand 0..MAX_VALUE
# puts SECRET_NUMBER

print "Enter a number between 0 and #{ MAX_VALUE }: "
guess = gets.to_i

until guess == SECRET_NUMBER

  if guess > SECRET_NUMBER
    puts "Wrong, guess lower!"
  else
    puts "Wrong, guess higher!"
  end

  print "Enter a number between 0 and #{ MAX_VALUE }: "
  guess = gets.to_i
end

puts "Congratulations!"
