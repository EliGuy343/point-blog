import {loginUser} from '../store/index';
import axios from 'axios';

export const loginApi = async (dispatch, user) => {
  try {
    const res = await axios.post('http://localhost:8000/api/user/login', user);
    dispatch(loginUser(res.data));
  }
  catch (err) {
    console.log(err);
  }
}

export const registerApi = async (register) => {
  try {
    const res = await axios.post(
      'http://localhost:8000/api/user/signup', register);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}