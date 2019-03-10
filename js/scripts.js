var inputNumber = function(number) {
  var array = []
  for (var i = 1; i <= number; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("pingpong");
    } else if (i % 3 === 0) {
      array.push("ping");
    } else if (i % 3 === 0) {
      array.push("pong");
    } else {
      array.push(i);
    }
  }
  return array;
};

$(document).ready(function() {
  $("form#input-number").submit(function(event) {

    var number = parseInt($("input#number").val());
    var pingPongResult = inputNumber(number);
    pingPongResult.forEach(function(i) {
      $("#input-number").append("<li>" + i + "</li>");
    });
    $(".result").show()

    event.preventDefault();
  });
});
