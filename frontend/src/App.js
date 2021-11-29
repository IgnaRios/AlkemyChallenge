import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import EntryList from './Components/Entrys/EntryList';
import './App.css';

function App() {


  return (
    <>
      <Header />
      <Form/>
      <EntryList />
    </>
  );
}

export default App;
