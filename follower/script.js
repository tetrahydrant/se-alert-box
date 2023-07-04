//get data from the 🤟 StreamElements 🤟 data injection
const name = '{{name}}';
//const animation = 'wobble';

// vanilla es6 query selection (can use libraries and frameworks too)
//const userNameContainer = document.querySelector('#username-container');
const userNameContainer = document.getElementById("username-container")

// function for random number
function getRandomInt() {
    return "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  }

userNameContainer.style.color = getRandomInt();

// change the inner html to animate it 🤪
userNameContainer.innerHTML = name;
