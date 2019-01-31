import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpense = getVisibleExpenses(state.expenses,state.filters);
//     console.log(visibleExpense);
// });

store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1095, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 500, createdAt: -8000 }));
store.dispatch(addExpense({ description: 'Coffee Bill', amount: 5, createdAt: -21000 }));
store.dispatch(sortByAmount());

store.dispatch(setTextFilter('Bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('Rent'));
},3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));