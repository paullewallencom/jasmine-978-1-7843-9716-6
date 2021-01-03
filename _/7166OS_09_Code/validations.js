document.addEventListener('DOMContentLoaded', function() {
  function getNumber(value) {
    var num = parseInt(value, 10);
    if (isNaN(num)) {
      throw new TypeError(value + ' must be a parsible integer.');
    }
    return num;
  }

  function selectInput() {
    this.select();
  }

  function validateInput() {
    var outputId = this.getAttribute('data-validation');
    var output = document.getElementById(outputId);
    try {
      getNumber(this.value);
      output.innerHTML = '';
    } catch(e) {
      output.innerHTML = e.message;
    }
  }

  var inputs = document.querySelectorAll('input[type=text]');
  Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('focus', selectInput);
    input.addEventListener('blur', validateInput);
  });
});