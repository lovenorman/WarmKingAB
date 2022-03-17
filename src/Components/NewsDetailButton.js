import React from 'react'

export const NewsDetailButton = (props) => {

    const IWasClicked = () =>{
        props.onDetailButtonClick(props.id)
    }
  return (
    <li>
        <a onClick={IWasClicked}//Funktion skapas i funktionen NewsDetailButton
        className='detailButton'
        href="#">
            { props.text }
        </a>
    </li>
  )
}
