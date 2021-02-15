import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
// this is going to be a Thunk here, because it is returning a function, which is containing an inner function in here.
// inner function gets access to dispatch and getstate

// dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
 return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));

   
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errormessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errormessage,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// comments

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));

    // return fetch(baseUrl + 'comments')
    // .then(response => response.json())
    // .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errormessage) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errormessage,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

// promotions
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errormessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errormessage,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});