const slider = document.getElementById("slider");
const sliderLine = document.getElementById("slider-line");
const sliderItem = document.querySelectorAll(".slider-item");
let numberOfAthletes = document.getElementById("number-of-athletes");
numberOfAthletes.innerHTML = `/ ${sliderItem.length} `;
let counterAthletes = document.getElementById("counter");

const prew = document.getElementById("prew");
const next = document.getElementById("next");

let counter = 0;

if (counter <= 0) {
  prew.style.opacity = ".3";
  prew.disabled = true;
}

let sliderWidth = sliderItem[0].offsetWidth;

function nextSlide() {
  prew.style.opacity = "1";
  prew.disabled = false;
  ++counter;
  counterAthletes.innerHTML = counter + 1;

  console.log(counter);

  if (counter == 9) {
    next.style.opacity = ".3";
    next.disabled = true;
  } else {
    next.style.opacity = "1";
    next.disabled = false;
  }

  if (counter == 9) {
    counter = 0;
  }

  rollSlider();
}

function prewSlide() {
  next.disabled = false;
  next.style.opacity = "1";
  counter--;
  counterAthletes.textContent = counter + 1;
  console.log(counter);

  if (counter <= 1) {
    prew.disabled = true;
    prew.style.opacity = ".3";
  } else {
    prew.disabled = false;
    prew.style.opacity = "1";
  }

  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-counter * sliderWidth}px)`;
}

setInterval(() => {
  nextSlide();
}, 4000);

prew.addEventListener("click", () => {
  prewSlide();
});
next.addEventListener("click", () => {
  nextSlide();
});

// step-slider

const stepSlider = document.querySelector(".step__slider");
const stepList = document.querySelector(".step__list ");
const arrowNext = document.querySelector(".step__arrow-next");
const arrowPrew = document.querySelector(".step__arrow-prew");
const pagination = document.querySelectorAll(".step__arrow-btn");

let stepCounter = 0;

// if (stepCounter <= 0) {
//   arrowPrew.style.opacity = ".3";
//   arrowPrew.disabled = true;
// }

function updatePagination(index) {
  pagination.forEach((el, i) => {
    if (i === index) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

updatePagination(0);

pagination.forEach((el, i) => {
  el.addEventListener("click", () => {
    stepCounter = i;
    updatePagination(i);

    rollSlider2();
  });
});

function nextSlider() {
  stepCounter++;
  if (stepCounter > 4) {
    stepCounter = 0;
  }
  updatePagination(stepCounter);

  rollSlider2();
}

function prewSlider() {
  stepCounter--;
  if (stepCounter < 0) {
    stepCounter = 4;
  }
  updatePagination(stepCounter);

  rollSlider2();
}

function rollSlider2() {
  stepList.style.transform = `translateX(${-stepCounter * 354}px)`;
}

arrowNext.addEventListener("click", () => {
  nextSlider();
  console.log(stepCounter);
});

arrowPrew.addEventListener("click", () => {
  prewSlider();
  console.log(stepCounter);
});
