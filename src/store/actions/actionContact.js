import axios from 'axios';
import { ContactTypes } from '../../resources/TypeReducer';

const API = 'https://contact.herokuapp.com/contact';

export const getListContact = () => (dispatch) => new Promise(async(resolve) => {
    dispatch({ type: ContactTypes.GET_CONTACT, listContact: [] });
    await axios.get(API)
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
});

export const deleteContact = (id) => (dispatch) => new Promise(async() => {
    dispatch({ type: ContactTypes.DELETE_CONTACT, message: '' });
    await axios.delete(API + `/${id}`)
    .then((res) => {
        const response = res.data.data;
        dispatch({ 
            type: ContactTypes.DELETE_CONTACT, 
            payload: response 
        });
    }).catch((err) => {
        dispatch({ 
            type: ContactTypes.ERROR_TYPE, 
            payload: err
        });
    })
})