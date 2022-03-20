import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function navLink({nombre, href, className}){
    return(
        <AnchorLink href={href} className={className}>
            {nombre}
        </AnchorLink> 
    )

}

export default navLink;