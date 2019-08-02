import React, { Component } from 'react';
import Title from '../components/Title';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Home extends Component {
	render() {
		return (
			<section class="showcase">
				<div className="showcase-content">
					<Title name="ready settt" title="cook" />
					<div className="showcase-info">
						<p>cookware for all sets</p>
						<Link to="/products">
							<ButtonContainer>
								<div class="btn btn-xl px-5 text-uppercase">
									let's shop
									<i className="fas fa-chevron-right btn-icon px-3" />
								</div>
							</ButtonContainer>
						</Link>
					</div>
				</div>
				{/* <Title name="readysettt" title="cook" />
				<div id="home" class="container-fluid text-center dark-background home-pad jumbotron">
					<h1>welcome home</h1>
				</div> */}
			</section>
		);
	}
}
