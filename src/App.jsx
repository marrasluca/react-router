import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostsList from './pages/postslist';
import AboutUs from './pages/aboutUs';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/posts-list' element={<PostsList />} />
          </Route>
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
