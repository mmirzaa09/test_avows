import { ContactTypes } from "../../resources/TypeReducer";

const initialState = {
    listContact: [],
    message: '',
    error: false
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ContactTypes.GET_CONTACT:
            return {
                listContact: action.payload
            }
        case ContactTypes.DELETE_CONTACT:
            return {
                message: action.payload
            }
        case ContactTypes.ADD_CONTACT:
            return {
                message: action.payload
            }
        case ContactTypes.EDIT_CONTACT_BY_ID:
            return {
                message: action.payload
            }
        case ContactTypes.ERROR_DELETE:
            return {
                error: action.payload
            }
        case ContactTypes.ERROR_POST:
            return {
                error: action.payload
            }
        case ContactTypes.ERROR_PUT:
            return {
                error: action.payload
            }
        default:
            return state;
    }
};

export default contactReducer;