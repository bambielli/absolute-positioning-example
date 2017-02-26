var button = document.querySelector('button')
button.onclick = function () {
  var absBox = document.getElementById('abs')
  if (absBox.parentNode.id === 'notRel') {
    var relBox = document.getElementById('rel')
    relBox.appendChild(absBox)
  } else {
    var notRelBox = document.getElementById('notRel')
    notRelBox.appendChild(absBox)
  }
}
