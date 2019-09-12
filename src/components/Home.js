import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<section class="showcase">
				<PortfolioBtn>
					<div className="btn-bg">
						<div className="btn-circle">
							<a href="https://www.byyoucode.com">
								<i className="fas fa-chevron-circle-left" />
							</a>
							<div className="portfolio-title">portfolio</div>
						</div>
					</div>
				</PortfolioBtn>
				<div className="showcase-content">
					<MainTitle>
						<div className="col-10 mx-auto text-center home-title">
							<h1 className="text-capitalize font-weight-bold title">
								ready settt <strong>cook</strong>
							</h1>
						</div>
					</MainTitle>
					<div className="showcase-info">
						<h2>about the collection</h2>
						<p>
							Ready Settt Cook is our collection of the very best basics— well-curated, high-quality,
							exceptionally affordable pieces that allow anyone to build a beautiful kitchen sets at a
							price that’s accessible to all.
						</p>
						<Link to="/products">
							<HomeBtn>
								<button class="btn btn-xl px-5 py-3 text-uppercase">
									let's shop
									<i classNameName="fas fa-chevron-right btn-icon px-3" />
								</button>
							</HomeBtn>
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

const HomeBtn = styled.div`
	.btn {
		background: var(--mainWhite);
	}
	.btn:hover {
		background: var(--mainDark);
		color: var(--mainWhite);
		transition: all .3s ease-in-out;
	}
`;

const PortfolioBtn = styled.div`
	.btn-bg {
		position: absolute;
		top: 40px;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		width: 100px;
	}
	.btn-circle {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	a {
		text-align: center;
	}
	.btn-circle .fas {
		color: var(--mainWhite);
		font-size: 2.3rem;
	}
	.btn-circle .fas:hover {
		cursor: pointer;
		color: var(--darkMaginta);
		transition: all .3s ease-in-out;
	}
	.portfolio-title {
		position: relative;
		color: var(--mainWhite);
		text-align: center;
		font-size: .7rem;
		text-transform: uppercase;
		padding: 10px 0;
	}
`;

const MainTitle = styled.div`
	.home-title {
		padding: 50px 0;
	}
	.title {
		color: var(--mainWhite);
	}
	.title strong {
		color: var(--darkMaginta);
		/* border-bottom: .2rem solid var(--mainDark); */
	}
`;
