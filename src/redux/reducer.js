//importing all json files
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

import { DISHES } from "../shared/dishes";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

//action to be performed
//state cannot be modified directly here, use this state -  copy into new and modify
export const Reducer = (state = initialState, action) => {
  return state;
};
