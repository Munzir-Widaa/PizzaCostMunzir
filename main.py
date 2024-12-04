game.splash("Lets calculate how big you want your pizza to be and its cost!")
HST = 0.13
diameter = game.ask_for_number("what do you want your pizza to be in inches? ")
RENT = 1
LABOUR = 0.75
MATERIAL = 0.5
subtotal = RENT + LABOUR + (MATERIAL * diameter)
tax = subtotal * HST
total = subtotal + tax
game.splash("Your total is: $" + total)