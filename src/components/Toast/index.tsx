import React, { useEffect } from 'react';
import { FiXCircle, FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';
import { useToast, ToastMessage } from '../../hooks/toast';

interface ToastProps {
  toast: ToastMessage
}

const Toast: React.FC<ToastProps> = ({ toast }: ToastProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      type={toast.type}
      hasDescription={!!toast.description}
    >
      <FiAlertCircle size={20} />
      <div>
        <strong>{toast.title}</strong>
        { !!toast.description && <p>{toast.description}</p> }
      </div>

      <button
        type="button"
        onClick={() => {
          removeToast(toast.id);
        }}
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
