import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<section class="showcase">
				<div className="showcase-content">
					<div className="container">
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
								exceptionally affordable pieces that allow anyone to build a beautiful kitchen set at a
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

const MainTitle = styled.div`
	.home-title {
		padding: 50px 0;
	}
	.title {
		color: var(--mainWhite);
	}
	.title strong {
		border-bottom: .2rem solid var(--mainDark);
	}
`;
