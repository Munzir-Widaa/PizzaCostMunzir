game.splash("Lets calculate how big you want your pizza to be and its cost!")
let HST = 0.13
let diameter = game.askForNumber("what do you want your pizza to be in inches? ")
let RENT = 1
let LABOUR = 0.75
let MATERIAL = 0.5
let subtotal = RENT + LABOUR + MATERIAL * diameter
let tax = subtotal * HST
let total = subtotal + tax
game.splash("Your total is: $" + total)
