const RESERVATION_STAGES = ["Requested", "Confirmed", "Table Being Prepared", "Guest Seated", "Completed"];

document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("isAdminLoggedIn") !== "true") {
    window.location.href = "login.html";
    return;
  }

  const logoutBtn = document.getElementById("logout-btn");
  const summaryEl = document.getElementById("admin-summary");
  const listEl = document.getElementById("admin-list");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("isAdminLoggedIn");
      window.location.href = "login.html";
    });
  }

  function getReservations() {
    return JSON.parse(localStorage.getItem("reservations") || "[]");
  }

  function saveReservations(reservations) {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }

  function renderSummary(reservations) {
    const total = reservations.length;
    const completed = reservations.filter(function (r) {
      return r.status === "Completed";
    }).length;
    const pending = total - completed;

    summaryEl.innerHTML =
      '<div class="admin-summary-box"><span>' + total + '</span><p>Total Reservations</p></div>' +
      '<div class="admin-summary-box"><span>' + pending + '</span><p>In Progress</p></div>' +
      '<div class="admin-summary-box"><span>' + completed + '</span><p>Completed</p></div>';
  }

  function buildStepsHTML(status) {
    const currentIndex = RESERVATION_STAGES.indexOf(status);
    let stepsHTML = "";

    RESERVATION_STAGES.forEach(function (stage, index) {
      let stepClass = "tracker-step";
      if (index < currentIndex) {
        stepClass += " done";
      } else if (index === currentIndex) {
        stepClass += " active";
      }
      stepsHTML += '<div class="' + stepClass + '">' + stage + "</div>";
    });

    return stepsHTML;
  }

  function renderList() {
    const reservations = getReservations();
    renderSummary(reservations);

    if (reservations.length === 0) {
      listEl.innerHTML = '<p class="admin-empty">No reservations yet. New bookings from the Reservations page will show up here.</p>';
      return;
    }

    let html = "";

    reservations.forEach(function (reservation) {
      const currentIndex = RESERVATION_STAGES.indexOf(reservation.status);
      const isLastStage = currentIndex >= RESERVATION_STAGES.length - 1;

      html +=
        '<div class="tracker-section">' +
          '<div class="admin-card-header">' +
            '<div>' +
              '<h2>' + reservation.name + '</h2>' +
              '<p class="admin-details"><strong>Area:</strong> ' + reservation.area + '</p>' +
              '<p class="admin-details"><strong>Date:</strong> ' + reservation.date + ' &nbsp; <strong>Time:</strong> ' + (reservation.time || "-") + '</p>' +
              '<p class="admin-details"><strong>Guests:</strong> ' + (reservation.guests || "-") + ' &nbsp; <strong>Email:</strong> ' + reservation.email + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="tracker-steps">' + buildStepsHTML(reservation.status) + '</div>' +
          '<div class="tracker-buttons">' +
            '<button class="btn next-stage-btn" data-id="' + reservation.id + '"' + (isLastStage ? ' style="display:none;"' : '') + '>Next Stage</button>' +
            '<button class="btn admin-remove-btn remove-btn" data-id="' + reservation.id + '">Remove</button>' +
          '</div>' +
        '</div>';
    });

    listEl.innerHTML = html;

    listEl.querySelectorAll(".next-stage-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = Number(btn.getAttribute("data-id"));
        const reservations = getReservations();

        reservations.forEach(function (reservation) {
          if (reservation.id === id) {
            const currentIndex = RESERVATION_STAGES.indexOf(reservation.status);
            if (currentIndex < RESERVATION_STAGES.length - 1) {
              reservation.status = RESERVATION_STAGES[currentIndex + 1];
            }
          }
        });

        saveReservations(reservations);
        renderList();
      });
    });

    listEl.querySelectorAll(".remove-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = Number(btn.getAttribute("data-id"));
        const reservations = getReservations().filter(function (reservation) {
          return reservation.id !== id;
        });

        saveReservations(reservations);
        renderList();
      });
    });
  }

  renderList();

});
