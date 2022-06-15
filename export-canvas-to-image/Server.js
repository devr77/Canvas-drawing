<canvas id="output" />;

let canvas = document.getElementById("output");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// Manual Click to Download
<a download="example.jpg" href="" onclick="downloadCanvas(this);">
  Download example.jpg
</a>;

async function downloadCanvas(el) {
  const imageURI = canvas.toDataURL("image/jpg");
  el.href = imageURI;
}

//   Programmatically Click to Download
<a id="link"></a>;

async function autoDownloadCanvas() {
  let link = document.getElementById("link");
  link.setAttribute("download", "example.png");
  link.setAttribute("href", canvas.toDataURL("image/png"));
  link.click();
}

//   FormData to Remote Server

// Blob object

let imageBlob = await new Promise((resolve) =>
  canvas.toBlob(resolve, "image/png")
);

// FormData
let formData = new FormData();
formData.append("image", imageBlob, "image.png");

// Fetch
let response = await fetch("http://localhost:8000/image", {
  method: "POST",
  body: formData,
});
let result = await response.json();

/////////////////////////////////
async function submitToServer() {
  let imageBlob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png")
  );

  let formData = new FormData();
  formData.append("image", imageBlob, "image.png");

  // modify the url accordingly
  let response = await fetch("http://localhost:8000/image", {
    method: "POST",
    body: formData,
  });

  // convert the response to json, modify it accordingly based on the returned response from your remote server
  let result = await response.json();
}

//   https://levelup.gitconnected.com/how-to-save-html5-canvas-drawing-as-animage-ca8047a9acf7

// https://betterprogramming.pub/saving-an-html5-canvas-as-an-image-with-todataurl-f9b7cb61595d
