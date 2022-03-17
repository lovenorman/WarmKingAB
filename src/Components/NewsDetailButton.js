import React from 'react'

export const NewsDetailButton = (props) => {

    const IWasClicked = () =>{
        props.onDetailButtonClick(props.text)
    }
  return (
    <li>
        <a onClick={IWasClicked}//Funktion skapas i funktionen NewsDetailButton
        className={`detailButton ${props.activePage == props.text ? 'active' : ''}`}
        href="#">
            { props.text }
        </a>
    </li>
  )
}
