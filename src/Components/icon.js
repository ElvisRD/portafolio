import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function icon({href, icon, classA}){
    return(
        
        <a href={href} className={classA} target="_blank" rel="noreferrer"><FontAwesomeIcon  className="block  w-full h-full lg:inline-block lg:mt-0 text-white hover:text-white cursor-pointer" icon={icon} /> </a>
    )
}

export default icon;