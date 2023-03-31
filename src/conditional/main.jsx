import React, { useState } from 'react'
import LoggedIn from './loggedIn'
import NotLogged from './notLogged'

const main = ({isLogggin}) => {
    const [inn,out]=useState(<LoggedIn/>);

    function check(){
        out(<NotLogge/>)
    }

  return (
    <div>
    <input type='text' value={inn}/>
    <button onClick={check} >check</button>
    </div>
  )
}

export default main