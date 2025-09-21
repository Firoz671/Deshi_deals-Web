function getElement(id) {
  const getElement = document.getElementById(id);
  return getElement;
}

const getBtn = getElement("addToCartBtn1");

getBtn.addEventListener("click", function () {
  const getTitle = getElement("cardTitle").innerText;
  const getPrice = getElement("price-1").innerText;
  const getTotalPrice = getElement("total-price").innerText;

  const totalPrice = Number(getPrice) + Number(getTotalPrice);
  console.log(totalPrice);

  getElement("total-price").innerText = totalPrice;

  let currentQuantity = parseInt(getElement("total-quantity").innerText);
  currentQuantity++;
  getElement("total-quantity").innerText = currentQuantity;

  const getCart = getElement("cart-container");

  const createCart = document.createElement("div");
  createCart.innerHTML = `
                                    <div class="bg-gray-300 p-5 flex flex-row justify-around items-center ">
                            <img src="./assets/kitchen-1.png" alt="" class="size-15 p-3">
                            <p>${getTitle}</p>
                        </div>
        `;
  getCart.append(createCart);
});
