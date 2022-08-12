import {loginUser} from '../store/index';
import axios from 'axios';

export const loginApi = async (dispatch, user) => {
  try {
    const res = await axios.post('http://localhost:8000/api/user/login', user);
    dispatch(loginUser(res.data));
    localStorage.setItem('token', res.data.token);
  }
  catch (err) {
    console.log(err);
  }
}

export const authApi = async (dispatch, token) => {
  try {
    const res = await axios.get('http://localhost:8000/api/user/auth',{
      headers:{
        token:"bearer "+token
      }});
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

export const getBlogsApi = async (page) => {
  try {
    const res = await axios.get(`/api/blog?page=${page}`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
  
}