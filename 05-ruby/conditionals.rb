if 13 > 10
  puts "13 is a greater number than 10"
end

puts "13 is a greater number than 10" if 13 > 10

score = 55
if score >= 90
  grade = 'A'
elsif score >= 80
  grade = 'B'
elsif score >= 70
  grade = 'C'
else
  grade = 'F'
end

puts grade

age = 12
unless age < 18
  puts "You are old enough"
end

puts "You are old enough" unless age < 18
