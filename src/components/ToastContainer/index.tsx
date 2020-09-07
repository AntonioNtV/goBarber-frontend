import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const helloWorld = () => {
    console.log('hello world');
  };

  return (
    <Container>

      { messages.map((message) => (
        <Toast type={message.type} key={message.id} hasDescription={!!message.description}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            { !!message.description && <p>{message.description}</p> }
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export { ToastContainer };
