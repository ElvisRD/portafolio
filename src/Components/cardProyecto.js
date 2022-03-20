import React from 'react'


export default function cardProyecto(props){
    return(
       
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href={props.linkWeb}>
                <img className="rounded-t-lg" src={props.imagen} alt="" />
                <hr/>
            </a> 
            <div className="p-4">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black font-Title">{props.nombre}</h5>
                </div>
                
                <div className='w-full h-24'>
                    <p className="mb-3 font-normal text-black font-Text">{props.descripcion}</p>
                </div>

                <div className='flex w-full mt-2 justify-evenly eliminarOutline'>
                    <a href={props.linkWeb} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Text"> Ver Página </a>
                    <a href={props.linkGit} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Text">  Ver Código </a>
                </div>
            </div>
        </div>

    
        
    )
}