$(document).ready(function () {
  // Function to update the time
  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");

    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    $("#ampm").text(ampm);
  }

  // Update time every second
  setInterval(updateTime, 1000);

  // Initial time display
  updateTime();
});
