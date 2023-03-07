var highs = [82, 75, 69, 69, 68];
var lows = [55, 52, 52, 48, 51];
var length = highs.length;  


function average(array, length) {
  var sum = 0;
  for (var i = 0; i < length; i++) sum += array[i];
  return parseFloat(sum / length);
}


document.getElementById('highs').innerHTML= (average(highs, length));
document.getElementById('lows').innerHTML= (average(lows, length));
document.getElementById('temps').innerHTML= ((average(highs, length) + average(lows, length)) / 2);