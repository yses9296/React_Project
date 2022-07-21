import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

export default function counter(state = initialState, action){
    // if( typeof state === 'undefined'){
    //     return initialState;
    // }

    switch(action.type){
        case types.INCREMENT:
            return { ...state, number: state.number + 1} //...state: 복제 값
        case types.DECREMENT:
            return { ...state, number: state.number - 1}
        default:
            return state;
    }
}