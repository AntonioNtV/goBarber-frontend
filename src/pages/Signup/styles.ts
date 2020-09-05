import styled from 'styled-components';
import { shade } from 'polished';
import signUpBackground from '../../assets/sign-up-background.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  > a {
      display: flex;
      align-items: center;

      color: #F4EDE8;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }

      svg {
        margin-right: 18.5px;
      }

  }

`;

const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;

export { Container, Content, Background };
