$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#votes').show();
  } else if (age === 18) {
  alert("Don't vote for an idiot");
  $('#votes').show();
} else {
  $('#under-18').show();
}
});
