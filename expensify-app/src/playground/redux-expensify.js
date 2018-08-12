import { createStore, combineReducers } from 'redux';

//
// Expenses reducer
//
// ADD_EXPRENSE
// EDIT_EXPRENSE
// REMOVE_EXPRENSE

const expensesReducerDefaultValue = [];
const expensesReducer = (state = expensesReducerDefaultValue, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//
// Filters reducer
//
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const filtersReducerDefaultValue = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultValue, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

//#region reducer rules and some info
// Reducer : rules for reducer
// 1. Reducer are pure function
// 2. Never change state or action

// by looking below store, it has main 2 properties
// 1. exprenses
// 2. filters
// based on that we can create two reducers

// const demoState = {
//   expenses: [{
//     id: '123',
//     description: 'January rent',
//     note: 'This was the final payment for address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
//#endregion