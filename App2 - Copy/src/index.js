let c = document.createElement("canvas");
ctx = c.getContext('2d');
let img1 = new Image();

//onload event listener to process the image data after it was loaded
img1.onload = function () {
  c.width = img1.width;
  c.height = img1.height;
  ctx.drawImage(img1, 0, 0);

  /* ready for canvas processing*/
};

//start loading image
img1.src = document.getElementById("image1").src;

console.log("hello");