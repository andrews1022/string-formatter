import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.shades.white};
	box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 15%);
	border-radius: 1rem;
	padding: 1.5% 2%;
	width: 75%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		padding: 5% 5% 2% 5%;
		width: 85%;
	}
`;
