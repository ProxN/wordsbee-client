import styled, { css } from 'styled-components';
import media from '../../../../styles/media';

export const DefinitionsContainer = styled.div`
  margin-top: 25px;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.dark.light};
    font-family: ${theme.fonts.secondary};
    span {
      background: ${theme.colors.secondary.light};
    }
  `};
  opacity: 0.8;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 500;
  span {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;
  }

  ${media.phablet} {
    font-size: ${({ theme }) => theme.fontSizes.regular};
  }
`;

export const DefinitionsContent = styled.div`
  margin-top: 25px;
  margin-left: 12px;
`;

export const DefinitionsList = styled.div`
  margin-bottom: 10px;
`;

export const Definition = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const DefinitionText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark.dark};
    font-size: ${theme.fontSizes.regular};
    font-family: ${theme.fonts.secondary};
  `};
  opacity: 0.9;
  line-height: 1.1;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  ${media.phablet} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const DefinitionExample = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark.light};
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.primary};
  `};
  opacity: 0.8;
  line-height: 1.3;
  button {
    outline: none;
    border: none;
    display: inline-block;
    margin-left: 5px;
    background: rgba(175, 230, 134, 0.5);
    width: 25px;
    border-radius: 50%;
    height: 25px;
    cursor: pointer;
    div {
      margin-left: 5px;
    }
  }
`;

export const DefinitionDot = styled.span`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.primary.light};
  display: block;
  border-radius: 50%;
  opacity: 0.7;
  margin-right: 25px;
`;

export const SoundBox = styled.div``;
