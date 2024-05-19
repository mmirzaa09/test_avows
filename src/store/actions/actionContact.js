import axios from 'axios';
import { ContactTypes } from '../../resources/TypeReducer';

export const getListContact = () => (dispatch) => new Promise(async(resolve) => {
    dispatch({ type: ContactTypes.GET_CONTACT, listContact: [] });
    await axios.get('https://contact.herokuapp.com/contact')
    .then((res) => {
        const response = res.data.data;
        dispatch({
            type: ContactTypes.GET_CONTACT,
            payload: response
        });
        resolve(response);
    }).catch((err) => {
        console.log('error', err);
    })
})