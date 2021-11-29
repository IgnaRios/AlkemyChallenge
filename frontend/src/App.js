import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import EntryList from './Components/Entrys/EntryList';
import './App.css';

function App() {

  const [ fetching, setFetching] = useState(false);

  return (
    <>
      <Header 
        fetching={setFetching} 
        setFetching={setFetching}
      />
      <Form fetching={setFetching} setFetching={setFetching}/>
      
      <EntryList 
        fetching={setFetching} 
        setFetching={setFetching}
      />
    </>
  );
}

export default App;
