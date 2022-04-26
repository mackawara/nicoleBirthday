document.addEventListener("readystatechange", () => {
  const show = document.getElementById("show");
  const pictureGrid = document.getElementsByClassName("picture-Grid");
  //document.getElementsByClassName("nic")[0].style.display = "flex";
  /* function toggleDisplay() {
    if (pictureGrid[0].style.display == "none") {
      pictureGrid[0].style.display = "flex";
      console.log(pictureGrid[0].style.display);
    } else {
      pictureGrid[0].style.display = "none";
      console.log(pictureGrid[0].style.display);
    }
  } */
  show.addEventListener("mouseenter", () => {
    show.innerHTML = "click me to show awesome photos";
  });

  const colors = ["red", "blue", "ÿellow"];
  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    const image1 = document.getElementsByTagName("img");
    image1[0].addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = color;
    });
    image1[0].addEventListener("mouseleave", (e) => {
      e.target.style.backgroundColor = "red";
    });
  }
  var countDownDate = new Date("may 10, 2022 00:00:0").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = document.getElementById("countdown");

    countdown.innerHTML =
      days +
      "days " +
      hours +
      "hours " +
      minutes +
      "minutes " +
      seconds +
      "seconds ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementsByClassName("nic")[0].style.display = "flex";
      countdown.innerHTML = "Happy Birthday Nicole";
    }
  }, 1000);
  // countdown.innerHTML=
});
