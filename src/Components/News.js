import React from 'react'
import { NewsDetailButton } from './NewsDetailButton'

export const News = () => {
  return (
    <div className='newsArea'>
        <h1>Nyheter</h1>
    
    
        <header className='newsHeader'>
            <h3 className='newsheading'>Lorem</h3>
            <span className='date'>2022-03-15</span>
        </header>
        <main className='newsContainer'>
            <p className='newsText'>Lorem blalkjfkljgkjahgkjahgkjahgkahgkjahgkjahkjgahkjghakjghjkhgkjshgkjshgkjsgkjsgkjsgkjsdghskjhgskjhfkjshgkjshgkjhjks
            </p>
            <div>
                <ul className='detailButton'>
                    <NewsDetailButton/>
                </ul>
            </div>
            
        </main>
    </div>
  )
}
