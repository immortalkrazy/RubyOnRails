import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../../../assets/images/logo/turtle.png'

const Card = styled.div`
    text-align: center;
    border: 2px solid #efefef;
    background: #FDF5E6;
`
const InternLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    
    // width: 200px;
    // text-align: center;
    // margin-left: auto;
    // margin-right: auto;
    // color: #000;
    // background: #E0FFFF;
    // border-radius: 4px;
    // padding: 10px 50px;
    // border: 1px solid #000;
    // text-decoration: none;

    img {
        height: 50px;
        width: 50px;
        // border-radius: 100%;
        // border: 1px solid #000;
        // color: #00008B;
        max-height: 50px;

    }
`
const InternTitle = styled.div`
    padding: 50px 0 10px 0;
    width: 200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000;
    background: #E0FFFF;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    text-decoration: none;
`
const InternCompany = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWraper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width 100%;
        text-decoration: none;
    }
`

const Intern = (props) => {
    return (
        
        <Card>
            <InternLogo>
                {/* {props.attributes.id} */}
                {/* <img src={props.attributes.id} alt={props.attributes.company}/> */}
                {/* <img src = {"app/assets/images/logo/" + `${props.attributes.company}`+ ".png" } alt={props.attributes.company}/> */}
                <img src={logo} alt={props.attributes.company}/>
            </InternLogo>
            
            <InternTitle>
                {props.attributes.job_title}
            </InternTitle>

            <InternCompany>
                {props.attributes.company}
            </InternCompany>
            
            <LinkWraper>
                <Link to={`/interns/${props.attributes.id}`}>View Internship</Link>
            </LinkWraper>
        </Card>
    )
}

export default Intern
