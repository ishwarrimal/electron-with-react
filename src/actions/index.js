// action types
export const MAKE_API_CALL = 'MAKE_API_CALL'
export const POPULATE_STORE_DATA = 'POPULATE_STORE_DATA'


// action creators
export const makeAPICall = url => {
    return {type: MAKE_API_CALL, payload: url}
}
