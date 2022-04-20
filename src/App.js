import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Members from './component/Members/Members';
import NotFound from './component/NotFound/NotFound';
import Posts from './component/Posts/Posts';
import PostsDetail from './component/PostsDetail/PostsDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/members' element={<Members/>}></Route>
        <Route path='/member/:memberId' element={<FriendDetail/>}></Route>
        <Route path='/posts' element={<Posts/>}>
          <Route path=':postsId' element={<PostsDetail></PostsDetail>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
