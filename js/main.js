// Parallax

var rellax = new Rellax('.rellax');

// Slider Roadmap

var slide = document.getElementById('investSlider'), sliderDiv = document.getElementById("sliderAmount");
var invest0 = document.getElementById('invest0'), invest10 = document.getElementById('invest10'), invest20 = document.getElementById('invest20'), invest40 = document.getElementById('invest40'), invest80 = document.getElementById('invest80'), invest100 = document.getElementById('invest100');
var investItem = document.getElementsByClassName("invest-item");

$('.invest-item').css("display", "none")
invest0.style.display = "block";

function sliderChange() {
  v = slide.value
  sliderDiv.innerHTML = v
  if (v == 100) {
    $('.invest-item').css("display", "none")
    invest100.style.display = "block";
  } else if (v >= 80) {
    $('.invest-item').css("display", "none")
    invest80.style.display = "block";
  } else if (v >= 60) {
    $('.invest-item').css("display", "none")
    invest60.style.display = "block";
  } else if (v >= 40) {
    $('.invest-item').css("display", "none")
    invest40.style.display = "block";
  } else if (v >= 20) {
    $('.invest-item').css("display", "none")
    invest20.style.display = "block";
  } else {
    $('.invest-item').css("display", "none")
    invest0.style.display = "block";
  }
}

slide.addEventListener('input', sliderChange, false);

// Accordion FAQ

var acc = document.getElementsByClassName("question-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer_panel = this.nextElementSibling;
    if (answer_panel.style.display === "block") {
      answer_panel.style.display = "none";
    } else {
      answer_panel.style.display = "block";
    }
  });
}
