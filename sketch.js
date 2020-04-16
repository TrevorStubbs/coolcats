// draws a cat

function setup() {

    
    // var cnv = createCanvas(100, 100);
    // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
    // cnv.position(x, y);

    // background(255, 0, 200);
    
    var canvas = createCanvas(100, 100);
    canvas.parent("sketchHolder");
    background(220);


  
    // ears
    triangle(58, 25, 72, 34, 80, 10);
    triangle(42, 25, 28, 34, 20, 10);
  
    // head
    ellipse(50, 50, 60, 60);
  
    // right whiskers
    line(70, 50, 90, 50);
    line(70, 45, 90, 37);
    line(70, 55, 90, 63);
    // left whiskers
    line(30, 50, 10, 50);
    line(30, 45, 10, 37);
    line(30, 55, 10, 63);
  }