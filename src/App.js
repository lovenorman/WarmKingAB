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
  
  return (
    <div>
      <Header activePage={activePage} onPageMenuClick={changeActivePage} />
      <Main activePage={activePage}/>
      <Footer/>
    </div>
  );
}

export default App;
