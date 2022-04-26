document.addEventListener("readystatechange", () => {
  const show = document.getElementById("show");
  const pictureGrid = document.getElementsByClassName("picture-Grid");
  show.addEventListener("click", () => {
    console.log("show clicked");
    console.log(pictureGrid);
    pictureGrid[0].style.display = "flex";
  });

  const colors = ["red", "blue", "ÿellow"];
  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    const image1 = document.getElementsByTagN("img");
    image1.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = color;
    });
    image1.addEventListener("mouseleave", (e) => {
      e.target.style.backgroundColor = "red";
    });
  }
  const countdown=document.getElementById("countdown")
  countdown.innerHTML=
});
