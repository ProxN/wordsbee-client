import styled from 'styled-components';
import media from '../../styles/media';

const SigninContainer = styled.div`
  grid-column: 1 /-1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    grid-row: 2/3;
  }
`;

export default SigninContainer;
