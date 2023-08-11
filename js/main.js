let cart = document.getElementById("cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCart = () => {
  return (cart.innerHTML = checkoutItemsData
    .map((x) => {
      let { id, name, newPrice, originalPrice, photo } = x;
      let search = basket.find((y) => y.id === id) || [];

      return `
<div class="flex" id=${id}>
  <img class="h-[136px] rounded-[13px]" src="/assets/${photo}">
</div>
`;
    })
    .join(""));
};

generateCart();
