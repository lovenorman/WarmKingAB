import React from 'react'
import { Contact } from './Contact'
import { Home } from './Home'
import { Privacy } from './Privacy'
import { Products } from './Products'

//Constanten main tilldelas en funktion som returnar följande
export const Main = (props) => {
  return (
    <main>
        {props.activePage == 'Home' && <Home/>  }
        {props.activePage == 'Products' && <Products/>}
        {props.activePage == 'Contact' && <Contact/>}
        {props.activePage == 'Privacy' && <Privacy/>}
    </main>
  )
}
