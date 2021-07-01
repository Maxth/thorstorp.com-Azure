
import { Link } from 'react-router-dom'
import './portfolio.css'

const Portfolio = ({ isViewing, setIsViewing }) => {




    return (
        

            <main className="portfolio-wrapper">
                <header>
                    <div className="portfolio-triangle">{isViewing ? <Link to="/portfolio"><i onClick={() => setIsViewing(false)} className="fas fa-2x portfolio-go-back fa-level-up-alt"></i></Link> : ''}</div>
                </header>
                <nav className="portfolio-links">
                    <div className="portfolio-linkswrapper">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <span className="CV-links-span">Back to intro</span>
                        </Link>
                        <Link to="/CV" style={{ textDecoration: 'none' }}>
                            <span className="CV-links-span">My CV</span>
                        </Link></div>
                </nav>




            </main>




        
    )
}

export default Portfolio
