import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddForm from './components/AddFrom/AddForm';
import ToDoApp from './containers/ToDoApp/ToDoApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ToDoApp/>}/>
          <Route path='/add-form' element={<AddForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
