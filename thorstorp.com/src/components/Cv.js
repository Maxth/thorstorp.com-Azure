import React from 'react'
import './cv.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Cv = () => {

   

    useEffect(()=>{
        const downArrow = document.querySelector('.dropdown-arrow');
        const upArrow = document.querySelector('.up-arrow');
        upArrow.classList.add('display-none');
        downArrow.classList.add('arrow-down-anim');
    },[])
    
    
    
    
    const handleDropDownClick = ()=> {
       const eduDropdown = document.querySelector('.edu-dropdown');
       const downArrow = document.querySelector('.dropdown-arrow');
       const upArrow = document.querySelector('.up-arrow');
        eduDropdown.classList.toggle('edu-down-anim');
         eduDropdown.classList.toggle('height');
       
       downArrow.classList.toggle('display-none');
        upArrow.classList.toggle('display-none');
    downArrow.classList.toggle('arrow-down-anim');
    

    }





    return (
        <div>
            <main className="CV-wrapper">
        <header>
            <div className="CV-triangle"></div>
        </header>
        <nav className="CV-links">
            <div className="linkswrapper">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <span className="CV-links-span">Back to intro</span>
                </Link> 
                <Link to="/portfolio" style={{textDecoration: 'none'}}>
                        <span className="CV-links-span">My portfolio</span>
                </Link>
            </div>
        </nav>
        <section>
            <div className="about-wrapper">
                <strong className="CV-strong">About me</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis quidem eveniet, fugit, nam
                    tempore vitae facilis, corrupti rem asperiores non a sapiente. Atque, quod repellat necessitatibus,
                    vel minus dolor, consectetur unde dolorem cupiditate illo quibusdam hic labore dolores assumenda ad
                    non est placeat autem laudantium. Soluta error quaerat et!</p>
            </div>
        </section>

        <section>
            <div className="desc-wrapper">
                <strong className="CV-strong">My education</strong>
                <p className="CV-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dolor nostrum, eos qui deleniti
                    repellat id earum rerum incidunt. Similique velit sequi soluta iste. Sapiente qui praesentium fugit
                    optio tempora.</p>
                <span className="sub-header">Lexicon programming continuation course <br/><small>Feb 2021 - July
                        2021</small></span>
                <p className="CV-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minus quibusdam impedit reprehenderit
                    reiciendis enim, temporibus est pariatur soluta placeat.</p>
                <span className="sub-header">Stockholm School of Economics / Stockholm University<br/><small>2009 -
                        2016</small></span>
                <p className="CV-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque atque hic autem error recusandae
                    explicabo alias minus sunt quos nemo!</p>
                <div className="dropdown" onClick={handleDropDownClick}><i className="fas up-arrow fa-2x fa-caret-up"></i><i
                        className="fas fa-2x fa-caret-down dropdown-arrow"></i><small>Earlier education</small></div>

                <div className="edu-dropdown">
                    <span className="sub-header">Royal Institute of Technology<br/><small>2006 -
                            2007</small></span>
                    <p className="CV-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque at maxime
                        fugiat? Omnis, perspiciatis eum modi magni adipisci a.</p>
                    <span className="sub-header">Rodengymnasiet<br/><small>2002 - 2004, 2005 -
                            2006</small></span>
                    <p className="CV-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
                        repellendus quis itaque cupiditate porro?</p>

                    <span className="sub-header">The McCallie School<br/><small>2004 - 2005</small></span>
                    <p className="CV-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, vero
                        corrupti eveniet rem placeat ipsum.</p>
                </div>
            </div>

        </section>
        <section>
            <div className="desc-wrapper">
                <strong className="CV-strong">My work experience</strong>
                <p className="CV-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa, animi aut molestias unde totam reiciendis cum? Veniam, rerum optio.</p>
                <span className="sub-header">Ellevio<br/><small>June 2015 - Dec 2016</small></span>
                <p className="CV-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nesciunt molestiae molestias, similique voluptatibus consequatur reprehenderit natus aliquid. Expedita voluptatem officia ratione minima atque ipsa!</p>
                <span className="sub-header">American Embassy<br/><small>Jan - July 2009, June - Aug 2010</small></span>
                <p className="CV-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nesciunt molestiae molestias, similique voluptatibus consequatur reprehenderit natus aliquid. Expedita voluptatem officia ratione minima atque ipsa!</p>
                <span className="sub-header">Earlier work experience<br/><small></small></span>
                <p className="CV-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nesciunt molestiae molestias, similique voluptatibus consequatur reprehenderit natus aliquid. Expedita voluptatem officia ratione minima atque ipsa!</p>
            </div>
        </section>
    </main>
        </div>
    )
}

export default Cv
