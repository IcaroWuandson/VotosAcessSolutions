import { useState } from 'react';
import { PrimaryButton, Stack, TextField, MessageBar, MessageBarType } from '@fluentui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Database/firebase'
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Stack horizontalAlign="center" tokens={{ childrenGap: 15 }} className="register-container">
      <h1> REGISTRE SUA CONTA</h1>

      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirme a senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errorMessage && (
        <MessageBar messageBarType={MessageBarType.error}>
          {errorMessage}
        </MessageBar>
      )}
      <PrimaryButton text="Registrar" onClick={handleRegister} />
      <p style={{ marginTop: '20px' }}>Já tem conta? <Link to="/login">Faça seu login</Link></p>
    </Stack>
  );
}

export default Register;
