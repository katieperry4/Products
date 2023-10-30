class Product {
  constructor(imageUrl, title, price, description, bracket) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.price = price;
    this.description = description;
    this.bracket = bracket;
  }
}

class Manager {
  constructor() {
    this.products = this._createProducts();
  }
  _createProducts() {
    let cheapRed = new Product(
      "https://dummyimage.com/200x200/000/fff",
      "Cheap Red",
      "$10.00",
      "Like paint stripper",
      "$"
    );
    let midRed = new Product(
      "https://dummyimage.com/200x200/000/fff",
      "Mid Red",
      "$20.00",
      "Like wine kinda",
      "$$"
    );
    let goodRed = new Product(
      "https://dummyimage.com/200x200/000/fff",
      "Good Red",
      "$50.00",
      "Like a warm hug",
      "$$$"
    );
    let bestRed = new Product(
      "https://dummyimage.com/200x200/000/fff",
      "Expensive Red",
      "$100.00",
      "Like the best",
      "$$$$"
    );
    return [cheapRed, midRed, goodRed, bestRed];
  }
  render() {
    const productSection = document.querySelector(".product-holder");
    this.products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product-item";
      productElement.innerHTML = `
            <div>
              <img src="${product.imageUrl}" alt="${product.title}">
              <div class="product-item__content">
                <h2>${product.title}</h2>
                <h3>${product.price}</h3>
                <p>${product.description}</p>
              </div>
            </div>
          `;

      productSection.appendChild(productElement);
    });
  }
}

const productManager = new Manager();
productManager.render();










const productTemplate = document.createElement("template");
productTemplate.innerHTML = `
    <div>
        <slot name="image">
            <img src="No image" alt="Default Alt">
        </slot>
        <div>
            <slot name="title">Default title</slot>
            <slot name="price">$10.45</slot>
            <slot name="description">Default description</slot>
            <slot name="button"><button>Button</button></slot>
        </div>
    </div>
`;


class NewProducts extends HTMLElement {
  constructor() {
    super();
    const shadowroot = this.attachShadow({ mode: "closed" });
    let clone = productTemplate.content.cloneNode(true);
    shadowroot.append(clone);
  }
}

customElements.define('product-template', NewProducts);