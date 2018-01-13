import React from 'react';
var Button = require('react-Bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var DropdownButton = require('react-bootstrap').DropdownButton;
var Row = require('react-bootstrap').Row
var MenuItem = require('react-bootstrap').MenuItem;

const DataSection =() => {

	return(

		<div className="wellStyles" >
		<Button  bsSize="large" block>
			Service
		</Button>
		<Button bsSize="large" block>
			System
		</Button>

		<DropdownButton >
			<MenuItem eventKey="1">10 days</MenuItem>
			<MenuItem eventKey="2">20 days</MenuItem>
			<MenuItem eventKey="3" active>
				30 days
			</MenuItem>
			<MenuItem divider />
			<MenuItem eventKey="4">40 days</MenuItem>
		</DropdownButton>

		<Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Recalculating Hash, Init System</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Updated System records...</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Forking the system records..</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Initiating backup..</span>
                                    </Row>
                                    <hr/>
	</div>
		)
}

export default DataSection;