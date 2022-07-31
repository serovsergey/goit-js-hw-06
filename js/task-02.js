const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeItemMarkup = item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listItemRef.className = 'item';
  return listItemRef;
}

const ingredientsRef = document.querySelector('#ingredients');
if (ingredientsRef)
  ingredientsRef.append(...ingredients.map(makeItemMarkup));
