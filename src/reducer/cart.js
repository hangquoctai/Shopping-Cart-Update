import * as Type from './../constant/ActionType';
var data=JSON.parse(localStorage.getItem('CART'));
var initialState=data ? data : [];
const cart = (state=initialState,action) => {
    var { product , quantity } = action;
    var index=-1;
    switch(action.type){
        case Type.ADD_TO_CART:
            index=findProductInCart(state,product);
            if (index !== -1){
                state[index].quantity+=quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        case Type.DELETE_PRODUCT:
            index=findProductInCart(state,product)
            if(index!==1){
                state.splice(product,1);
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        case Type.UPDATE_PRODUCT:
            index=findProductInCart(state,product)
            if(index!==1){
                state[index].quantity=quantity;
            }
        default:return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index=-1;
    if( cart.length > 0){
        for(var i=0;i<cart.length;i++){
            if (cart[i].product.id === product.id)
                index=i;
        }
    }
    return index;
}
export default cart;