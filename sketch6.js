var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;

function preload() {
  img = loadImage("vintage-bikini-lady.png");
  img2 = loadImage("paper.jpg");
  img3 = loadImage("fence.png");
  img4 = loadImage("weed.png");
  img5 = loadImage("string-lights.png");
  img6 = loadImage("BLUNT.png");
  img7 = loadImage("smoke.png");
}

function setup() {
  createCanvas(600, 600);
  textFont("American Typewriter Regular");

}

function draw() {
  image(img2, 0, 0, 800, 800);
  textSize(20);
  fill(255);
  text("this collage is so fucking dumb.", 20, 200);
  text("who made this shit", 420, 350);
  image(img5, -50, -30, 800, 120);
  image(img, 50, 50, 600, 600);
  for (var x = -20; x <= width; x+=100) {
    image(img4, x, 450, 300, 300);
  }
  image(img4, -50, 200, 300, 500);
  image(img3, -50, 390, 900, 400);
  image(img6, 479, 111, 40, 40);
  image(img7, 500, 80, 200, 200);


}
