console.log "Api Linked."

window.sUp = ->
  gameManager.move 0

window.sRight = ->
  gameManager.move 1

window.sDown = ->
  gameManager.move 2

window.sLeft = ->
  gameManager.move 3

window.sRandom = ->
  gameManager.move Math.random() * 3 | 0

# Override this one
window.Bot = ->
  sRandom()

window.BotStep = ->
  #Call Again
  setTimeout BotStep, BotDelay

  #Call Bot function
  try
    window.Bot()
  catch e

  #Increase count
  turn_count++

window.BotDelay = 500

window.SetBot = ->
    #Set Bot from editor
    cont = Editor.getValue()
    cont += "\nreturn bot||function(){}"

    window.Bot = Function(cont)()

window.turn_count = 0

BotStep()
