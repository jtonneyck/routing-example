import React from 'react'
import {Route, Link} from "react-router-dom";
import Profile from '../components/Profile';
import Config from '../components/Config';
import Message from "../components/Message";
import "./dashboard.css"

function Dashboard({match, history}) {

    return (
        <div className="dashboard">
            
            <div className="side-bar">   
                <Link to={`${match.url}/profile`}>Profile</Link> 
                <Link to={`${match.url}/config`}>Config </Link>           
                <Link to={`${match.url}/message`}>Message </Link>           
            </div> 

            <div className="dashboard-view">
                <Route path={`${match.path}profile`} component={Profile} />
                <Route path={`${match.path}config`} component={Config} />
                <Route path={`${match.path}message`} component={Message} />
            </div>

        </div>
    )
}

export default  Dashboard
