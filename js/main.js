
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".reserve-form form");

  if (form) {
    form.addEventListener("submit", function (event) {

      event.preventDefault();

      const date = document.getElementById("date").value.trim();
      const time = document.getElementById("time").value.trim();
      const area = document.getElementById("area") ? document.getElementById("area").value : "Main Dining Room";
      const guests = document.getElementById("guests").value;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name === "" || email === "" || date === "") {
        alert("Please fill in Date, Name and Email.");
        return;
      }

      const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");

      reservations.push({
        id: Date.now(),
        name: name,
        email: email,
        date: date,
        time: time,
        guests: guests,
        area: area,
        status: "Requested"
      });

      localStorage.setItem("reservations", JSON.stringify(reservations));

      const subject = "New Reservation - Restaurant Lelebotte";
      const body =
        "NEW RESERVATION REQUEST%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Area: " + area + "%0A" +
        "Date: " + date + "%0A" +
        "Time: " + time + "%0A" +
        "Number of Guests: " + guests + "%0A%0A" +
        "Please confirm this reservation.";

      window.location.href =
        "mailto:awahmarion62@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        body;

      alert(
        "Thank you " +
          name +
          "! Your reservation details are ready to send. Please click Send in your email app so we can receive it."
      );

      form.reset();
    });
  }



});
