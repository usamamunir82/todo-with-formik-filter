

import React, { useState  } from "react";
import UpdateContext from "./updateContext";


const UpdateState=(props)=>{

    const [state, setstate] = useState(null)

  


    return ( 
    <UpdateContext.Provider value={{state:state , setstate : setstate}} >
        {props.children}
    </UpdateContext.Provider>
    )
}
export default UpdateState;