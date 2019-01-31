import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should setup remove Expense action object', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit Expense action object',() => {
    const action = editExpense('123av',{note:'Hello'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123av',
        updates: {note: 'Hello'}
    });
});

test('Should Setup addExpense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This is Last month Rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should Setup addExpense action object with values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
});