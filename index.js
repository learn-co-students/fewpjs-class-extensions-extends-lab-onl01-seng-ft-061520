class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    let sum = 0;
    for (var i of this.sides) {
      sum += i
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sideOne = this.sides[0]
    let sideTwo = this.sides[1]
    let sideThree = this.sides[2]
    return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne))
  }
}

class Square extends Polygon {
  get isValid() {
    let sideOne = this.sides[0]
    let sideTwo = this.sides[1]
    let sideThree = this.sides[2]
    let sideFour = this.sides[3]
    return ((sideOne === sideTwo) && (sideOne === sideThree) && (sideOne === sideFour))
  }
  get area() {
    return (this.sides[0] ** 2)
  }
}
