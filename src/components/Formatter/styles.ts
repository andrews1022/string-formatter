import styled, { css } from 'styled-components';

const baseLabelStyles = css`
	display: block;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1.4;
`;

export const FormatterWrapper = styled.div`
	margin: 3.5% 0;
	text-align: left;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		margin-top: 5%;
	}
`;

export const FormatterRow = styled.div`
	display: flex;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		flex-direction: column-reverse;
	}
`;

export const LeftBox = styled.div`
	flex: 0 0 70%;
	margin-right: 5%;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		margin-right: 0;
		width: 100%;
	}
`;

export const RightBox = styled.div`
	flex: 1;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		width: 100%;
	}
`;

export const OptionsHeading = styled.h2`
	${baseLabelStyles};
`;

export const FormatterGroup = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;

	&:first-of-type {
		margin-bottom: 4%;
	}
`;

export const FormatterLabel = styled.label`
	${baseLabelStyles};
`;

export const FormatterTextBox = styled.textarea`
	height: 10vw;
	width: 100%;
	resize: none;
	padding: 0.5rem;
	margin-bottom: 1%;
	font-size: 1.125rem;

	@media ${(props) => props.theme.mediaQueries.tabletLandscape} {
		height: 15vw;
	}
`;

export const FormatterButton = styled.button`
	background-color: ${(props) => props.theme.colors.glacier};
	border: none;
	color: ${(props) => props.theme.shades.white};
	font-size: 1rem;
	overflow: hidden;
	padding: 0.625rem 1.5rem;
	position: relative;
	text-transform: uppercase;
	transition: all 175ms ease-in-out;
`;

export const FormattingOptionsList = styled.ul``;

export const FormattingOptionsItem = styled.li`
	display: flex;
	align-items: baseline;

	&:not(:last-of-type) {
		margin-bottom: 0.25rem;
	}
`;

export const FormattingOptionsLabel = styled.label`
	font-size: 1.125rem;
	line-height: 1.4;
`;

export const FormattingOptionsCheckbox = styled.input`
	margin-right: 3.5%;
`;
