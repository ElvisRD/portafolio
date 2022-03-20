import React from 'react'

export default function IconsTecn(props){
    return(
        <div className="flex w-6/12 justify-between mt-4">
                <i className={props.className} style={{fontSize: "3.5rem"}}></i>
                <p className={props.pClass} >{props.text}</p>
        </div>
    )
}