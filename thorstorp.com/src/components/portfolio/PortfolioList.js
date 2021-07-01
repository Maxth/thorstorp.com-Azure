import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioList = ({setIsViewing}) => {
    return (
        <div>
            <Link onClick={()=> setIsViewing(true)} to="/portfolio/inkopslista">Inköpslista</Link>
            <br />
            <Link onClick={()=> setIsViewing(true)} to="/portfolio/blogs">Blogs</Link>
        </div>
    )
}

export default PortfolioList
