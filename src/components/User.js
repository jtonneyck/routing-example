import React from 'react'
import {Link} from "react-router-dom"

export default function User({firstname, lastname, email}) {
    return (
        <Link to={{
                pathname: "/user-detail",
                query: {
                    firstname,
                    lastname,
                    email
                }
            }}
        >
            <div>
                <h1>{firstname} {lastname}</h1>
                <p>{email}</p>
            </div>
        </Link>

    )
}
