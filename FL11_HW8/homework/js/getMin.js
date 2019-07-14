getMin();

function getMin(){
  let min = arguments.length;
  for (let i = 0; i < min; i++) {
    if (arguments[i] < 0) {
      min = arguments[i];
    return min;
    }
  }
}
