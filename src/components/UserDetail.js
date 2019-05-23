import React from 'react'

export default function UserDetail({location}) {
    return (
        <div>
            <h1>This is a detailed overview of the student</h1>    
            <p>{location.query.firstname} {location.query.lastname}</p>    
            <p>{location.query.email}</p>       
        </div>
    )
}
