//0.
function getNumbers(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0 ){
      arr.push(parseInt(a[i]));
    }
  }
  return arr;
}
getNumbers('string'); 
getNumbers('n1um3ber95'); 

//1.
function findTypes() {
  let arr = {};
  let item;
  for (let i = 0; i < arguments.length; i++) {
   item = typeof arguments[i];
   if (arr.hasOwnProperty(item)){
     arr[item] += 1;
   } else {
     arr[item] = 1;
   }
  }
  return arr;
}
findTypes('number');
findTypes(1, null, true, 'Hello');

//2.
function executeForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);        
  }
  return arr;
}
executeForEach();

//3.
function mapArray(arr, func) {
  let array = [];
  executeForEach(arr, function(el){
    array.push(func(el));
  });
  return array;
}
mapArray();

//4.
function filterArray(arr, func) {
  let array = [];
  executeForEach(arr, function(el){
    if (func(el)){
    array.push(el);
    }
  });
  return array;
}
filterArray();

//5.
function showFormattedDate(a) {
  let date = a.toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
  return `Date: ${date}`;
}
showFormattedDate();

//6.
function canConvertToDate(a) {
  let convert = Date.parse(a);
  return !isNaN(convert);
}
canConvertToDate();

//7.
function daysBetween(a, b) {
  let dayMs = 86400000;
  let count = -1;
  let result = Math.round((a - b) / dayMs);
  if (result < 0) {
    result = result * count;
  }
  return result;
}
daysBetween();

//8.
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]
function getAmountOfAdultPeople(data) {
  let age = 18;
  let year = 365;
  let adult = age * year;
  return filterArray(data, 
    item => daysBetween(new Date(item.birthday), new Date()) > adult).length;
}
getAmountOfAdultPeople();

//9.
function keys (a) {
  let arr = [];
  for (const key in a) {
    if (a.hasOwnProperty(key)) {
      arr.push(key);
    }
  } 
  return arr;
}
keys();

//10.
function values (a) {
  let arr = [];
  for (const value in a) {
    if (a.hasOwnProperty(value)) {
      arr.push(a[value]);
    }
  } 
  return arr;
}
values();


