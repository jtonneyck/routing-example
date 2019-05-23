import React from 'react'

export default function UserDetail({location}) {
    debugger
    return (
        <div>
            <h1>{location.query.firstname} {location.query.lastname}</h1>    
            <p>{location.query.email}</p>       
        </div>
    )
}
