export const TOGGLE_PAGE_BEGIN = 'TOGGLE_PAGE_BEGIN'
export const TOGGLE_PAGE_SUCCESS = 'TOGGLE_PAGE_SUCCESS'
export const TOGGLE_PAGE_FAILURE = 'TOGGLE_PAGE_FAILURE'

export const togglePageBegin = () => ({
    type: TOGGLE_PAGE_BEGIN
})

export const togglePageSuccess = (selectedPage) => ({
    type: TOGGLE_PAGE_SUCCESS,
    payload: {selectedPage}
})

export const togglePageFailure = error => ({
    type: TOGGLE_PAGE_FAILURE,
    payload: {error}
})

export function togglePage(themeType) {
    return dispatch => {
        dispatch(togglePageBegin())
        if (themeType){
            dispatch(togglePageSuccess(themeType))
        }else {
            dispatch(togglePageFailure({error: "Invalid Page Type"}))
        }

    }
}
