import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
const FormGroup = require('react-bootstrap/lib/FormGroup');
const FormControl = require('react-bootstrap/lib/FormControl');
const Glyphicon = require('react-bootstrap/lib/Glyphicon');

class TextBar extends React.Component {

	constructor() {
		super();
		this.state = {
			value: ''
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		return (
				<FormGroup controlId="searchBar">
					<FormControl
						type="text"
						placeholder="Search"
						onchange="this.handleChange"
						/>
					<FormControl.Feedback>
						<Glyphicon glyph="search" />
					</FormControl.Feedback>
				</FormGroup>
		);
	}
}

module.exports = TextBar;
