let side = {
    'a': +prompt('Triangle side A lenght'),
    'b': +prompt('Triangle side B lenght'),
    'c': +prompt('Triangle side C lenght')
}
if (isNaN(side.a) || isNaN(side.b) || isNaN(side.c)) {
    alert('Please write numbers');
} else if (side.a + side.b <= side.c || side.a + side.c <= side.b || side.b + side.c <= side.a) {
    console.log('Triangle doesn’t exist');    
} else if (side.a===side.b && side.b===side.c) {
    console.log('Equivalent triangle');  
} else if (side.a===side.b || side.b===side.c) {
    console.log('Isosceles triangle'); 
} else {
    console.log('Normal traingle');
}