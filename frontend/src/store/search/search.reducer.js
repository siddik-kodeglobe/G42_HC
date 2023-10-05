import {GETDATA} from '../search/search.actionType'


const initialState = {
    resourceData: []
}

export const getDataReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GETDATA: {
            return {...state, resourceData: payload}
        }
        default: {
            return state
        }
    }
}