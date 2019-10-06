// let canvas = document.getElementById("canvasId");
// let ctx = canvas.getContext("2d");

// class Figure {
//   constructor() {}
//   draw() {}
// }

// class Line extends Figure {
//   constructor(x1, y1, x2, y2, color) {
//     super();
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//     this.color = color;
//   }
//   draw(ctx) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = this.color;
//     ctx.stroke();
//     //---line_too
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = this.color;
//     ctx.stroke();
//   }
// }

// class CanvasClass {
//   constructor() {
//     this.canvas = document.getElementById("canvasId");
//     this.ctx = this.canvas.getContext("2d");
//   }
//   add(...elements) {
//     for (let i = 0; i < elements.length; i++) elements[i].draw(this.ctx);
//   }
// }

// var line = new Line(100, 300, 250, 250, "#dcdcdc"); // x1, y1, x2, y2, color
// var line2 = new Line(110, 310, 260, 260, "#dcdcdc");

// line.draw();
class FigureClass {
  constructor() {}
  draw() {}
}

class LineClass extends FigureClass {
  constructor(x1, y1, x2, y2, color) {
    super();
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.color = color;
  }
  draw(context) {
    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.strokeStyle = this.color;
    context.stroke();
  }
}

class CanvasClass {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
  }
  add(...elements) {
    for (let i = 0; i < elements.length; i++) elements[i].draw(this.ctx);
  }
}

var lineCl = new LineClass(50, 250, 200, 200, "#dcdcdc");
var lineCl2 = new LineClass(68, 264, 218, 214, "#dcdcdc");

var drawArea1 = new CanvasClass("mySecondCanvas");
drawArea1.add(lineCl, lineCl2);

