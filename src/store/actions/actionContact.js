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
    }).catch(() => {
        dispatch({ 
            type: ContactTypes.ERROR_TYPE, 
            payload: true
        });
    })
});

export const deleteContact = (id) => (dispatch) => new Promise(async(resolve, reject) => {
    dispatch({ type: ContactTypes.DELETE_CONTACT, message: '' });
    await axios.delete(API + `/${id}`)
    .then((res) => {
        const response = res.data.data;
        dispatch({ 
            type: ContactTypes.DELETE_CONTACT, 
            payload: response 
        });
        resolve(response)
    }).catch(() => {
        dispatch({ 
            type: ContactTypes.ERROR_DELETE, 
            payload: true
        });
        reject()
    });
});

export const postDataContact = (param) => (dispatch) => new Promise(async(resolve, reject) => {
    dispatch({ type: ContactTypes.ADD_CONTACT, message: ''});
    await axios.post(API, param)
    .then((res) => {
        const response = res.data
        dispatch({ 
            type: ContactTypes.ADD_CONTACT, 
            payload: response 
        });
        resolve();
    }).catch((err) => {
        dispatch({ 
            type: ContactTypes.ERROR_POST, 
            payload: true
        });
        reject();
    });
})