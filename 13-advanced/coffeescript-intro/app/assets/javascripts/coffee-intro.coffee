console.log 0.1 + 0.2

console.log 'Hello world'

items = ['VB', 'Tooths', 'PBR']

console.log items

console.log 'we have beer' if items.length > 0 and items[0] is 'VB'

# while items.length > 0 then items.pop()

for beer in items
  console.log beer
 bad identation

for x in [10..0]
  console.log x

nums = [1..5000]

drinkBeer = ->
  console.log 'Glug glug glug'
  "Thank you for using this program" # Implicit return as in Ruby

fridge =
  beer: items
  dips: ['olive', 'caramel']
  open: ->
    console.log('Turn on the fridge light')
  serveDip: ->
    @dips.pop()

add = (a,b)->
  a + b

console.log add(6, 7)

$(document).ready ->
  console.log 'The document is ready'
  $('body').on 'click', ->
    console.log 'thank you for clicking'

name = 'jonesy'
message = "The sum of 2 and 3 is #{2 + 3} and my name is #{ name }"

cubes = (math.cube num for num in nums)
