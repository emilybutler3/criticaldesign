let img;
let input;
let button;
let timer = 0;
let keepShowingImage = false;
let state = 1;
let myURLs = ["https://i.pinimg.com/474x/6e/36/04/6e360403267c3137b97be396832e61d4.jpg","https://i.pinimg.com/originals/e0/6e/91/e06e912bf52798e643bbe09032ff6eaf.jpg","https://pbs.twimg.com/media/E3iZ7FpX0AEcqt_.jpg"];


// function preload() {
  
// }

function setup() {
  noCanvas();

  
  img = createImg("https://i.pinimg.com/474x/6e/36/04/6e360403267c3137b97be396832e61d4.jpg")
  createInput();
  
  button = createButton("Submit");
  button.mouseClicked(buttonClicked);
}

function buttonClicked() {
  img.show
  ();
  keepShowingImage = true;
  // state = 1;
}

function draw() {


timer++;
  if (timer > 30 && keepShowingImage == false)   {
    img.hide();
  }

  // switch (state) {
  //   case 1:
  //     img.show();
  //     button.hide();
  //     input.hide();
  //     break;
  //   case 2:
  //     img.hide();
  //     button.show();
  //     input.show();
  //     break;
  //   case 3:
  //     img.show();
  //     button.hide();
  //     input.hide();
  //     break;
  // }

  // if (state == 1 && timer > 30) {
  //   state = 2;
  // }

  
}
