import * as Type from "./../constant/ActionType";

export const actAddToCart = (product, quantity) => {
  return {
    type: Type.ADD_TO_CART,
    product,
    quantity
  };
};
export const actDeleteInCart = product => {
  return {
    type: Type.DELETE_PRODUCT,
    product
  };
};
export const actUpdateInCart = (product,quantity) => {
    return {
        type:Type.UPDATE_PRODUCT,
        product,
        quantity
    }
}
