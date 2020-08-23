var form;
var database;
function setup() {
  createCanvas(windowWidth, windowHeight);
  database=firebase.database();
  form=new Form();
 
}

function draw() {
  background(76,131,135);  
  form.display();
  drawSprites();
}