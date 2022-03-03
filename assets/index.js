// Creates a product card
function createProductCard(product) {
  // Create a div element
  // Ref https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const card = document.createElement("div");
  card.setAttribute("class", "product");
  card.setAttribute("data-id", product.id);
  // add class product to card div element
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/className
  // add an attribute of name data-id and value product id
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

  // create h3 element
  const title = document.createElement("h3");
  title.innerText = product.name;
  title.setAttribute("class", "product__name");
  // set its inner text as product name
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
  // set its class name as product__name

  // Create an image element
  const image = document.createElement("img");
  image.setAttribute("src", product.image);
  image.setAttribute("class", "product__image");
  // Set its src attribute
  // Set its class name as 'product__image'

  // Create a p element for description
  const description = document.createElement("p");
  description.innerText = product.description;
  description.setAttribute("class", "product__description");
  // Set its inner text
  // Set its className as 'product__description'

  // create a span element for price
  const price = document.createElement("span");
  price.innerText = product.price.toLocaleString();
  price.setAttribute("class", "product__price");
  // set its text as product's price
  // Hint: for comma separated representation use
  //       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_tolocalestring
  // Set class name as 'product__price';

  // Create a div for tags & set its className as 'product__tags'
  const tags = document.createElement("div");

  // Iterate over product colors array & render each color
  product.colors.forEach((color) => {
    // Create a span element for specific color
    const elem = document.createElement("span");
    elem.setAttribute("class", "product__tag");
    elem.setAttribute("data-tag-color", color);
    elem.innerText = color;
    // Set its className as 'product__tag';
    // Set an attribute data-tag-color with value color
    // Set its inner Text as color
    // Append that to parent tags element
    tags.appendChild(elem);
  });

  // Render the card in the given order i.e. iterate over them & append them as a child one by one
  [image, title, description, price, tags];
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(tags);
  // return the card
  // console.log(card);
  return card;
}

// Load the list
function renderAllCards(cardList) {
  // First select the root element
  var renderRoot = document.querySelector("#root");
  // First remove existing children so that we don't append to the
  // existing list. DO NOT remove this
  renderRoot.innerHTML = "";

  // Now iterate over the list passed as a param to render all the cards
  for (var i = 0; i < cardList.length; i++) {
    // console.log(cardList[i]);
    var card = createProductCard(cardList[i]);
    renderRoot.appendChild(card);
  }
  // Create a card element by calling createProduct method, passing the list
  // item as a parameter

  // Append that child
}
