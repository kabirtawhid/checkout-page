let cart = document.getElementById("cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCart = () => {
  return (cart.innerHTML = checkoutItemsData
    .map((x) => {
      let { id, name, newPrice, originalPrice, photo } = x;
      let search = basket.find((y) => y.id === id) || [];

      return `
<div class="flex gap-3 sm:gap-5 " id=${id}>
  <img class="min-h-[120px] max-h-[126px] sm-2:max-h-[136px] h-[40vw]  rounded-[13px]" src="/assets/${photo}">
  <div class="flex flex-col justify-between">
    <div>
      <h3 class="text-[13px] sm:text-[14px]  md:text-lg text-dark-1 font-semibold">${name}</h3>
      <p class="mt-[6px] flex items-center"><span class="text-orange text-sm md:text-base font-semibold me-[18px]">$${newPrice}</span><s class=" text-[10px] md:text-[12px] text-dark-1 font-semibold">$${originalPrice}</s></p>
    </div>
    <div class="flex justify-between items-center w-[112px] sm:w-[122px] md:w-[134px] h-[49px]  md:h-[54px] py-[14px] px-[12px] border border-gray-3 rounded-xl">
      <i class="material-icons-round math text-gray-3  rounded bg-[#e0e0e0] cursor-pointer" onclick="decrement('${id}')" >remove</i>
      <p class="font-semibold text-gray-1">${search.quantity || 0}</p>
      <i class="material-icons-round math text-gray-3 text-[21.2px] rounded bg-[#e0e0e0] cursor-pointer" onclick="increment('${id}')" >add</i>
    </div>
  </div>
</div>
`;
    })
    .join(""));
};

generateCart();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      quantity: 1,
    });
  } else {
    search.quantity += 1;
  }

  update(selectedItem);
  generateTotal(selectedItem);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search.quantity === undefined) return;
  else if (search.quantity === 0) return;
  else {
    search.quantity -= 1;
  }
  update(selectedItem);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).children[1].children[1].children[1].innerHTML =
    search.quantity;
};

let generateShipping = () => {
  let shippingContainer = document.getElementById("shipping-container");
  let total = 0;
  let shipping = 0;

  shippingContainer.innerHTML = `
  <p class="h-[1px] bg-[#bdbdbd]"></p>
  <p class="flex justify-between items-center my-[10px]"><span class="text-sm md:text-lg font-semibold text-gray-1">Shipping</span><span class="text-sm text-gray-1 font-semibold">$<span id='shipping'>${shipping}</span></span>
  <p class="h-[1px] bg-[#bdbdbd]"></p>
  <p class="flex justify-between items-center mt-[11px] text-gray-1 font-semibold">
    <span class="text-sm md:text-lg">Total</span><span class="text-sm">$<span id="total">${total}</span></span>
  </p>
`;
};
generateShipping();

let generateTotal = (id) => {
  let totalContainer = document.getElementById("total");
  let price = checkoutItemsData.find((x) => x.id === id).newPrice;
  let shipping = 0;
  if (basket.length === 1) {
    shipping = 19;
    document.getElementById("shipping").innerText = shipping;
  }

  let total = Number(totalContainer.innerText);
  total += price + shipping;
  totalContainer.innerText = total.toFixed(2);
};
