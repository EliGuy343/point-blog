import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Authenticator from './components/Authenticator';
import BlogDetail from './components/BlogDetail';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserBlogs from './components/UserBlogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Authenticator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<UserBlogs/>}/>
        <Route path='/blogs/stats/:id' element={<BlogDetail/>} />
        <Route path='/blogs/add' element={<AddBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
