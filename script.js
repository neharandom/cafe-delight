document.getElementById('reservationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Reservation Confirmed! We'll email you soon.");
  this.reset();
});

