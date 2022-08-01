const categoriesListRef = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesListRef.length}`);

for (const categoryRef of categoriesListRef) {
    const headerRef = categoryRef.firstElementChild;
    console.log(`Category: ${headerRef.textContent}`);
    const elementsListRef = headerRef.nextElementSibling;
    console.log(`Elements: ${elementsListRef.children.length}`)
}