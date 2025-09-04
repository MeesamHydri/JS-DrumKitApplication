// document.querySelectorAll("button").addEventListener("click", handleClick);




var allButtons = document.querySelectorAll("button");

for (var i=0; i < allButtons.length; i++) {
      document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked!")
}
