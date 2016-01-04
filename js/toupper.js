$(document).ready(function() {
  $("#answerForm form").submit(function(event) {
    var answerUp = $("input#answer").val().toUpperCase();
    alert(answerUp);
    event.preventDefault();
  });
});
