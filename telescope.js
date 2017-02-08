console.log('Ahoy.');
onkeydown = function (e) {
  if (e.key == 'n') {
    var file = document.getElementById('file-upload');
    var frame = document.getElementById('image-frame');
    console.log(file);
    console.log(file.getOwnPropertyNames());
    frame.src = file.value;
  }
};
