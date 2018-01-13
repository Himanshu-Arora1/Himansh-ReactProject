import React, { Component } from 'react';
import SearchBar from'./searchBar';
import BreadCrumb from './breadCrumb';
import DataSection from './data_Section';

export default class App extends Component {
  render() {
    return (
    	<div>
      			<SearchBar />
      			<BreadCrumb />
      			<DataSection />
      	</div>
    );
  }
}
