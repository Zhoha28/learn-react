import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
// this is going to be a Thunk here, because it is returning a function, which is containing an inner function in here.
// inner function gets access to dispatch and getstate
export const fetchDishes = () => (dispatch) => {
      dispatch(dishesLoading(true));
// load for 2ms then load dishes
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errormessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errormessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});