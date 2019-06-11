import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
    let tab= ["Home","Liste","Details","Contact","UserProfile","Basket"]


    return (
        <div>
            <Navbar  bg="#f7f7f7" expand="lg">
                <Navbar.Brand href="#home">Generic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                    { 
                        tab.map ((element) => 
                        (
                           <Nav.Link>
                               <Link to = {`/${element}`} style = {{textDecoration: "none"}}>
                               {element}
                               </Link>
                           </Nav.Link>
                        ))
                    }
                      
                    </Nav>
                    <Form inline style = {{marginRight: "300px"}}>
                        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
                        <Button  style={{backgroundColor:'#FB3B49',border:'white'}}>Rechercher</Button>
                    </Form>
                    <Form inline >
                        <Button style= {{backgroundColor: "#FB3B49", border:'white', marginRight: "10px"}}>Register</Button>
                        <Button style= {{backgroundColor: "#FB3B49", border:'white'}} >Login</Button>
                        
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
