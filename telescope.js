window.onkeydown = function (e) {
  if (e.keyCode === 16) { // Shift
    document.shiftDown = true;
  }
};

window.onkeyup = function (e) {
  if (e.keyCode === 16) { // Shift
    document.shiftDown = false;
  }
};

var root = 'file:///Users/goodman/Documents/Pictures';
var images = [];

window.onload = function () {
  var file; var frame; var container; var newImg;
  var i;
    file = document.getElementById('file-upload');
    frame = document.getElementById('image-frame');
    container = document.getElementById('container');

    for (i=1 ; i<70 ; i++) {
      newImg = document.createElement('img');
      var stringNum = i.toString();
      if (stringNum.length < 2) { stringNum = "0" + stringNum; }
      newImg.src = root + stringNum + '.jpeg';
      newImg.className = 'thumbnail';
      images.push(newImg);
      newImg.onclick = function () {
        this.className == 'full' ? this.className = 'thumbnail' : this.className = 'full';
        if (document.shiftDown) {
          this.className = 'hidden';
        }
      };
      if (!newImg.complete) {
        newImg.src = root + stringNum + '.png';
      }
      if (!newImg.complete) {
        newImg.src = root + stringNum + '.jpg';
      }
      if (newImg.complete) {
        container.append(newImg);
      }
    }
  shiftImages();
};

var shiftImages = function () {
  j = 0;
  setInterval(function () {
    if (!Math.floor(Math.random() * 12)) {
      if (Math.floor(Math.random() * 2)) {
        images[j].className += ' small';
      } else {
        images[j].className += ' large';
      }
      if (!Math.floor(Math.random() * 3)) {
        images[j].className += 'thumbnail';
      }
      if (!Math.floor(Math.random() * 5)) {
        images[j].className += 'hidden';
      }
    }
    j += 1;
    if (j > 70) {
      j = 0;
    }
  }, 100);
};
