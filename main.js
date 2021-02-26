var imageIndex = 1;
showImages(imageIndex);

function nextImage(n) {
  showImages((imageIndex += n));
}

function currentImage(n) {
  showImages((imageIndex = n));
}

function showImages(n) {
  var i;
  var images = document.getElementsByClassName("images");
  var spots = document.getElementsByClassName("spot");
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < spots.length; i++) {
    spots[i].className = spots[i].className.replace(" active", "");
  }
  images[imageIndex - 1].style.display = "block";
  spots[imageIndex - 1].className += " active";
}
