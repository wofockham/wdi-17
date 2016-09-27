# ###1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday
#

days_of_the_week = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

# ###2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.

# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving_day

# days_of_the_week.unshift days_of_the_week.pop
days_of_the_week.rotate! -1

# ###3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days

new_days = [ days_of_the_week[1..5], [ days_of_the_week.last, days_of_the_week.first ] ]

# ###4. Remove either the weekdays or the weekends
# Your choice...

new_days.delete_at 1


#
# ###5. Sort the remaining days alphabetically
new_days.flatten!.sort!
