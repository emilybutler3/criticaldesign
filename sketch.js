let img;
let input;

function preload(){
  img = loadImage("assets/pic.jpg");
}
function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
  
  slider = createSlider(10, 100, 86);
  input = createInput('');
}

function draw() {
  background(120);
  image(img, 0, 0);

}
