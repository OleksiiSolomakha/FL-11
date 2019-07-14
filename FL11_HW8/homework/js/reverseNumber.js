reverseNumber();

function reverseNumber(input){
  let rev = 0;
  while (input){
    rev = rev * 10;
    rev = rev + input % 10;
    input = input - input % 10;
    input = input/10;
  }
  return rev;
}