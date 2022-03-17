import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';

function App() {

  const [activePage, setActivePage] = useState('Home')//Home=default

  const changeActivePage =(newPage) =>{
    setActivePage(newPage)
  }

  const onDetailButtonClick =(id) =>{
    setActivePage('NewsDetails')
    setId(id)
  }

  const [id, setId] = useState(0)
  
  return (
    <div>
      <Header activePage={activePage} onPageMenuClick={changeActivePage} />
      <Main activePage={activePage} id={id} onDetailButtonClick={onDetailButtonClick}/>
      <Footer/>
    </div>
  );
}

export default App;
