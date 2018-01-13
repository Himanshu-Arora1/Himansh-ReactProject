import React,{Component} from 'react';
import TextBar from './textBar'
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Button = require('react-bootstrap').Button;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

class SearchBar extends Component {
	render(){
		return(
				        <Navbar fluid inverse>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#home">Lab</a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse>

                                <Navbar.Form pullLeft>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Search" />
                                    </FormGroup>{' '}
                                </Navbar.Form>

                                <Nav pullRight> 
                                    <NavItem eventKey={1} href="#">
                                    <Glyphicon glyph='glyphicon glyphicon-question-sign' />
                                    </NavItem>
                                    <NavItem eventKey={2} href="#">
                                    <Glyphicon glyph='bell' />
                                    </NavItem>
                                      <NavDropdown eventKey={3} title="Himanshu" id="basic-nav-dropdown">
                                    <span class= 'glyphicon glyphicon-user' > </span>
                                    <MenuItem eventKey={3.1}>Profile </MenuItem>
                                    <MenuItem divider />
                                        <MenuItem eventKey={3.4}>Details</MenuItem>
                                    </NavDropdown>
        
                                </Nav> 

                            </Navbar.Collapse>
                        </Navbar>

			)
	}

}

export default SearchBar;