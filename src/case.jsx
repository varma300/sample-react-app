import React, { useState } from "react";
import Header from './heder'
import './case.css'




const Change = ()=> {

    
    const [darkMode, setDarkMode] = useState(false);
    const [cur, tobe]=useState("")
    const [cu, l] = useState(0)
    const [wr,wcunt]=useState(0)
    
    function DarkMode() {
        setDarkMode(!darkMode);
      }

const cont = (e)=>{
    const x = e.target.value;
     tobe(x);
     l(x.split(" ").join("").length)
     wcunt(x.trim().split(/\s+/).length)
}

const upp = ()=> {
    tobe (cur.toUpperCase())
}

const low = ()=> {
    tobe (cur.toLowerCase())
}

return(
        
        <div className={darkMode ? 'dark':'lite'} id="div_id">
        <textarea onChange={cont} className="cls"  value={cur} />
        <br/>
        
        <button onClick={upp} className="btn">To Upper Case</button>

        <button onClick={low} className="btn">To Lower Case</button>
        <p>length {cu}</p>
        <p>words {wr}</p>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <button onClick={DarkMode} className="btn">{darkMode ? 'Light mode' : 'Dark mode'}</button>
        </div>
        
        
        )
}

export default Change;





