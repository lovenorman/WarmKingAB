import React from 'react'
import { News } from './News'
import { NewsDetails } from './NewsDetails'

export const Home = (props) => {
  return (
    <News onDetailButtonClick={props.onDetailButtonClick}/>
  )
}
