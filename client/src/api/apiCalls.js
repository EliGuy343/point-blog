import {loginUser} from '../store/index';
import axios from 'axios';

export const loginApi = async (dispatch, user) => {
  try {
    const res = await axios.post('http://localhost:8000/api/user/login', user);
    console.log(res);
    dispatch(loginUser(res.data));
  }
  catch (err) {
    console.log(err);
  }
}