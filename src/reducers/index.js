import { MAKE_API_CALL, POPULATE_STORE_DATA } from '../actions'

const reducer = (state = {}, action) => {
    switch(action.type){
        case MAKE_API_CALL:
            return { ...state}
        case POPULATE_STORE_DATA:
            return {...state, weatherJSON : action.json.list}
        default:
            return state
    }
}

export default reducer