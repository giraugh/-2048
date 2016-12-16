console.log("Api Linked.");

window.sUp = function() {
  return gameManager.move(0);
};

window.sRight = function() {
  return gameManager.move(1);
};

window.sDown = function() {
  return gameManager.move(2);
};

window.sLeft = function() {
  return gameManager.move(3);
};

window.sRandom = function() {
  return gameManager.move(Math.random() * 3 | 0);
};

window.Bot = function() {
  return sRandom();
};

window.BotStep = function() {
  var e, error;
  setTimeout(BotStep, BotDelay);
  try {
    window.Bot();
  } catch (error) {
    e = error;
  }
  return turn_count++;
};

window.BotDelay = 500;

window.SetBot = function() {
  var cont;
  cont = Editor.getValue();
  cont += "\nreturn bot||function(){}";
  return window.Bot = Function(cont)();
};

window.turn_count = 0;

BotStep();
