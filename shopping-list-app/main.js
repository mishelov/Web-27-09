const inputElement = document.getElementById('product-input');
const addButtonElement = document.getElementById('add-button');
const listElement = document.getElementById('shopping-list');

const productList = [];

// да направим логика за триене

function render() {
    let htmlContent = '';
    productList.forEach((product) => {
    htmlContent += `<li> ${product} </li>`;
  });
  listElement.innerHTML = htmlContent;
}

function addNewProduct () {
    const inputValue = inputElement.value;
    productList.push(inputValue);
    inputElement.value = '';
    render();
}

addButtonElement.addEventListener('click', addNewProduct);

inputElement.addEventListener('keydown', (event) => {
    if (event.code === "Enter") {
        addNewProduct();
    }
});