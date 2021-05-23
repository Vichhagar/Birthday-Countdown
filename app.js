var vid = document.getElementById("myVideo");
vid.volume = 0.2;

// CountDown

// Set the date we're counting down to
var countDownDate = new Date("May 23, 2022 00:00:00").getTime(); 
console.log("countDownDate");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var time = document.getElementById("demo")
  time.innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // hidden
  var card = document.getElementById("card");   
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    alert("HAPPY BIRTHDAY TO YOU! \n Click <OK> to listen to the song (not me sining ofc, lol)")
    card.style.display = "block"
    time.style.display = "none"
    vid.play();

  }
}, 1000);
