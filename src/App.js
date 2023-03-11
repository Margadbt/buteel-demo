import Home from './pages/Home'
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Nav from './components/Nav';
import Category from './pages/Category';

function App() {
  return (
    <div className='w-9/12 mx-auto my-8'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:bookId' element={<Book />} />
        <Route path='/category' element={<Category />} />
      </Routes>

      
    </div>
  );
}

export default App;
