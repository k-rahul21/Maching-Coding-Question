const boxConfigurations = [ 
  {color: 'red', width: '33.3%'},
  {color: 'blue', width: '33.3%'},
  {color: 'green', width: '33.3%'},
  {color: 'orange', width: '50%'},
  {color: 'cyan', width: '50%'},
  {color: 'purple', width: '70%'},
  {color: 'brown', width: '30%'}
];

const renderBoxes = (boxes) => {
  container.innerHTML = '';
  boxes.forEach((box) => {
    const configBox = document.createElement('div');
    configBox.classList.add('box')
    configBox.style.width = box.width;
    configBox.style.backgroundColor = box.color;

    container.appendChild(configBox)
  })
}

const parentContainer = document.createElement('div');
parentContainer.classList.add('parent-container');

const inputSection = document.createElement('div');
inputSection.innerHTML = "Wants to add more?"
inputSection.className = 'input-section';

const colorInput = document.createElement('input');
colorInput.classList.add('colorInput');
colorInput.placeholder = "Enter color";
colorInput.type = "text";

const widthInput = document.createElement('input');
widthInput.classList.add('widthInput');
widthInput.placeholder = "Enter width in %"
widthInput.type = "number"

const button = document.createElement('button');
button.classList.add("btn");
button.style.padding = '5px'
button.innerText = 'Click';

button.addEventListener('click', (e) => {
e.preventDefault();
  const colorElement =  document.getElementsByClassName('colorInput');
  const widthElement =  document.getElementsByClassName('widthInput');

  const colorValue = colorElement[0].value;
  const widthValue = widthElement[0].value;

  if(!!colorValue && !!widthValue) {
    boxConfigurations.push({color: colorValue, width: `${widthValue}%`})
    console.log("box conf", boxConfigurations)
    alert("Values added Successfully");
    colorElement[0].value = '';
    widthElement[0].value = '';
    renderBoxes(boxConfigurations);
  } else {
    alert("Please fill the values")
  }
})



inputSection.appendChild(colorInput);
inputSection.appendChild(widthInput);
inputSection.appendChild(button);

const container = document.createElement("div");
container.className = "container";

renderBoxes(boxConfigurations);

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  
  if(clickedElement.classList.contains('box')) {
    const index = Array.from(container.children).indexOf(clickedElement);
    const config = boxConfigurations[index];
    alert(`Clicked element index is ${index + 1} and color is ${config.color}}`)
  }
 })

 parentContainer.appendChild(inputSection)
 parentContainer.appendChild(container);


document.body.appendChild(parentContainer)