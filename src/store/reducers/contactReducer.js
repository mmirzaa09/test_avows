import { ContactTypes } from "../../resources/TypeReducer";

const initialState = {
    listContact: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ContactTypes.GET_CONTACT:
            return {
                listContact: action.payload
            }
        default:
            return state;
    }
};

export default contactReducer;