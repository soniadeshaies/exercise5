let days = [];

let nature, time, happy;

let no, yes, day, night, stars, flowers, camping;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);





}

function draw() {

  nature = document.getElementById('nature').value;
  time = document.getElementById('time').value;
  happy = document.getElementById('happy').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  if (nature == "yes"){
   yes = createImg("images/tree-01.png");
   yes.size(100,100);
   yes.position(100+spacex, 300+spacey);
  } else if ( nature == "no"){
   no = createImg("images/house-01.png");
   no.size(100,100);
   no.position(100+spacex, 300+spacey);
  }

  if (time == 'day'){
    day = createImg("images/sun-01.png");
    day.size(100,100);
    day.position(190+spacex, 300+spacey);
  } else if (time == 'night'){
    night = createImg("images/moon-01.png");
    night.size(100,100);
    night.position(190+spacex, 300+spacey);
  }

  if(happy == "stars"){
    stars = createImg("images/star-01.png");
    stars.size(100,100);
    stars.position(290+spacex, 300+spacey);
  }else if (happy == "flowers"){
    flowers = createImg("images/flower-01.png");
    flowers.size(100,100);
    flowers.position(290+spacex, 300+spacey);
  } else if(happy =="camping"){
    camping = createImg("images/tent-01.png");
    camping.size(100,100);
    camping.position(290+spacex, 300+spacey);
  }
  
  spacex += 350;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



}

function add() {
  days.push({
    date: Date(),
    nature: nature,
    time: time,
    happy: happy
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}