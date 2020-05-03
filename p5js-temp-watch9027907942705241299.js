var timerStartTime;

function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(0);
  drawWatch(300,200,400);
}

function drawWatch(x,y,s) {
  var h = hour() > 12? hour() - 12 : hour();
  stroke(255);
  fill(255);
  translate(x, y);
  
  // h pointer
  push();
  strokeWeight(5);
  rotate(TWO_PI*((h+minute()/60)/12));
  line(0, 0, 0, -s*0.24);
  pop();
  
  // m pointer
  push();
  strokeWeight(3);
  rotate(TWO_PI*((minute()+second()/60)/60));
  line(0, 0, 0, -s*0.32);
  pop();
  
  // s pointer
  push();
  strokeWeight(1);
  rotate(TWO_PI*(second()/60));//+millis()/60000));
  line(0, s*0.11, 0, -s*0.34);
  pop();
  
  // Dots
  for (var i = 0; i < 60; i++) {
    push();
    noStroke();
    rotate(TWO_PI*(i/60));
    ellipse(0, -s*0.38, s*0.005, s*0.005);
    
    if (i%5 == 0) {
      ellipse(0, -s*0.36, s*0.01, s*0.01);
    }
    pop();
  }
  
  ellipse(0, 0, s*0.02, s*0.02);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, s*0.8, s*0.8);
  
  fill(255);
//  myFont = createFont("fantasy", 32)
//  textFont(myFont)
  textAlign(CENTER, CENTER);
  var tSize = 32;
  textSize(tSize);
  for(var j = 1; j <= 12; j++)
  {
    text(j,(s*0.45*sin(PI*j/6)),-(s*0.45*cos(PI*j/6)));
  }
  
   let hr = hour();
  let min = minute();
  let sec = second();
  var dayNameIndex = new Date().getDay();  
  let da = day();
  let mo = month();
  let ye = year();
  //time
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  text(hr + ":" + min + ":" + sec, 0, 250);
   var dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]; 
  text(dayNames[dayNameIndex]+" - "+da+"."+mo+"."+ye, 0, 300);
}
