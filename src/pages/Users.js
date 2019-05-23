import React from 'react'
import students from "./students.json"
import Student from "../components/User"

export default function Users() {

    let studentCompnents = students.map(({firstname, lastname, email})=> 
        
        <Student firstname={firstname}
                 lastname={lastname}
                 email={email}
        />

    )
    return (
        <div>
            {studentCompnents}
        </div>
    )
}
