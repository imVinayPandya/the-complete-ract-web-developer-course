import { createStore, combineReducers } from 'redux';
import { v4 as uuidV4 } from 'uuid';

//
// Expenses reducer
//

// ADD_EXPENSES
const addExpense = ({ description = '', note = '', amount = '', createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidV4(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSES

const expensesReducerDefaultValue = [];
const expensesReducer = (state = expensesReducerDefaultValue, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
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

store.subscribe(() => {
  console.log(store.getState());
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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