const categoriesListRef = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesListRef.length}`);

for (const categoryRef of categoriesListRef) {
    const headerRef = categoryRef.querySelector('h2');
    console.log(`Category: ${headerRef.textContent}`);
    const elementsListRef = categoryRef.querySelectorAll('ul>li');
    console.log(`Elements: ${elementsListRef.length}`)
}