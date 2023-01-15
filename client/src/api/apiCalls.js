import {loginUser, authUser} from '../store/index';
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
    dispatch(authUser(res.data));
  }
  catch (err) {
    console.log(err);
    localStorage.removeItem('token');
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

export const getBlogsByUserApi = async (id,page) => {
  try {
    const res = await axios.get(`/api/blog/user/${id}?page=${page}`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
}

export const getBlogByIdApi = async (id) => {
  try {
    const res = await axios.get(`/api/blog/${id}`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
}

export const addBlogApi = async (token, blog) => {
  try {
    const res = await axios.post(`/api/blog`,
      blog,
      {
        headers:{
          token:'bearer '+token
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const editBlogApi = async (token, id, blog) => {
  try {
    const res = await axios.put(`/api/blog/edit/${id}`,
      blog,
      {
        headers:{
          token:'bearer '+token
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
export const deleteBlogApi = async (token, id) => {
  try {
    const res = await axios.delete(`/api/blog/delete/${id}`,
      {
        headers:{
          token:'bearer '+token
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const addCommentApi = async (token, id, comment) => {
  try {
    const res = await axios.post(`/api/comments/${id}`,
    comment,
    {
      headers:{
        token:'bearer '+token
      }
    }
  );
  return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const getCommentsApi = async (blogId, limit) => {
  try {
    const res = await axios.get(`/api/comments/${blogId}?amount=${limit}`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
}
