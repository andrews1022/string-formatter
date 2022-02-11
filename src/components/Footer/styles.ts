import styled from 'styled-components';

export const Footer = styled.footer`
	a {
		margin: 0 0.375%;
		transition: all 175ms ease-in-out;

		@media (hover) {
			&:hover,
			&:active,
			&:focus {
				opacity: 0.66;
			}
		}
	}
`;

export const IconRow = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		margin-top: 1%;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		margin-top: 2.25%;
	}
`;
