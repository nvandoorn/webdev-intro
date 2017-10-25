var header = document.getElementById('click-me')
var lowerContainer = document.getElementById('lower-container')
var isOpen = false
var className = 'chatbox_lower-container__open'

header.addEventListener('click', function () {
  // closed going to open
  if (!isOpen) {
    isOpen = true
    lowerContainer.classList.add(className)
  }
  // open going to close
  else {
    isOpen = false
    lowerContainer.classList.remove(className)
  }
})
