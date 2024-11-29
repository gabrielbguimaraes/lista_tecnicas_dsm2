import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  to: string;
  delay?: number;
};

const Redirector: React.FC<Props> = ({ to, delay = 0 }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to);
    }, delay);

    return () => clearTimeout(timer);
  }, [to, navigate, delay]);

  return <div>Redirecionando...</div>;
};

export default Redirector;
