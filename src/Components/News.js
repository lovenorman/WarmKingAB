import React from 'react'
import {NewsTemplate} from './Templates/NewsTemplate'

import { news } from './Data/NewsData'

export const News = (props) => {
  return (
    <div>
      <h1 className="newsH1">Nyheter</h1>
        {
            news.map((thenews,i)=> <NewsTemplate onDetailButtonClick={props.onDetailButtonClick} key={i} news={thenews} />)
        }
    </div>
  )
}
