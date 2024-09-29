const user = document.querySelector("#user");
const follower = document.querySelector("#followers");
const repository = document.querySelector("#repository");
const address = document.querySelector("#address");
const bio = document.querySelector("#bio");
const img = document.querySelector("#img");
const button = document.querySelector("#search");
const restart = document.querySelector(".restart");
const frontButton = document.querySelector("#front-button");
const front = document.querySelector("#front");
const main = document.querySelector(".main");
// console.log(button);
// console.log(button.textContent);
let input = document.querySelector("#input");

frontButton.addEventListener("click", function () {
  const xml = new XMLHttpRequest();
  xml.open("GET", `https://api.github.com/users/${input.value}`);
  xml.send();

  xml.onreadystatechange = function () {
    if (xml.readyState === 4) {
      if (this.status == 200) {
        // main.style.opacity = 1;
        // main.style.visibility = "visible";
        // front.style.visibility = "hidden";

        // console.log("CLICKED");
        // front.style.opacity = 0;
        // front.style.zIndex = 0;
        // main.style.zIndex = 5;
        // main.style.display = "block";
        // front.style.display = "none";
        front.classList.remove("canSee");
        front.classList.add("cantSee");
        main.classList.add("canSee");
        main.classList.remove("cantSee");
        main.classList.add("transition");
        front.classList.remove("transition");
        function blankValue(value) {
          value.textContent = "-----";
        }
        const data = JSON.parse(xml.responseText);
        console.log(data);
        img.src = data.avatar_url;
        if (data.name != null) {
          user.textContent = data.name;
        } else {
          blankValue(user);
        }
        if (data.location != null) address.textContent = data.location;
        else {
          blankValue(address);
        }
        if (data.public_repos != null) {
          repository.textContent = data.public_repos;
        } else {
          blankValue(address);
        }
        if (data.followers != null) {
          follower.textContent = data.followers;
        } else {
          blankValue(address);
        }
        if (data.bio != null) {
          bio.textContent = data.bio;
        } else {
          blankValue(bio);
        }
        // button.textContent = "Search again";
      } else {
        alert("Enter a valid username");
      }
    }
  };
});
restart.addEventListener("click", function () {
  front.classList.remove("cantSee");
  front.classList.add("canSee");
  main.classList.add("cantSee");
  main.classList.remove("canSee");
  front.classList.add("transition");
  main.classList.remove("transition");
  // location.reload();
});
