# Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you live: "
suburb = gets.chomp.downcase

# if suburb == 'balmain'
#   puts "Aren't we grand"
# elsif suburb == 'bondi'
#   puts "Don't even speak to me"
# elsif suburb == 'zetland'
#   puts "Cool apartments"
# else
#   puts "What a charming suburb"
# end

case suburb
when 'balmain'
  puts "Aren't we grand"
when 'bondi'
  puts "Don't even speak to me"
when 'zetland'
  puts "Cool apartments"
else
  puts "What a charming suburb"
end
