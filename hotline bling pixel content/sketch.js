var sounds = []

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;

function preload() {
  soundFormats('mp3');
  for (var i = 0; i < 10; i++) {
    let sound = loadSound(i + '.mp3');
    sounds.push(sound);
  //first 10 keys are numbers, starts at 0
  img = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 18.png');
  img2 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 8.png');
  img3 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 9.png');
  img4 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 10.png');
  img5 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 11.png');
  img6 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 12.png');
  img7 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 13.png');
  img8 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 14.jpg');
  img9 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 15.png');
  img10 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 16.png');
  //circle keys
  img11 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 24.png');
  img12 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 25.png');
  img13 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 26.png');
  img14 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 27.png');
  img15 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 28.png');
  //misc keys
  img16 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 5.png');
  img17 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 6.png');
  img18 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 7.png');
  img19 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 17.png');
  img20 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 19.png');
  img21 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 20.png');
  img22 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 21.png');
  //phone body
  img23 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 29.png');
  img24 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 30.png');
  img25 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop.png');
  //eyes blink
  img26 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 2.png');
  img27 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 3.png');
  img28 = loadImage('hotline bling pixel content/hotline bling pixel test enlarge crop 4.png');
  }
}

function setup() {
  createCanvas(400, 400);
  textSize(100);
}

function draw() {
  background(1280, 1920);
  fill(255);
  //closed phone first
  image(img23, 0,0,);
}

function keyPressed() {
  if (key == '0') {
    sounds[Cellular Flip Phone Dial Zero Beep].play();
    //text('0', random(width), random(height));
    image(img, 0, 0);

  }
  if (key == '1') {
    //sounds[1].play();
    //text('1', random(width), random(height));
    sounds[Cellular Flip Phone Dial One Beep].play();
    image(img2,0,0);
  }
  if (key == '2') {
    //sounds[2].play();
    //text('2', random(width), random(height));
    sounds[Cellular Flip Phone Dial Two Beep].play();
    image(img3, 0,0);
  }
  if (key == '3') {
    //sounds[3].play();
    //text('3', random(width), random(height));
    sounds[Cellular Flip Phone Dial Three Beep].play();
    image(img4, 0,0);
  }
  if (key == '4') {
    //sounds[4].play();
    //text('4', random(width), random(height));
    sounds[Cellular Flip Phone Dial Four Beep].play();
    image(img5, 0,0);
  }
  if (key == '5') {
    //sounds[5].play();
    //text('5', random(width), random(height));
    sounds[Cellular Flip Phone Dial Five Beep].play();
    image(img6, 0,0);
  }
  if (key == '6') {
    //sounds[6].play();
    //text('6', random(width), random(height));
    sounds[Cellular Flip Phone Dial Six Beep].play();
    image(img7, 0,0);
  }
  if (key == '7') {
    //sounds[7].play();
    //text('7', random(width), random(height));
    sounds[Cellular Flip Phone Dial Seven Beep].play();
    image(img8, 0,0);
  }
  if (key == '8') {
    //sounds[8].play();
    //text('8', random(width), random(height));
    sounds[Cellular Flip Phone Dial Eight Beep].play();
    image(img9, 0,0);
  }
  if (key == '9') {
    //sounds[9].play();
    //text('9', random(width), random(height));
    sounds[Cellular Flip Phone Dial Nine Beep].play();
    image(img10, 0,0);
  }
  if (key == 'W') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img15,0,0);
  }
  if (key == 'A') {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img14,0,0);
  }
  if (key == 'S') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img11,0,0);
  }
  if (key == 'E') {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img13,0,0);
  }
  if (key == 'D') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img12, 0,0);
  }
  if key == '-' {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img19,0,0);
  }
  if (key == '=') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img20,0,0);
  }
  if (key == 'Z') {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img16,0,0);
  }
  if (key == 'V') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img17,0,0);
  }
  if (key == 'M') {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img18,0,0);
  }
  if (key == '[') {
    sounds[Cellular Flip Phone Function Button Beep 1].play();
    image(img21,0,0)
  }
  if (key == ']') {
    sounds[Cellular Flip Phone Function Button Beep 2].play();
    image(img22,0,0);
  }
}
