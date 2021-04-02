import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function CopyClipBoard(props) {

    const [label, setlabel] = useState("Copy")

    const Copied=()=>{
        if(label!=="Copied"){

            setlabel('Copied')
            setTimeout(()=>{
                setlabel('Copy')
            },3000)

        }
    }

    return (
        <div>
            <CopyToClipboard text={props.text}>
                <div className={`CopyIcon ${label=="Copied" && "CopyClicked"}`} onClick={()=>Copied()}>{label}</div>
            </CopyToClipboard>
        </div>
    )
}
