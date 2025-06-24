import { useReducer } from 'react';

let initialValue = 0;
let initialReact = { like: 0, dislike: 0 };

const counter = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

const likeReducer = (state, action) => {
    switch (action.type) {
        case 'like':
            return { like: state.like + 1, dislike: state.dislike };
        case 'dislike':
            return { like: state.like, dislike: state.dislike + 1 };
        default:
            return state;
    }
};

const Reducer = () => {
    const [count, dispatch] = useReducer(counter, initialValue);
    const [likes, dispatchLike] = useReducer(likeReducer, initialReact);

    return (
        <div>
            <h1>Reducer</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <h1>Like Counter</h1>
            <button onClick={() => dispatchLike({ type: 'like' })}>
                👍{likes.like}
            </button>
            <button onClick={() => dispatchLike({ type: 'dislike' })}>
                👎{likes.dislike}
            </button>
        </div>
    );
};

export default Reducer;