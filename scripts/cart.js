document.getElementById("cart-counter").innerHTML =
      sessionStorage.getItem("cartCount");

document.getElementById("total-price").innerHTML =
    sessionStorage.getItem("totalPrice");

let cartHTML='';
const cartArrNEW= JSON.parse(sessionStorage.getItem('cartArr'));
if (cartArrNEW!==null){
      cartArrNEW.forEach((element,index) => {
      cartHTML+=`
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${element.image}" alt="" />
        </div>
        <div class="cart-item-info">
          <span style="font-weight: 700; margin-right: 10px">${element.brandname}</span>
          <span style="margin-right: 100px">${element.productname}</span>
          <span class="cart-item-price">${element.priceInKurus}</span>
          <span class="cart-item-pricetype">${element.priceType}</span>
        </div>
        <div class="remove-cart-item">
            <button class="button-remove-cart-item" onclick="removeItem(${index})">REMOVE </button>
        </div>
      </div>
      `
});
}
else{
      cartHTML=`<h1>Sepetinizde hiçbir ürün yok.</h1>`;
}


function removeItem(index){
      let tempPrice=+document.getElementById("total-price").innerHTML;
      let tempCount= +document.getElementById("cart-counter").innerHTML;
      let newPrice= tempPrice-(cartArrNEW[index].priceInKurus);
      let newCount=tempCount-1;

      sessionStorage.setItem('cartCount',newCount);
      sessionStorage.setItem('totalPrice',newPrice);
      cartArrNEW.splice(index,1);
      sessionStorage.setItem('cartArr',JSON.stringify(cartArrNEW));
      location.reload();      
}
document.querySelector('.cart-container').innerHTML=cartHTML;


