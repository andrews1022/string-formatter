import styled, { css } from 'styled-components';

// base label styles
const baseLabelStyles = css`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const Wrapper = styled.div`
  margin: 3.5% 0;
  text-align: left;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    margin-top: 5%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    flex-direction: column-reverse;
  }
`;

export const Box = styled.div`
  &:first-of-type {
    flex: 0 0 70%;
    margin-right: 5%;

    @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
      margin-right: 0;
      width: 100%;
    }
  }

  &:last-of-type {
    flex: 1;

    @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
      width: 100%;
    }
  }
`;

export const Heading = styled.h2`
  ${baseLabelStyles};
`;

export const Group = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &:first-of-type {
    margin-bottom: 4%;
  }
`;

export const Label = styled.label`
  ${baseLabelStyles};
`;

export const TextBox = styled.textarea`
  height: 10vw;
  width: 100%;
  resize: none;
  padding: 0.5rem;
  margin-bottom: 1%;
  font-size: 1.125rem;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    height: 15vw;
  }
`;

export const OptionsList = styled.ul``;

export const OptionsItem = styled.li`
  display: flex;
  align-items: baseline;

  &:not(:last-of-type) {
    margin-bottom: 0.25rem;
  }
`;

export const OptionsLabel = styled.label`
  font-size: 1.125rem;
  line-height: 1.4;
`;

export const OptionsCheckbox = styled.input`
  margin-right: 3.5%;
`;
