var garden = $( "#beergarden" );
var pub = $( "#pub" );
var percent = $( "#percent" );

var gardenDate = new Date("Apr 12, 2021 00:00:00").getTime();
var pubDate = new Date("May 17, 2021 00:00:00").getTime();
var startDate = new Date("Mar 01, 2021 00:00:00").getTime();

// Update the count down every 1 second
setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceGarden = gardenDate - now;
  var distancePub = pubDate - now;
  var distanceStart = startDate + now;

  var secondsbetweenGarden = 3628800;
  var distanceBetweenGarden = distanceStart + secondsbetweenGarden;
  var percentageBetweenGarden = (distanceStart / distanceBetweenGarden) * 100;
  $('#gardenprogress').attr('aria-valuenow', percentageBetweenGarden).css('width', percentageBetweenGarden+'%');

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

  var timePub = (((((daysPub * 24)+hoursPub)*60)+minutesPub)*60)+secondsPub;
  var calcPub = (1 / timePub) * 100;

  $('#pubprogress').attr('aria-valuenow', calcPub).css('width', calcPub+'%');

  // GARDEN
  document.getElementById("beergarden").innerHTML = daysGarden + "d " + hoursGarden + "h "
  + minutesGarden + "m " + secondsGarden + "s ";

  // PUB
    document.getElementById("pub").innerHTML = daysPub + "d " + hoursPub + "h "
  + minutesPub + "m " + secondsPub + "s ";

  // If the count down is finished, write some text

  // GARDEN
  if (distanceGarden < 0) {
    document.getElementById("beergarden").innerHTML = "ITS TIME AT THE BAR";
  }

  // PUB
  if (distancePub < 0) {
    document.getElementById("pub").innerHTML = "ITS TIME AT THE BAR";
  }
}, 1000);