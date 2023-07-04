const name = '{{name}}';
const userNameContainer = document.getElementById("username-container")

// function for random number to get HEX value
function getRandomInt() {
    return "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  }

//  assigns html element with the HEX value
userNameContainer.style.color = getRandomInt();

// change the inner html to animate it 🤪
userNameContainer.innerHTML = name;
