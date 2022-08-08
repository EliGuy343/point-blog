import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/BlogDetail';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Login from './components/Login';
import UserBlogs from './components/UserBlogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/myblogs' element={<UserBlogs/>}/>
        <Route path='/blogs/:id' element={<BlogDetail/>} />
        <Route path='/blogs/add' element={<AddBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
