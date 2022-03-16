import React from 'react'

export const NewsDetailButton = (props) => {

    const IWasClicked = () =>{
        props.onDetailButtonClick()
    }
  return (
    <li>
        <a className='detailButton'></a>
    </li>
  )
}
