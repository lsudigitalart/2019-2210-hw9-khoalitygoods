var xWing;
var xWing1;
var xWing2;
var randYPos1;
var randYPos2;

function preload() {
  xWingM = loadModel('source/Lamborghini_Aventador.obj', true);
}


function setup() {
  createCanvas(710, 400, WEBGL);

  randYPos1 = random(height);
  randYPos2 = random(height);

  xWing1 = new Wing(25, 100, randYPos1, 200, 0, 2);
  xWing2 = new Wing(50, 250, randYPos2, -300, 0, 5);
  xWing3 = new Wing(75, 375, randYPos2, -600, 0, 8);

}


function draw() {

  background(100);

    let radius = width * 1.5;
  
    //drag to move the world.
    orbitControl();

  xWing1.update();

  xWing2.update();

  xWing3.update();




}

function Wing(tempSize, tempColorR, tempY, tempX, tempZ, tempSpeed) {
  this.size = tempSize;
  this.colorR = tempColorR;
  this.yPos = tempY;
  this.xPos = tempX;
  this.zPos = tempZ;
  this.speed = tempSpeed;

  this.update = function () {
    model(xWingM);

    translate(this.xPos, 0, this.zPos)

    this.zPos += this.speed;

    if (this.zPos > 1000) {
      this.zPos = 0;
    }

  }

  this.display = function () {
  fill(this.colorR, 0, 0);
   xWingM(this.size * 0.5 + this.xPos, this.yPos, this.size);
   xWingM(this.size * 1.5 + this.xPos, this.yPos, this.size);
   xWingM(this.size * 2.5 + this.xPos, this.yPos, this.size);
   }


}