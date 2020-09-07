import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  const helloWorld = () => {
    console.log('hello world');
  };

  return (
    <Container>
      <Toast>
        <FiAlertCircle size={20} />
        <strong>Aconteceu um Erro</strong>
        <p>Não foi possível fazer login na aplicação</p>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export { ToastContainer };
