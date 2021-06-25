import * as PageActionTypes from './pageActions'

const initialState = {
    pageToRender: undefined,
    error: null
}

const renderViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case PageActionTypes.TOGGLE_PAGE_BEGIN:
            return {
                ...state,
                error: null
            }
        case PageActionTypes.TOGGLE_PAGE_SUCCESS:
            return {
                ...state,
                pageToRender: action.payload.selectedPage
            }
        case PageActionTypes.TOGGLE_PAGE_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default renderViewReducer
