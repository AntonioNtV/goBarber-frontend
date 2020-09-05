import styled from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

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
    h1 {
    margin-bottom: 24px;
  }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #F4EDE8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }



    button {
      background: #FF9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#FF9000')}
      }

    }

    a {
      color: #F4EDE8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }

  > a {
      display: flex;
      align-items: center;

      color: #FF9000;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#FF9000')}
      }

      svg {
        margin-right: 18.5px;
      }

  }

`;

const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

export { Container, Content, Background };
