import React from 'react';
var form = require('react-bootstrap').form;
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Label = require('react-bootstrap').Label;
var Panel = require('react-bootstrap').Panel;

const BioDetails = () => {

		return(

			<div className='Bio-Details'> 
				<Panel>
			<Panel.Heading>Bio</Panel.Heading>
			<Panel.Body>	Equipment Details
				</Panel.Body>
			</Panel>
			
				<form inverse>
				<FormGroup
					controlId="formBasicText"
					bsSize='Lg'>
						<ControlLabel bsSize='Sm'>Serial #</ControlLabel>
						<FormControl
						type="text"
						placeholder="Enter text"
						bsSize='Sm'
						/>
						<ControlLabel bsSize='Sm'>Equipment Name</ControlLabel>
						<FormControl
						type="text"
						placeholder="Enter text"
						bsSize='Sm'
						/>
						<ControlLabel bsSize='Sm'>Vendor</ControlLabel>
						<FormControl
						type="text"
						placeholder="Enter text"
						bsSize='Sm'
						/>
						<ControlLabel bsSize='Sm'>Location</ControlLabel>
						<FormControl
						type="text"
						placeholder="Enter text"
						bsSize='Sm'
						/>
					
				</FormGroup>
			</form></div>
			
		)

}

export default BioDetails;