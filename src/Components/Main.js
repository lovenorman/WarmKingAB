import React from 'react'
import { Contact } from './Contact'
import { Home } from './Home'
import { NewsDetails } from './NewsDetails'
import { Privacy } from './Privacy'
import { Products } from './Products'

//Constanten main tilldelas en funktion som returnar följande
export const Main = (props) => {
  return (
    <main>
        {props.activePage == 'Home' && <Home onDetailButtonClick={props.onDetailButtonClick}/>  }
        {props.activePage == 'Products' && <Products onDetailButtonClick={props.onDetailButtonClick}/>}
        {props.activePage == 'Contact' && <Contact onDetailButtonClick={props.onDetailButtonClick}/>}
        {props.activePage == 'Privacy' && <Privacy onDetailButtonClick={props.onDetailButtonClick}/>}
        {props.activePage == 'NewsDetails' && <NewsDetails id={props.id} onDetailButtonClick={props.onDetailButtonClick}/>}
        
    </main>
  )
}
