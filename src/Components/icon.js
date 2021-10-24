import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function icon({href, icon}){
    return(
        
        
        <FontAwesomeIcon href={href} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white cursor-pointer mr-10" icon={icon} /> 

    )
}

export default icon;