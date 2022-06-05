var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var setTopTime = setInterval(TopTime, 1000);
var setMidTime = setInterval(MidTime, 1000);
let clicked = true;


function TopTime()
{
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay();


    if(hours<10)
    {
        hours= `0${hours}`;
    }

    if(minutes<10)
    {
        minutes=`0${minutes}`;

    }

       toptime.innerHTML=hours+":"+ minutes;
}

function MidTime()
{
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay();


    if(hours<10)
    {
        hours= `0${hours}`;
    }

    if(minutes<10)
    {
        minutes=`0${minutes}`;

    }

       middletime.innerHTML= hours+":"+minutes;
       daydisplay.innerHTML= days[day];
}

function sms(){
  if(clicked){
    clicked = false;
  console.log("SMS Clicked");
  clearInterval(setMidTime);
  let center = document.getElementsByClassName("centertime")[0];
  center.style.background = "white";
  center.style.width = "80%";
  center.style.height = "50%";
  center.style.marginLeft = "10%";

  var java = document.createElement("p");
  java.id = "msg-text";
  java.innerHTML = "Java";

  center.prepend(java);

  java.addEventListener("click", function(){
    java.innerHTML = "Java is a High Level Programming Language."
    java.style.fontSize = "1rem";
  })

  middletime.innerHTML= "";
  daydisplay.innerHTML= "";
}
else{
  clicked = false;
  MidTime();
  const center = document.getElementsByClassName("centertime")[0];
  center.style.background = "inherit";
  center.removeChild(center.firstElementChild);
}
}
