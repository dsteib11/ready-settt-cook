import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<i className="navbar-brand fas fa-fire-alt" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/products" className="nav-link">
							products
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: transparent;
	border-bottom: .5px solid var(--mainDark);
	.navbar-brand {
		color: var(--mainDark);
		font-size: 1.5rem;
	}
	.navbar-brand:hover {
		color: var(--darkMaginta);
		transition: all .3s ease-in-out;
	}
	.nav-link {
		color: var(--mainDark) !important;
		text-transform: capitalize;
		font-size: 1.3rem;
		font-weight: 500;
	}
	.nav-link:hover {
		color: var(--darkMaginta) !important;
		transition: all .3s ease-in-out !important;
	}
`;
