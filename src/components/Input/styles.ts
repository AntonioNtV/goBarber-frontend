import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean,
  isFilled: boolean
}

const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;

    ${(props) => props.isFilled && css`
      svg {
        color: #FF9000
      }
    `}


    ${(props) => props.isFocused && css`
      border-color: #FF9000;

      svg {
        color: #FF9000
      }
    `}

    & + div {
      margin-top: 8px;
    }

    input {
      background: transparent;
      flex: 1;
      border: 0;
      color: #F4EDE8;

      &::placeholder {
        color: #666360;
      }

    }

    svg {
      margin-right: 16px;
    }
`;

export { Container };
