import styled, { css } from 'styled-components';
import media from '../../../../styles/media';

export const DefintionContainer = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexLeft = styled.div`
  margin-right: 80px;
  ${media.tablet} {
    margin-right: 60px;
  }
  ${media.phablet} {
    margin-right: 20px;
  }
`;

export const WordName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.dark.light};
  `};
  font-weight: 500;
  opacity: 0.8;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  button {
    background: none;
    border: none;
    outline: none;
    margin-left: 5px;
    background: rgba(175, 230, 134, 0.5);
    width: 30px;
    border-radius: 50%;
    height: 30px;
    cursor: pointer;
    div {
      margin-top: -2px;
      margin-left: 5px;
    }
  }
`;

export const WordIpa = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.dark.light};
  `};
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
  opacity: 0.7;
  margin-left: -25px;
`;

export const FlexRight = styled.div`
  width: 100%;
`;

export const SoundBox = styled.button``;

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
  `};
  opacity: 0.7;
  text-transform: uppercase;
  margin-top: 5px;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.dark.dark};
  `};
  font-weight: 400;
  opacity: 1;
  margin-top: 7px;
`;
