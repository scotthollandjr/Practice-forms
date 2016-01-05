$(document).ready(function() {
  $("#verify form").submit(function(event) {
    var nameInput = $("input#name").val();
    var numberInput = $("input#number").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();

    $("span#nameRec").append(nameInput);
    $("span#numberRec").append(numberInput);
    $("span#streetRec").append(streetInput);
    $("span#cityRec").append(cityInput);

    $("#verify").hide();
    $("#receipt").show();
    event.preventDefault();
  });
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night");
  });
  $("button#gameboy").click(function() {
    $("body").removeClass();
    $("body").addClass("gameboy");
  });
  $("button#appa").click(function() {
    $("body").removeClass();
    $("body").addClass("appa");
  });
  $("button#original").click(function() {
    $("body").removeClass();
  });
});
