import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'


export const NewsDetails = (props) => {
  return (
    <div className='newsArea'>
      <h1>Nyheter</h1>


      <header className='newsHeader'>
          <h3 className='newsheading'>{props.id}</h3>
          <h3 className='date'>2022-03-15</h3>
      </header>
      <main className='newsContainer'>
          <p className='newsText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea beatae cupiditate maxime repellendus cum ducimus rem repellat itaque a nesciunt architecto, ex voluptate expedita explicabo labore aliquam corrupti quisquam sunt ipsa sed voluptates commodi sequi id exercitationem. Numquam eaque ad quibusdam neque delectus nobis, deserunt laboriosam dolore error itaque aut?
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
