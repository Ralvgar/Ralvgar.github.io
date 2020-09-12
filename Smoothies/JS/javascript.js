
const shuffle = () => {
// Predefined variables of the function
  const fruits = ["🍎", "🍐", "🍋", "🍌", "🍉", "🍇", "🍓", "🥥", "🥒", "🍍"];
  const numberOfSmoothies = 20;
  const numberOfFruitsInPack = 4;
  const selection = [];
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
      if (counter.includes(4)){
      }else{
        selection.push(newPack);
        packCounter++;
      }
    };
  }

  // The DOM is modified to show the selection of fruits on the screen

  let fruitPack = "";
  for (let i = 0; i < selection.length; i++){
    if (i % 2 === 0){
    fruitPack = document.getElementById('column-2');
    }else {
    fruitPack = document.getElementById('column-1');
    }
    for (let x= 0; x < selection[i].length; x++){
      const entry = document.createElement('li');
      entry.setAttribute("class", "list-inline-item h1 mx-0")
      entry.appendChild(document.createTextNode(selection[i][x]));
      try{
          fruitPack.appendChild(entry);
      }catch(error){
      }
    }

    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode("⭐️⭐️⭐️⭐️⭐️"));
    newLi.setAttribute("class", "h1 ml-5 list-inline-item ");
    try{
      fruitPack.appendChild(newLi);
    }catch(error){
    }
    const newUl = document.createElement('ul');
    newUl.setAttribute("class", "my-5");
    try{
      fruitPack.appendChild(newUl);
    }catch(error){
    }


  // In this part it returns the selection list where the fruit packs are.
  }
  return selection;
};
