import {createStore} from 'redux';

//Action generators - functions that return Action Objects

const incrementCount = ({incrementBy = 1 } = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count } = {}) =>({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers are pure function - output is determined by the input
//2. Never Change state or action


const countReducer = (state = {count: 0},action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
//store.dispatch({type: 'INCREMENT',incrementBy: 5});
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());

//unsubscribe();

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 10}))

unsubscribe();
