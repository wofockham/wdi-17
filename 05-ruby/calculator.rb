def get_user_choice
  # Show user the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.downcase.chomp # Implicit return
end

def addition
  puts "Pretending to do addition"
  # Prompt the user for the first number
  # Prompt the user for the second number
  # Show the user the result when these numbers are added
end

menu_choice = get_user_choice

until menu_choice == 'q'
  # Perform the user's desired action
  case menu_choice
  when '+'
    addition
  end

  # Get the next operation
  menu_choice = get_user_choice
end
