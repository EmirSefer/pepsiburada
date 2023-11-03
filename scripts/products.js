const products=[
    { 
      id: 1,
      image: 'images/laptop.png',
      brandname: 'HP',
      productname:'Laptop 1',
      priceInKurus:1500000,
      priceType: 'TL'
    },
  
    {
      id:2,
      image: 'images/mouse.png',
      brandname: 'A4Tech',
      productname: 'Mouse',
      priceInKurus:5000,
      priceType: 'TL'
    },
  
    {
      id: 3,
      image: 'images/keyboardmouse.png',
      brandname: 'Logitech',
      productname: 'Keyboard and Mouse',
      priceInKurus:10000,
      priceType: 'TL'
    },
  
    {
      id:4,
      image: 'images/laptop.png',
      brandname: 'Samsung',
      productname: 'Laptop 2',
      priceInKurus:1500000,
      priceType: 'TL'
    },
  
  ];
  
  if(document.title=== 'pepsiburada') {products.forEach((product) => {
      const html = `
    <div
      class="grid-item"
      onmouseenter="showButton(this)"
      onmouseleave="hideButton(this)"
    >
      <div class="item-imgcontainer">
        <img
          class="item-img"
          src="${product.image}"
          alt="Keyboard and Mouse"
        />
      </div>
      <!--item2 info-->
      <div class="item-info">
        <div class="item-info-text">
          <p class="item-info-brand">${product.brandname}</p>
          <p class="item-info-productname">${product.productname}</p>
        </div>
  
        <div class="item-info-pricetag">
          <p class="item-info-price">${(product.priceInKurus/100).toFixed(2)}</p>
          <p class="item-info-unit">${product.priceType}</p>
        </div>
      </div>
      <div class="item-buy">
        <button class="item-buy-button" onclick="addToCart(this)">
          Sepete Ekle
        </button>
      </div>
      <input type="hidden" class="item-id" name="itemID" value="${product.id}">
    </div>`
  
    const itemGrid= document.querySelector('.grid-container');
    itemGrid.innerHTML = itemGrid.innerHTML+ html;
  
  });
  }