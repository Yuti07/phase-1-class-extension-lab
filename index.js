// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    if (this.sides.length === 3) {
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
    return false;
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    if (this.sides.length === 4) {
      return this.sides.every((side) => side === this.sides[0]);
    }
    return false;
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    }
    return null;
  }
}
