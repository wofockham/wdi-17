def countdown(n)
  if n >= 0 # End condition: n is less than 0
    puts n
    countdown(n - 1) # Recursive call AND SOMETHING THAT MOVES US CLOSER TO THE END
  else
    puts "Blastoff!" # Base case
  end
end

countdown 10
