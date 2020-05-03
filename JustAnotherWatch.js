var sec, h

function setup() {
  createCanvas(600, 600);
  sec = second()
}

function draw() {
  drawWatch()
  //textClock()
}

function drawWatch() {
  var x = 300
  var y = 300
  var s = 600
  h = hour() > 12? hour() - 12 : hour()
  background(0)
  stroke(255)
  fill(255)
  translate(x, y)
  
  // h pointer
  push()
  strokeWeight(5)
  rotate(TWO_PI*((h+minute()/60)/12))
  line(0, 0, 0, -s*0.24)
  pop()
  
  // m pointer
  push()
  strokeWeight(3)
  rotate(TWO_PI*((minute()+second()/60)/60))
  line(0, 0, 0, -s*0.32)
  pop()
  
  // s pointer
  push()
  strokeWeight(1)
  rotate(TWO_PI*(sec/60+millis()/60000));
  line(0, s*0.11, 0, -s*0.34)
  pop()
  
  // Dots
  for (var i = 0; i < 60; i++) {
    push()
    noStroke()
    rotate(TWO_PI*(i/60))
    ellipse(0, -s*0.38, s*0.005, s*0.005)
    
    if (i%5 == 0) {
      ellipse(0, -s*0.36, s*0.01, s*0.01)
    }
    pop()
  }
  
  ellipse(0, 0, s*0.02, s*0.02)
  strokeWeight(2)
  noFill()
  ellipse(0, 0, s*0.8, s*0.8)
  
  fill(255);
//  myFont = createFont("fantasy", 32)
//  textFont(myFont)
  textAlign(CENTER);
  var textSize = 32
  textSize(textSize);
  for(var i = 1; i <= 12; i++)
  {
    text(i,(s*0.45*sin(PI*i/6)),-(s*0.45*cos(PI*i/6))+textSize/2);
  }
}

function textClock(){
  let hr = hour();
  let min = minute();
  let sec = second();
  
  //time
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  text(hr + ":" + min + ":" + sec, 300, 200);
  textSize(20);
  fill(100, 100, 255);
  text("hr", 240, 240);
  fill(100, 255, 150);
  text("min", 300, 240);
  fill(255, 100, 150);
  text("sec", 360, 240);
}
