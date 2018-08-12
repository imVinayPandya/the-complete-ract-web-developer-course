import { createStore, combineReducers } from 'redux';
// Reducer : rules for reducer
// 1. Reducer are pure function
// 2. Never change state or action

const demoState = {
  expenses: [{
    id: '123',
    description: 'January rent',
    note: 'This was the final payment for address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};