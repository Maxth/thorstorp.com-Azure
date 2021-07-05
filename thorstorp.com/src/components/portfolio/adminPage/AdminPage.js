import React, {useEffect} from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

const AdminPage = ({setIsViewing}) => {

    useEffect(()=>{
        setIsViewing(true);
        return ()=>setIsViewing(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])


    return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path="/portfolio/admin-page">
                        <Login/>
                    </Route>
                    <Route exact path="/portfolio/admin-page/dashboard">
                        <Dashboard/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AdminPage
