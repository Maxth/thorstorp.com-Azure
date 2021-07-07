import React from 'react'
import { Link } from 'react-router-dom'
import './portfoliolist.css'

const PortfolioList = () => {
    return (
        <div className="portfoliolist-wrapper">

            <div className="portfoliolist-container">
                <Link style={{ textDecoration: 'none' }} to="/portfolio/admin-page"><h2 className="portfoliolist-header font-graphik-bold">Admin page</h2></Link>
                <p className="font-graphik-regular">This project was intended to simulate an admin center where a logged in admin can
                 manage the users of a system. It is connected to a free noSQL database cluster (MongoDB) so changes made are permanent across devices. The API is documented using Open</p>
                <br />
                <Link style={{ textDecoration: 'none' }} to="/portfolio/blogs"><h2 className="portfoliolist-header font-graphik-bold">Blogs</h2></Link>
                <p className="font-graphik-regular">This is a page where the user can write a blog post and read other blogs. It fetches 100 mock blogs from jsonplaceholder.typicode.com. Apart from the fetch it has no backend connection so any posts are reset on refresh.</p>
                <br />
                <Link style={{ textDecoration: 'none' }} to="/portfolio/inkopslista"><h2 className="portfoliolist-header font-graphik-bold">Inköpslista</h2></Link>
                <p className="font-graphik-regular">This is a shoppinglist application. Add, change, delete or regret. No backend connection.</p>



            </div>
        </div>
    )
}

export default PortfolioList
