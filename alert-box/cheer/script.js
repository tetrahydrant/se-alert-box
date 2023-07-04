//get data from the 🤟 StreamElements 🤟 data injection
const name = '{{name}}';
const amount = '{{amount}}';

// vanilla es6 query selection (can use libraries and frameworks too)
const userNameContainer = document.getElementById('username-container');
const amountContainer = document.getElementById('amount-container');

function getRandomInt() {
    return "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  }

userNameContainer.style.color = getRandomInt();
amountContainer.style.color = getRandomInt();

// change the inner html to animate it 🤪
userNameContainer.innerHTML = name;
amountContainer.innerHTML = amount;

