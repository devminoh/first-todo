import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navs = ()=>{
    return (
        <Nav defaultActiveKey="/home" className="nav">
            <Nav.Link className="daily" href="/home">HOME</Nav.Link>
            <Nav.Link eventKey="link-1" href="/todo">TODO</Nav.Link>
            <Nav.Link eventKey="link-2">GOAL</Nav.Link> 
        </Nav>
    )
}

export default Navs;