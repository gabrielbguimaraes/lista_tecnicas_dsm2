import React from 'react';

interface ModalProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, message, onClose }) => {
  if (!show) return null; // Se não deve mostrar o modal, não renderiza nada

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{message}</h2>
        <button onClick={onClose} style={styles.button}>Fechar</button>
      </div>
    </div>
  );
};

// Estilos do modal
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Modal;
