var leadZero = function(n) {
    if (n < 10 && n >= 0)
        return '0' + n;
    else
		return n;
}
var countDownDate = new Date("Nov 19, 2019 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = leadZero(Math.floor(distance / (1000 * 60 * 60)));
  var minutes = leadZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = leadZero(Math.floor((distance % (1000 * 60)) / 1000));
    
  document.getElementById("countdown").innerHTML = hours + " : "
  + minutes + " : " + seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = '';
  }
}, 1000);

function getServerTime() {
  return $.ajax({async: false}).getResponseHeader( 'Date' );
}
console.log('Server Time: ', getServerTime());
console.log('Locale Time: ', new Date(getServerTime()));
