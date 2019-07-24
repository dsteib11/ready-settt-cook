import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	background: transparent;
	font-size: 1.4rem;
	color: var(--mainDark);
	border: .1rem solid var(--mainDark);
	border-color: ${(props) => (props.cart ? 'var(--darkMaginta)' : 'var(--mainDark)')};
	color: ${(prop) => (prop.cart ? 'var(--darkMaginta)' : 'var(--mainDark)')};
	border-radius: .3rem;
	padding: .2rem .5rem;
	cursor: pointer;
	margin: .2rem .5rem .2rem 0;
	transition: all .5s ease-in-out;
	&:hover {
		background: ${(prop) => (prop.cart ? 'var(--darkMaginta)' : 'var(--mainDark)')};
		color: var(--mainWhite);
	}
	&:focus {
		outline: none;
	}
`;
