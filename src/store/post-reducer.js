import * as actionTypes  from './actions';

const postReducer = (state=[],action) =>{

    switch (action.type){

        case actionTypes.GET_POSTS:
            return action.payload;

    
    }

    return state;

}

export default postReducer;