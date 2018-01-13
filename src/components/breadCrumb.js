import React,{Component} from 'react';
import BioDetails from './bioDetails';
var Breadcrumb = require('react-bootstrap').Breadcrumb;


class BreadCrumb extends Component {

		constructor(props){
			super(props);

			this.state={clicked:false};
		}

		render(){
			return(
			<div className='Bread-Crumb'>
				<Breadcrumb inverse>
		<Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
			Library
		</Breadcrumb.Item>
		<Breadcrumb.Item onClick={()=>(this.setState({clicked:true}))} href="#">Data</Breadcrumb.Item>
	</Breadcrumb>
			{this.state.clicked ? <BioDetails /> : null}
			</div>
				)
				}
				}

export default BreadCrumb;