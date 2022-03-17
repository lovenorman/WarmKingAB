import React from 'react'

export const NewsDetailButton = (props) => {

    const IWasClicked = () =>{
      console.log(props.news);
        props.onDetailButtonClick(props.news)
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
