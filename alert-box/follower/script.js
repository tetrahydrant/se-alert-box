// Get the follower's username {{name}} using SE inline variable
// https://dev.streamelements.com/docs/widgets/62d6299fe71df-custom-code-in-alertboxes#inline-variables-available

const name = '{{name}}';
const userNameContainer = document.getElementById("username-container")

// function for random number to get HEX value
// https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
function getRandomInt() {
    return "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  }

//  assigns html element with the HEX value
userNameContainer.style.color = getRandomInt();

// change the inner html to animate it 🤪
userNameContainer.innerHTML = name;
