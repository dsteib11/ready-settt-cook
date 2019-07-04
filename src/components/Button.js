import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	background: transparent;
	font-size: 1.4rem;
	color: var(--mainWhite);
	border: .05rem solid var(--lightMagenta);
	border-radius: .3rem;
	padding: .2rem .5rem;
	cursor: pointer;
	margin: .2rem .5rem .2rem 0;
	transition: all .5s ease-in-out;
	&:hover {
		background: var(--darkMaginta);
	}
	&:focus {
		outline: none;
	}
`;
