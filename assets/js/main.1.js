/* --- Parallax background --- */
let dde = document.documentElement;
let value = 55, mx = 0, my = 0, lastposx = 0, lastposy = 0;
dde.addEventListener("mousemove", e => {
    let ow = dde.offsetWidth; 
    let oh = dde.offsetHeight;
    lastposx = e.clientX * value / ow;
    lastposy = e.clientY * value / oh; 
});

window.requestAnimationFrame(render);
function render (){
    mx = lerp(mx, lastposx, 0.02);
    my = lerp(my, lastposy, 0.02);
    dde.style.setProperty('--mouseX', mx + "%");
    dde.style.setProperty('--mouseY', my + "%");
    window.requestAnimationFrame(render);
}
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}
/* --- Countdown --- */
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

// done fix on timer
var x = setInterval(function() {
  now -= -1000;
  countDownDate = new Date("Dec 3, 2019 12:00:00 GMT+0300").getTime(); //initially - nov 19, transfer to 3 dec :( //12 pm
  var distance = countDownDate - now;
  var hours = leadZero(Math.floor(distance / (1000 * 60 * 60)));
  var minutes = leadZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = leadZero(Math.floor((distance % (1000 * 60)) / 1000));
    
  document.getElementById("countdown").innerHTML = hours + " : "
  + minutes + " : " + seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = '';
    showContent();
  }
}, 1000);

function showContent() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.getElementById("countdown").appendChild(clon);
}
