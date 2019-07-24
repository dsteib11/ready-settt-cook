import React, { Component } from 'react';
import Title from '../components/Title';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Title name="readysettt" title="cook" />
				<div id="home" class="container-fluid text-center dark-background home-pad jumbotron">
					<h1>welcome home</h1>
				</div>
			</section>
		);
	}
}
