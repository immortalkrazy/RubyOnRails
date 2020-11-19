import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Intern from './Intern'
import styled from 'styled-components'

const Home = styled.div`
    background-color: #F0E68C;
    text-align: center;
    max-width: 1200;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 10px 10px 10px;

    h1 {
        font-size: 80px;
        color: #32CD32
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 36;
    color: #FF0000
`
const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 20px;
   width 100%;
   padding: 20px;
`

const Interns = () => {
    const [interns, setInterns] = useState([])

    useEffect(()=> {

        axios.get('/api/v1/interns.json')
        .then( resp => setInterns(resp.data.data))
        .catch( resp => console.log(resp) )
    }, [interns.length])

    const grid = interns.map( item => {
        return (
            <Intern
                key={item.attributes.id}
                attributes={item.attributes}
            />
        )
    })

    return (
        <Fragment>
            <Home>
                <Header>
                    <h1>
                        INTURTLE
                    </h1>
                    <Subheader>
                        <h2>BROOKLYN COLLEGE</h2>
                        <h3>---Student Help---</h3>
                    </Subheader>
                </Header>
            </Home>
            <Grid>
                {grid}
            </Grid>
        </Fragment>
    )
}

export default Interns

