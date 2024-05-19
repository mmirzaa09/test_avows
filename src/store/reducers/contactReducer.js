import { ContactTypes } from "../../resources/TypeReducer";

const initialState = {
    listContact: [],
    message: '',
    messageError: ''
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
        case ContactTypes.ERROR_TYPE:
            return {
                messageError: action.payload
            }
        default:
            return state;
    }
};

export default contactReducer;