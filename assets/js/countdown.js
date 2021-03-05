var garden = $( "#beergarden" );
var pub = $( "#pub" );

var gardenDate = new Date("Jan 5, 2022 15:37:25").getTime();
var pubDate = new Date("Mar 5, 2021 08:27:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceGarden = gardenDate - now;
  var distancePub = pubDate - now;

  // Time calculations for days, hours, minutes and seconds

  // GARDEN
  var daysGarden = Math.floor(distanceGarden / (1000 * 60 * 60 * 24));
  var hoursGarden = Math.floor((distanceGarden % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesGarden = Math.floor((distanceGarden % (1000 * 60 * 60)) / (1000 * 60));
  var secondsGarden = Math.floor((distanceGarden % (1000 * 60)) / 1000);
  
  // PUB
  var daysPub = Math.floor(distancePub / (1000 * 60 * 60 * 24));
  var hoursPub = Math.floor((distancePub % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesPub = Math.floor((distancePub % (1000 * 60 * 60)) / (1000 * 60));
  var secondsPub = Math.floor((distancePub % (1000 * 60)) / 1000);

  // GARDEN
  document.getElementById("beergarden").innerHTML = daysGarden + "d " + hoursGarden + "h "
  + minutesGarden + "m " + secondsGarden + "s ";

  // PUB
    document.getElementById("pub").innerHTML = daysPub + "d " + hoursPub + "h "
  + minutesPub + "m " + secondsPub + "s ";

  // If the count down is finished, write some text

  // GARDEN
  if (distanceGarden < 0) {
    clearInterval(x);
    document.getElementById("beergarden").innerHTML = "ITS TIME AT THE BAR";
  }

  // PUB
  if (distancePub < 0) {
    clearInterval(x);
    document.getElementById("pub").innerHTML = "ITS TIME AT THE BAR";
  }
}, 1000);