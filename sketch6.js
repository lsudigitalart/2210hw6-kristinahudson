var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;

function preload() {
  img = loadImage("background.png");
  img2 = loadImage("wolfman.png");
  img3 = loadImage("firelady.png");
  img4 = loadImage("legs.png");
  img5 = loadImage("sombrero.png");
  img6 = loadImage("mandolin.png");
  img7 = loadImage("paper.png");
  img8 = loadImage("light.png");
  img9 = loadImage("Talram_Crystal.png")
}

function setup() {
  createCanvas(1000, 1000);
  textFont("American Typewriter Regular");

}

function draw() {
  image(img, 0, 0, 800, 800);
  image(img3, 50, 430, 300, 300);
  image(img4, 505, 450, 220, 330);
  image(img2, 500, 350, 250, 250);
  image(img5, 580, 345, 90, 50);
  image(img6, 400, 530, 150, 150);
  image(img7, 0, 130, 800, 750);
  image(img8, 400, 0, 200, 200);
  image(img9, 200, 200, 70, 100);
  image(img9, 300, 100, 40, 80);
  image(img9, 60, 90, 100, 230);
  image(img9, 500, 70, 40, 80);
  image(img9, 510, 500, 40, 80);
  image(img9, 20, 500, 25, 40);
  image(img9, 75, 580, 15, 30);
  image(img9, 95, 480, 15, 30);
  textSize(30);
  fill(255);
  text("The earth looks better from a star", 30, 820);
  text("that's right above from where you are.", 300, 860);
  // textSize(20);
  // fill(255);
  // text("this collage is so fucking dumb.", 20, 200);
  // text("who made this shit", 420, 350);
  // image(img5, -50, -30, 800, 120);
  // image(img, 50, 50, 600, 600);
  // for (var x = -20; x <= width; x+=100) {
  //   image(img4, x, 450, 300, 300);
  // }
  // image(img4, -50, 200, 300, 500);
  // image(img3, -50, 390, 900, 400);
  // image(img6, 479, 111, 40, 40);
  // image(img7, 500, 80, 200, 200);


}
