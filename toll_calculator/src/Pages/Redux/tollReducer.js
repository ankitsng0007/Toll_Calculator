import { combineReducers } from 'redux';

const initialSate = {
    amount:null,
    error:null
};
const tollReducer = (state=initialSate, action) => {
    switch(action.type){
        case 'CALCULATE_TOLL_SUCCESS' :
            return {
                amount: action.payload,
                error: null,
            };
        case 'CALCULATE_TOLL_FAILURE':
            return {
                amount: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({toll:tollReducer})

export default rootReducer;