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
});
