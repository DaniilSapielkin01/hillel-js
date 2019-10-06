function Figure(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
  };
}
// - - - line - - -
function Line(x1, y1, x2, y2, color) {
  Figure.call(this, x1, y1, color);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.color = color;

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  };
}
// - - - Circle - - -
function Circle(x, y, r, color, alpha) {
  Figure(this, x, y, r, color);
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.alpha = alpha;

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

// - - - Rect - - -
function Rect(x, y, w, h, color) {
  Figure.call(this, x, y, w, h, color, alpha);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.alpha = alpha;

  this.draw = function(ctx) {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}
var Zigzag = function(startX, startY, zigzagSpacing, color) {
  var canvas = document.getElementById("canvasID");
  var ctx = canvas.getContext("2d");

  this.startX = startX;
  this.startY = startY;
  this.zigzagSpacing = zigzagSpacing;
  this.color = color;
  ctx.strokeStyle = this.color;

  ctx.beginPath();
  ctx.moveTo(startX, startY);

  for (var n = 0; n < 600; n++) {
    var x = startX + (n + 1) * zigzagSpacing;
    var y;
    if (n % 2 == 0) {
      y = 10;
    } else {
      y = startY;
    }
    ctx.lineTo(x, y);
  }
  ctx.stroke();
};

function Canvas() {
  var canvas = document.getElementById("canvasID"),
    ctx = canvas.getContext("2d");

  this.add = function(...value) {
    for (let i = 0; i < value.length; i++) {
      value[i].draw(ctx);
    }
  };
}
// - - -  - - -
var line = new Line(100, 300, 250, 250, "#dcdcdc"); // x1, y1, x2, y2, color
var line2 = new Line(110, 310, 260, 260, "#dcdcdc");

var circle = new Circle(120, 120, 50, "#CFEAFF", 0.5); // x, y, r, color
var circle2 = new Circle(150, 187, 66, "#CFEAFF");

var rect = new Rect(350, 180, 60, 120, "#cfffe2", 0.4); // x, y, w, h, color280, 115, 120, 50
var rect2 = new Rect(370, 165, 120, 50, " #EBCDE8", 0.7);
var rect3 = new Rect(470, 193, 65, 50, "#fbf7bd", 0.5);
var zigzag = new Zigzag(0, 0, 10, "red");

var drawArea = new Canvas("canvasID");
drawArea.add(line, line2, zigzag, circle, circle2, rect, rect2, rect3);
