import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Intern = (props) => {

    const [intern, setIntern] = useState({})

    useEffect(()=> {
        const id = props.match.params.id
        const url = `/api/v1/interns/${id}`

        axios.get(url)
        .then( resp => setIntern(resp.data) )
        .catch( resp => console.log(resp) )    

    }, [])

    return (
        <div className="wraper">
            <div className= "column">
                <div className="header"></div>
                <div className="summary"></div>
            </div>
            <div className="form">[Form goes here]</div>
        </div>
    )
}

export default Intern
