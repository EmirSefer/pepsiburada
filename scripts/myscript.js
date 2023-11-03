  
var cartCount = sessionStorage.getItem("cartCount");
const cartElement = document.getElementById("cart-counter");
const cartArr = JSON.parse(sessionStorage.getItem('cartArr'));

  if(cartCount >0){
    cartElement.innerHTML=cartCount;
  }
  
  var totalPrice = +sessionStorage.getItem("totalPrice");
  //let cartCount=0;
  //let totalPrice=0;
  


  function addToCart(clickedButton) {
    
    //we need to reach the parent node
    const firstParent = clickedButton.parentElement;
    const grandParent = firstParent.parentElement;
    var priceString = grandParent.querySelector(".item-info-price").innerHTML;
    var price= +priceString;
    totalPrice+=price;
    cartCount++;
    let productInfo={
      id: grandParent.querySelector('.item-id').value,
      image: grandParent.querySelector('.item-img').src,
      brandname: grandParent.querySelector('.item-info-brand').innerHTML,
      productname: grandParent.querySelector('.item-info-productname').innerHTML,
      priceInKurus: grandParent.querySelector('.item-info-price').innerHTML,
      priceType: grandParent.querySelector('.item-info-unit').innerHTML
    }
    //cartArr.push(productInfo);
    //sessionStorage.setItem('cartArr', JSON.stringify(cartArr));
    console.log(cartArr);
    sessionStorage.setItem("cartCount",cartCount);
    sessionStorage.setItem("totalPrice",totalPrice);
    
    cartElement.innerHTML = cartCount;
  }

  function showButton(targetDiv){
            
    var btn=targetDiv.getElementsByClassName("item-buy-button")[0];
    btn.style.opacity="1";
    //onsole.log("Button is shown");
        
  }
  function hideButton(targetDiv){

    var btn=targetDiv.getElementsByClassName("item-buy-button")[0];
    btn.style.opacity="0";
    btn.style.transition="0.2s";
    //console.log("Button is hidden");
      }
    

  function printTotal(){
    if (totalPrice==0){
      alert("Cart is empty!");
    }
    else alert("Total cost: " + (+sessionStorage.getItem("totalPrice"))+ " TL");
  }

     
  function clearCart(){
    sessionStorage.setItem("cartCount",0);
    sessionStorage.setItem("totalPrice",0);
    sessionStorage.setItem("cartArr",JSON.stringify([]));
    cartElement.innerHTML=0;
    location.reload();
  }

