let half = 2;
let A = [];
for (let i = 0; i < half; i++) {
    A.push(+prompt('Coordinates for point A'));
}
let B = [];
for (let i = 0; i < half; i++) {
    B.push(+prompt('Coordinates for point B'));
}
let C = [];
for (let i = 0; i < half; i++) {
    C.push(+prompt('Coordinates for point C'));
}
let axisX = (A[0] + B[0]) / half;
let axisY = (A[1] + B[1]) / half;

if (C[0] === axisX && C[1] === axisY){
    console.log(true);    
} else {
    console.log(false);
}

