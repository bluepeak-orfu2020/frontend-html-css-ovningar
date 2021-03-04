/*
  Exercise: Create 10 div elements inside the div with
    ID="container". Each div shall have a size of 20 by
    20 px. The goal of the exercise is to update the
    background-color of these divs using the HSL color
    wheel to create a rainbox effect.

    Using the setInterval below to update the background-
    colors. In the setInterval's callback set the
    background-color of each div. For every div
    in the list offset the HSL hue by 10 degrees.
    So that at the start the first span is at 0º,
    the second span is at 10º, etc.

  Bonus exercise: Style the colored div elements to
  appear in a circle. This is not something we've
  covered but it can be achived in a few lines of
  CSS.
*/

const container = document.getElementById('container')
container.style.margin = '120px';

const colors = [];
const count = 36;
for (let i = 0; i < count; i++) {
  const colorDiv = document.createElement('div');
  colorDiv.style.width = '20px';
  colorDiv.style.height = '20px';
  colorDiv.style.backgroundColor = 'hsl(' + (10 * i) + ', 100%, 50%)';

  const angle = i / count;
  colorDiv.style.position = 'absolute';
  colorDiv.style.transform = 'rotate(' + (360 * angle) +  'deg) translate(100px)';

  container.appendChild(colorDiv);

  colors.push({
    value: 10 * i,
    element: colorDiv
  })
}

function updateValues() {
  colors.forEach((color) => {
    let newValue = color.value + 10
    if (newValue >= 360) {
      newValue = 0;
    }
    color.value = newValue;
  })
}

function updateColors() {
  colors.forEach((color) => {
    color.element.style.backgroundColor = 'hsl(' + color.value + ', 100%, 50%)';
  })
}

setInterval(() => {
  updateValues();
  updateColors();
}, 200);
