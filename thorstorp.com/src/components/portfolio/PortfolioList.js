import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioList = ({setIsViewing}) => {
    return (
        <div>
            <Link to="/portfolio/inkopslista">Inköpslista</Link>
            <br />
            <Link to="/portfolio/blogs">Blogs</Link>
            <Link to="/portfolio/admin-page">Admin page</Link>
        </div>
    )
}

export default PortfolioList
