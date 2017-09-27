var inputBox = document.getElementById('input-box')
var btn = document.getElementById('submit-input-box')
var showValue = document.getElementById('show-value')

btn.addEventListener('click', function () {
  // type string
  var text = inputBox.value
  // list of strings
  var tokens = text.split(',')
  // joined back into one string
  showValue.innerText = tokens.join('    ')
})
