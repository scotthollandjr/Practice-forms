$(document).ready(function() {
  $("#booking form").submit(function(event) {
    var name1 = $("input#name").val();
    var date1 = $("input#date").val();
    var time1 = $("input#time").val();
    var duration1 = $("input#duration").val();

    $("span#nameCon").append(name1);
    $("span#dateCon").append(date1);
    $("span#timeCon").append(time1);
    $("span#durationCon").append(duration1);

    $("#booking").hide();
    $("#confirmation").show();
    event.preventDefault();
  });
});
