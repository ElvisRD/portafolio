import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function navLink({nombre, href, className, onClick}){
    return(
        <AnchorLink href={href} onClick={onClick} className={className}>
            {nombre}
        </AnchorLink> 
    )

}

export default navLink;