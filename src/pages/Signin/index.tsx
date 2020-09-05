import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

const Signin: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="goBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default Signin;
