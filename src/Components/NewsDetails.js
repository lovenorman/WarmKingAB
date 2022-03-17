import React from 'react'
import  {NewsDetailsTemplate} from "./Templates/NewsDetailsTemplate"


export const NewsDetails = (props) => {
  return (
    <div>
      <NewsDetailsTemplate news={props.news}/>
    </div>
  )
}
