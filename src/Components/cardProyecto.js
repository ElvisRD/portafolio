import React from 'react'


export default function cardProyecto(props){
    return(
       
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href="#">
                <img class="rounded-t-lg" src={props.imagen} alt="" />
                <hr/>
            </a> 
            <div class="p-4">
                <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black font-Title">{props.nombre}</h5>
                </div>
                
                <div className='w-full h-24'>
                    <p class="mb-3 font-normal text-black font-Text">{props.descripcion}</p>
                </div>

                <div className='flex w-full mt-2 justify-evenly '>
                    <a href={props.linkWeb} target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Text"> Ver Página </a>
                    <a href={props.linkGit} target="_blank" rel="noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Text">  Ver Código </a>
                </div>
            </div>
        </div>

    
        
    )
}