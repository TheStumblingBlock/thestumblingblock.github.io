var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime();
var date = new Date(st);


var leadZero = function(n) {
    if (n < 10 && n >= 0)
        return '0' + n;
    else
		return n;
}
var now = new Date(st);

//kak zhe ono nas zaebalo
//js dlya pedikov
var x = setInterval(function() {
  var countDownDate = new Date(st);
  now -= -1000;
  countDownDate -= -new Date("Nov 19, 2019 00:00:00").getTime()/1000;
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
