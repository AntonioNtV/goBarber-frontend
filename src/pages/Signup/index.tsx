import React from 'react';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const Signup: React.FC = () => (
  <>
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="goBarber" />
        <form>

          <h1>Faça seu cadastro</h1>
          <Input name="username" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="create">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  </>
);

export default Signup;
