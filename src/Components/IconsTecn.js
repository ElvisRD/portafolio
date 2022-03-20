import React from 'react'

export default function IconsTecn(props){
    return(
        <div className="flex w-6/12 justify-between mt-4">
                <i class={props.class} style={{fontSize: "3.5rem"}}></i>
                <p className={props.pClass} font-Text>{props.text}</p>
        </div>
    )
}