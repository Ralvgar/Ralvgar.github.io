
// global const required for page configuration.
const numberOfSmoothies = 20;
const numberOfFruitsInPack = 4;
// lists to get data values
let listValues = [];
const selection = [];
// creates a values list that depends on the number of smoothies.
const createListValues = () => {
  for (let i = 0; i < numberOfSmoothies; i++){
    listValues.push(1);
  };
}

createListValues();

                            // Creates different fruit packs.

const shuffle = () => {
  const fruits = ["🍎", "🍐", "🍋", "🍌", "🍉", "🍇", "🍓", "🥥", "🥒", "🍍"];
  let packCounter = 0;
// loop to create fruit list
  while (packCounter < numberOfSmoothies) {
    const newPack = [];
    let x = 0;
    // loop to add 4 different fruits to newpack () list
    while (x < numberOfFruitsInPack) {
      const fruit = fruits[Math.floor(Math.random() * fruits.length)];
      if (newPack.length === 0 || newPack.includes(fruit) !== true){
        newPack[x] = fruit;
        x++
      }
    };
    // If the selection is empty, add the first pack of fruits directly.
    if (selection.length === 0){
      selection.push(newPack);
      packCounter++
    }else{
      // If the selection is not empty, determine if the Fruit Pack is already in the selection list and if it is not, add it.
    const counter = []
    for (let z = 0; z < selection.length; z++){
      counter.pop();
      let y = 0;
      for (let x = 0; x < newPack.length; x++){
        if (selection[z].includes(newPack[x])){
          y++
        };
      };
      counter.push(y);
    };
      if (!counter.includes(4)){
        selection.push(newPack);
        packCounter++;
      }
    };
  }
  toDom(selection);
};

                                // Put each item into the DOM
const toDom = (selection) => {
  for (select in selection) {
    // Create an unordered list
    const list = document.createElement('ul');

    // Create a list item for each select and append it to the list.
    selection[select].forEach(elem => {
    	const li = document.createElement('li');
    	li.textContent = elem;
      li.setAttribute("class", "list-inline-item h1 mx-0")
    	list.appendChild(li);
    });

    // Call list fuction (it was created to try to reset the stars into the DOM but not completed yet.)
    createStars(list);
    // Inject into the DOM
    if (select % 2 === 0){
    const app = document.querySelector('#column-1');
    list.setAttribute("class", "my-5 list-inline")
    list.setAttribute("number", select)
    app.appendChild(list);
    }else {
    const app = document.querySelector('#column-2');
    list.setAttribute("class", "my-5 list-inline")
    list.setAttribute("number", select)
    app.appendChild(list);
    }
  }
};

// Create a list item for each star and append it to the list.
const createStars = (list) => {
  for (let i = 0; i < 5; i++){
    const li = document.createElement('li');
    li.textContent = "⭐️";
    if (i === 0){
      li.setAttribute("class", `h1 list-inline-item ml-3 mr-0 star star-checked`);
      li.setAttribute("style", "cursor: pointer");
      li.setAttribute("data-value", i + 1);
      li.setAttribute("onclick", "isChecked(this)");
      list.appendChild(li);
    }else{
      li.setAttribute("class", `h1 mx-0 list-inline-item star star--unchecked`);
      li.setAttribute("style", "cursor: pointer");
      li.setAttribute("data-value", i + 1);
      li.setAttribute("onclick", "isChecked(this)");
      list.appendChild(li);
    }
  }
  return list;
}

                              // See if the stars are checked

const isChecked = (element) => {
  const items = element.parentElement;
  const classList = element.className.split(" ");
  const value = element.getAttribute("data-value");
  const number = items.getAttribute("number");
  let counter = 1;
  items.childNodes.forEach( item => {
    const itemList = item.className.split(" ");
    if (itemList.includes("star")) {
      if (counter <= value) {
        counter++;
        itemList.pop();
        itemList.push("star--checked");
        item.className = itemList.join(" ");
      }else{
        counter++;
        itemList.pop();
        itemList.push("star--unchecked");
        item.className = itemList.join(" ");
      }
    };
  })
  getValue(value,number);
};


// Modifies the listValues with the information taken from the DOM;
const getValue = (value,number) => {
  listValues[number] = parseInt(value);
  console.log(listValues);
};


// Makes an object with the values from FruitPacks as key and Stars puntuation as value

const objectValue = () => {
  const objPackValues = {};
  selection.forEach((key, value) => objPackValues[key] = listValues[value]);
  console.log(objPackValues);
  return objectValue;
};

// Reset the listValues.
const reset = () => {
  listValues = [];
  createListValues();
}
