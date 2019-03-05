var inputNumber = function(number) {
  if (number % 3 === 0) {
    return "ping" + "<br>";
  } else if (number % 5 === 0) {
    return "pong" + "<br>";
  } else if (number % 15 === 0) {
    return "pingpong" + "<br>";
  } else {
    return "try again" + "<br>";
  }
};

$(document).ready(function() {
  $("form#input-number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = inputNumber(number);
    $("#result").prepend(result);
  });
});

+ "<br>"
