import React from 'react'
import {NewsTemplate} from './Templates/NewsTemplate'

import { news } from './Data/NewsData'

export const News = () => {
  return (
    <div>
        {
            news.map((thenews,i)=> <NewsTemplate key={i} news={thenews} />)
        }
    </div>
  )
}
