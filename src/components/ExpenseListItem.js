//Export a stateless functional Component 
// description, amount,createdAt
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch,id,description,amount,createdAt}) => (
    <div>
        <h3>Description: {description}</h3>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <Link to={`/editExpense/${id}`}>Edit Expense</Link>
    </div>
);

export default connect()(ExpenseListItem);