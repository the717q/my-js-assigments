let squareSide = 9;

console.log(`Diagonal is ${Math.sqrt(2) * squareSide}`);




let sides = [5, 6, 7];
let s = (sides[0] + sides[1] + sides[2]) / 2;

console.log(`The area of the square is ${Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - sides[2]))}`);



let radius = 4;

console.log(`The surface of circle is ${radius * radius * Math.PI} and the circumference of circle is ${radius*2*Math.PI}`)