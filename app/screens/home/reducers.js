
import { SAVE_IMAGES, SAVE_AUTH_CODE, RESET_IMAGES } from "./constants";

const initialState = {
    images: [],
    authCode: ''
}

export default subreducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_IMAGES: {
            const { images } = action
            return {
                ...state,
                images: [...state.images, ...images ]
            }
        }
        case RESET_IMAGES: {
            const { images } = action
            return {
                ...state,
                images: []
            }
        }
        case SAVE_AUTH_CODE: {
            const { authCode } = action
            return {
                ...state,
                authCode
            }
        }
        default:
            return state;
    }
};