document.addEventListener("DOMContentLoaded", function (){
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;


  const fetchProducts =  async() => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      console.log("Data", data)
   
      if(data && data.products) {
        products = data.products;
        render();
      }
    } catch (error) {
      console.log("Error while fetching Products..")
    }
  }

  const render = () => {
    const productsContainer = document.createElement("div");
    const pagination = document.createElement("div");
    pagination.classList.add("pagination")
    productsContainer.classList.add("products");

    if(products.length > 0) {
      products.slice(page * 10 - 10, 10 * page).forEach(prod => {
        const product = document.createElement("div");
        product.classList.add("product__single");
        product.innerHTML = `
        <img src="${prod.thumbnail}" alt="${prod.title}"/>
        <span>${prod.title}</span>
        `;
        productsContainer.appendChild(product);
    })

    if(page > 1) {
      const prevButton = createPaginationButton("👈", () => {
        selectPageHandler(page - 1)
      })
      pagination.appendChild(prevButton);
    }

    for(let i=0; i < products.length / 10; i++) {
     const pageButton =  createPaginationButton(i+1, () => {
      selectPageHandler(i+1)} , page === i+1)
      pagination.appendChild(pageButton)
    }

    if(page < products.length / 10) {
      const nextButton = createPaginationButton("👉", () => {
       selectPageHandler( page + 1)
      })
      pagination.appendChild(nextButton);
    }
    }

    app.innerHTML = '';
    app.appendChild(productsContainer);
    app.appendChild(pagination)
  }

  const createPaginationButton = (text, clickHandler, isSelected = false) => {
    const paginationButton = document.createElement("button");
    paginationButton.textContent = text;
    paginationButton.addEventListener("click", clickHandler);

    if(isSelected) {
      paginationButton.classList.add("pagination__selected")
    }
    return paginationButton;
  }

  const selectPageHandler = (selectedPage) => {
    if(page > 0 && page < products.length / 10 && selectedPage != page) {
      page = selectedPage;
      render()
    }
  }

  fetchProducts();
})