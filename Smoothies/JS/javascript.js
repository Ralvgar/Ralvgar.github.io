
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
  toDom(selection);
  return selection;
};

// Put each item into the DOM

const toDom = (selection) => {
  for (select in selection) {
    // Create an unordered list
    const list = document.createElement('ul');

    // Create a list item for each select
    // and append it to the list
    selection[select].forEach(elem => {
    	const li = document.createElement('li');
    	li.textContent = elem;
      li.setAttribute("class", "list-inline-item h1 mx-0")
    	list.appendChild(li);
    });

    // Create a list item for each star
    // and append it to the list
    for (let i = 0; i < 5; i++){
      const li = document.createElement('li');
    	li.textContent = "⭐️";
      if (i === 0){
        li.setAttribute("class", `h1 mx-0 list-inline-item ml-5 star`);
        li.setAttribute("style", "cursor: pointer");
        li.setAttribute("data-value", i + 1);
        li.setAttribute("onclick", "isChecked(this)");
      }else{
        li.setAttribute("class", `h1 mx-0 list-inline-item star star--unchecked`);
        li.setAttribute("style", "cursor: pointer");
        li.setAttribute("data-value", i + 1);
        li.setAttribute("onclick", "isChecked(this)");
      }
    	list.appendChild(li);
    }

    // Inject into the DOM
    if (select % 2 === 0){
    const app = document.querySelector('#column-1');
    list.setAttribute("class", "my-5 list-inline")
    app.appendChild(list);
    }else {
    const app = document.querySelector('#column-2');
    list.setAttribute("class", "my-5 list-inline")
    app.appendChild(list);
    }
  }
};



// const isChecked = (element) => {
//   const items = element.parentElement;
//   items.childNodes.forEach( item => {
//       const elementClasses = item.className;
//       const elementList = elementClasses.split(" ")
//       if (elementList.includes("star")){
//
//       };
//
//   })
//
// }




// Another function to see if the stars are checked
const isChecked = (element) => {

  const items = element.parentElement;
  console.log(star);
  // console.log(items)
  const classList = element.className.split(" ")
  if (classList.includes("1")){
  }


  // console.log(classList)
  // Check if it is the first element from the list
  items.childNodes.forEach( item => {
      let itemList = item.className.split(" ")
      // console.log(itemList)
      if (itemList.includes("star--unchecked")){
        // console.log(itemList);
        itemList.pop();
        itemList.push("star--checked");
        element.className = itemList.join(" ");
      // console.log(classList);
      };
  })
}






  // check if the star is unchecked
//   else if (classList.includes("star--unchecked")){
//     classList.pop();
//     const number = classList[3];
//     if (number > 2){
//       const check = element.previousSibling.className;
//       if (check.split(" ").includes("star--unchecked")){
//         isChecked(element.previousSibling);
//       }
//     }
//     element.className = classList.join(" ");
//   }else{
//     classList.push("star--unchecked");
//     element.className = classList.join(" ");
//   }
// };
