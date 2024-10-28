// reducer.js
import { ADD_EXPENSE } from './actions';

const initialState = {
  expenses: [],
  count: 0,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default expenseReducer;
