var make = document.querySelector('#make');
var model = document.querySelector('#model');
var options = model.querySelectorAll('option');

function giveSelection(selValue) {
  model.innerHTML = '';
  for(var i = 0; i < options.length; i++) {
    if(options[i].dataset.option === selValue) {
      model.appendChild(options[i]);
    }
  }
}
giveSelection(make.value);
