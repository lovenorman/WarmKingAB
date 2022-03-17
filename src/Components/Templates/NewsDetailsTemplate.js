import React from 'react'
import { NewsDetailButton } from '../NewsDetailButton'

export const NewsTemplate = (props) => {
  return (
    <div className='newsArea'>
        <h1>Nyheter</h1>
    
    
    <header className='newsHeader'>
        <h3 className='newsheading'>{props.news.title}</h3>
        <h3 className='date'>{props.news.date}</h3>
    </header>
    <main className='newsContainer'>
        <p className='newsText'>{props.news.longtext}
        </p>
        <div>
            <ul className='backToHomeButton'>
                <HeaderMenuItem text="Home"  onPageMenuClick={props.onPageMenuClick}  activePage={props.activePage} /> 
            </ul>
        </div>
    </main>
    </div>
  )
}