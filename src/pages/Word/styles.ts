import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-gap: 25px;
  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;
