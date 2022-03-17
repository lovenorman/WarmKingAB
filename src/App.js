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
    setNews(id)
    setActivePage('NewsDetails')
  }

  const [news, setNews] = useState(0)
  
  return (
    <div>
      <Header activePage={activePage} onPageMenuClick={changeActivePage} />
      <Main activePage={activePage} news={news} onDetailButtonClick={onDetailButtonClick}/>
      <Footer/>
    </div>
  );
}

export default App;
