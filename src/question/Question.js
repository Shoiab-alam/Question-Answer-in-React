import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const Question = (props) => {
    const [show, setShow] = useState(false)
    return(
        <>
        <div className="bg-slate-200 mb-5 p-2 relative">
        <h1 className="text-1xl">
        <Button style={{fontSize:'16px',background: show ? 'green':'none',color: show? 'white':'black',marginRight:'15px'}} onClick={()=> setShow(!show)} variant="contained" size="large">
            {show? <i className="fa-solid fa-plus"/>: <i className="fa-solid fa-minus"></i>}
        </Button>
            {props.question}</h1>
       {show && <h2 className="ml-20"  style={{fontSize:'14px'}}><span className="absolute left-2">ANSWER-</span> {props.answer}</h2>}
       </div>
        </>
    )
}

export default Question;