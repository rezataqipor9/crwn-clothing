export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    console.log("existingCartItem",existingCartItem)
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };
  export const EliminateCart=(cardItems,actionPayload)=>{
    const exist=cardItems.find(item=>item.id===actionPayload.id)
    if (exist.quantity===1) {
      return cardItems.filter(item=>item.id!==actionPayload.id )
    }
    return cardItems.map(item=>item.id===actionPayload.id?{...item, quantity:item.quantity-1}:item)
  }