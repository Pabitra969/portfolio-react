import React, { useState } from 'react'
import { clsx } from 'clsx';

const Header = () => {

  const [ToggleEvent, setToggleEvent] = useState(false);

  return (
    <div className="sticky top-0 bg-primary-50 flex justify-between items-center pt-10 pb-10 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 max-sm:pl-10 max-sm:pr-10 text-bluish max-h-4" >
      <div class="text-4xl font-bold" >Pabitra</div>
      <div class={clsx("sm:hidden", ToggleEvent)} id='hamburger-btn' onClick={() => setToggleEvent(!ToggleEvent)} >
        {ToggleEvent ?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" className='w-9 h-9' width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        }
      </div>
      {/* Navigation section */}
      <div
        className={clsx(
          "flex lg:gap-20 gap-10 text-[15px] transition-all duration-300",
          ToggleEvent ? "max-sm:flex flex-col items-center fixed inset-x-0 top-18 w-full h-screen bg-primary-50 p-5 rounded-2xl shadow-lg" : "max-sm:hidden"
        )}
      >
        <a href="#about" onClick={() => setToggleEvent(false)}>About</a>
        <a href="#project" onClick={() => setToggleEvent(false)}>Projects</a>
        <a href="#contact" onClick={() => setToggleEvent(false)}>Contact</a>
      </div>
    </div>
  )
}

export default Header