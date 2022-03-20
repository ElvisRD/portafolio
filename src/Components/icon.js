import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function icon({href, icon, classA}){
    return(
        
        <a href={href} className={classA} target="_blank" rel="noreferrer"><FontAwesomeIcon  icon={icon} /> </a>
    )
}

export default icon;