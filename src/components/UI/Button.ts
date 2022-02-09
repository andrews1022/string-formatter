import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.glacier};
	border: none;
	color: ${({ theme }) => theme.shades.white};
	cursor: pointer;
	font-size: 1rem;
	overflow: hidden;
	padding: 0.625rem 1.5rem;
	position: relative;
	text-transform: uppercase;
	transition: all 175ms ease-in-out;

	&:disabled {
		opacity: 0.5;
		cursor: default;
	}

	&:not(:disabled) {
		@media (hover) {
			&:hover {
				background-color: ${({ theme }) => theme.colors.tolopea};
			}
		}
	}
`;
