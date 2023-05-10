export const addTOCart = (pizza,quantity,varient) =>(dispatch,getState)=> {

    let cartItem = {
        name:pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient:varient,
        quantity:Number(quantity),
        prices:pizza.prices,
        price: pizza.prices[0][varient]*quantity
    };
    if(cartItem.quantity>10){
        alert("maximum limit excceed");
    }else{
        if(cartItem.quantity<1)
        {
            dispatch({type:"DELETE_FROM_CART",payload:pizza});
        }
        else
        {
            dispatch({type:"ADD_TO_CART",payload:cartItem});
            localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
        }
    }

};

export const deleteFromCart = (pizza)=>(dispatch,getState)=>{
    const cartItems = getState().cartReducer.cartItems;
    dispatch({type:"DELETE_FROM_CART",payload:pizza})
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}