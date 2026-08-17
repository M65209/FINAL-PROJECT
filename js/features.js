
document.addEventListener("DOMContentLoaded", function () {


  const mysteryDishes = [
    {
      name: "Truffle Surprise Risotto",
      price: "25,000 FCFA",
      desc: "Creamy arborio rice, black truffle, aged parmesan. Chef's secret garnish.",
      img: "../images/food2.jpg"
    },
    {
      name: "Coastal Catch of the Day",
      price: "23,000 FCFA",
      desc: "Fresh line-caught fish, seasonal puree, champagne beurre blanc.",
      img: "../images/food5.jpg"
    },
    {
      name: "Wagyu Blind Cut",
      price: "39,000 FCFA",
      desc: "Premium wagyu, bone marrow butter, chef's choice of sides.",
      img: "../images/steak.jpg"
    },
    {
      name: "Forest Mushroom Dream",
      price: "20,000 FCFA",
      desc: "Wild mushrooms, handmade pasta, thyme cream, pecorino.",
      img: "../images/pasta.jpg"
    },
    {
      name: "Dark Chocolate Mystery",
      price: "9,500 FCFA",
      desc: "70% cacao molten center with a hidden flavour twist.",
      img: "../images/dessert1.jpg"
    }
  ];

  const blindBoxBtn = document.getElementById("blind-box-btn");
  const blindBoxResult = document.getElementById("blind-box-result");

  if (blindBoxBtn && blindBoxResult) {
    blindBoxBtn.addEventListener("click", function () {
     
      const randomIndex = Math.floor(Math.random() * mysteryDishes.length);
      const dish = mysteryDishes[randomIndex];

      
      blindBoxResult.innerHTML =
        '<div class="blind-reveal">' +
          '<img src="' + dish.img + '" alt="' + dish.name + '">' +
          "<h3>" + dish.name + "</h3>" +
          '<p class="price">' + dish.price + "</p>" +
          "<p>" + dish.desc + "</p>" +
          '<p class="tag">Your mystery dish has been revealed!</p>' +
        "</div>";

     
      blindBoxResult.classList.add("show");
    });
  }

  
  const trackerSteps = document.querySelectorAll(".tracker-step");
  const trackerTime = document.getElementById("tracker-time");
  const startTrackerBtn = document.getElementById("start-tracker");
  const nextStepBtn = document.getElementById("next-step");

  let currentStep = 0;

  
  const stepTimes = [0, 5, 12, 18, 22];

 
  function updateTracker() {
    trackerSteps.forEach(function (step, index) {
      step.classList.remove("active", "done");

      if (index < currentStep) {
        step.classList.add("done");      // already finished
      } else if (index === currentStep) {
        step.classList.add("active");    // current step
      }
    });

    if (trackerTime) {
      trackerTime.textContent = stepTimes[currentStep] + " min";
    }
  }

  if (startTrackerBtn) {
    startTrackerBtn.addEventListener("click", function () {
      currentStep = 0;
      updateTracker();
      startTrackerBtn.style.display = "none";
      if (nextStepBtn) {
        nextStepBtn.style.display = "inline-block";
      }
    });
  }

  if (nextStepBtn) {
    nextStepBtn.addEventListener("click", function () {
      if (currentStep < trackerSteps.length - 1) {
        currentStep = currentStep + 1;
        updateTracker();
      } else {
        // Last step reached
        alert("Your dish has arrived. Enjoy!");
        nextStepBtn.style.display = "none";
        if (startTrackerBtn) {
          startTrackerBtn.style.display = "inline-block";
        }
        currentStep = 0;
        updateTracker();
      }
    });
  }

  
  const previewBtns = document.querySelectorAll(".preview-3d-btn");
  const modal = document.getElementById("dish-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const closeModalBtn = document.getElementById("close-modal");
  const rotateBtn = document.getElementById("rotate-btn");

  let isRotating = false;
  let rotateInterval = null;

 
  previewBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const imgSrc = btn.getAttribute("data-img");
      const title = btn.getAttribute("data-title");

      if (modalImg) {
        modalImg.src = imgSrc;
      }
      if (modalTitle) {
        modalTitle.textContent = title;
      }
      if (modal) {
        modal.classList.add("show");
      }
    });
  });

  
  function stopRotate() {
    isRotating = false;
    if (rotateInterval) {
      clearInterval(rotateInterval);
      rotateInterval = null;
    }
    if (modalImg) {
      modalImg.style.transform = "rotateY(0deg)";
    }
    if (rotateBtn) {
      rotateBtn.textContent = "Rotate 3D";
    }
  }

 
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      if (modal) {
        modal.classList.remove("show");
      }
      stopRotate();
    });
  }

  
  if (modal) {
    modal.addEventListener("click", function (e) {
      
      if (e.target === modal) {
        modal.classList.remove("show");
        stopRotate();
      }
    });
  }

 
  if (rotateBtn) {
    rotateBtn.addEventListener("click", function () {
      if (!isRotating) {
        isRotating = true;
        let angle = 0;
        rotateInterval = setInterval(function () {
          angle = angle + 2;
          if (modalImg) {
            modalImg.style.transform = "rotateY(" + angle + "deg)";
          }
        }, 30);
        rotateBtn.textContent = "Stop Rotate";
      } else {
        stopRotate();
      }
    });
  }

});
