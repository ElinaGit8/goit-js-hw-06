// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const bodyUl = document.getElementById('ingredients');

// const newArray = [];

// ingredients.forEach(element => {
//   const ulEl = document.createElement('li');
//   ulEl.classList.add('item');
//   ulEl.textContent = element;
//   newArray.push(ulEl);
// })
//   bodyUl.append(...newArray);


  const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
  
  const ingridListRef = document.querySelector('#ingredients');
  
  const elements = ingredients.map((options) => {
    const liRef = document.createElement('li');
    liRef.classList.add('item');
    liRef.textContent = options;
    return liRef;
  });
  
  ingridListRef.append(...elements);
  console.log(ingredients)