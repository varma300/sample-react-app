import React, { useState } from "react";

const Change = ()=> {

    const [cur, tobe]=useState("")
    const [cu, l] = useState(0)
    const [wr,wcunt]=useState(0)


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
        <div>
        <textarea onChange={cont} className="ip"  value={cur} />
        <br/>
        <button onClick={upp} className="btn">To Upper Case</button>

        <button onClick={low} className="btn">To Lower Case</button>
        <p>length {cu}</p>
        <p>words {wr}</p
        >
        </div>
        )
}

export default Change;